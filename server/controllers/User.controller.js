const Order = require("../models/Order.model");
const User = require("../models/User.model");
const crud = require("./crud");

exports.updateUser = async (req, res) => {
  await crud.update(User, req, res);
};

exports.statistics = async (req, res) => {
  try {
    const date = req.query;
    let match;

    if (date.year) {
      match = {
        orderDate: {
          $gte: new Date(`${date.year}-01-01`),
          $lte: new Date(`${date.year}-12-31`),
        },
      };
    }

    if (date.month) {
      const oddMonth = [1, 3, 5, 7, 8, 10, 12];
      const evenMonth = [2, 4, 6, 9, 10, 11];
      const month = Number(date.month.split("-")[1]);
      const year = Number(date.month.split("-")[0]);

      if (oddMonth.includes(month)) {
        match = {
          orderDate: {
            $gte: new Date(`${year}-${month}-01`),
            $lte: new Date(`${year}-${month}-31`),
          },
        };
      }

      if (evenMonth.includes(month)) {
        match = {
          orderDate: {
            $gte: new Date(`${year}-${month}-01`),
            $lte: new Date(`${year}-${month}-30`),
          },
        };
      }
    }

    if (date.date) {
      match = {
        orderDate: new Date(date.date),
      };
    }

    const data = await Order.aggregate([
      {
        $match: {
          user: req.user._id,
        },
      },
      {
        $match: match,
      },
      {
        $lookup: {
          from: "products",
          localField: "details._id",
          foreignField: "_id",
          as: "products",
        },
      },
      {
        $project: {
          _id: 1,
          total: 1,
          details: 1,
          "products.name": 1,
          "products._id": 1,
        },
      },
      {
        $project: {
          _id: 1,
          total: 1,
          products: {
            $concatArrays: ["$details", "$products"],
          },
        },
      },
      {
        $unwind: "$products",
      },
      {
        $group: {
          _id: {
            _id: "$_id",
            products: "$products._id",
          },
          total: { $first: "$total" },
          products: { $mergeObjects: "$products" },
        },
      },
      {
        $group: {
          _id: "$_id._id",
          total: { $first: "$total" },
          products: { $push: "$products" },
        },
      },
    ]);

    res.json({
      status: "Success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "Failure",
    });
  }
};
