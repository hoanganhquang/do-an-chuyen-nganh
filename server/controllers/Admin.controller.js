const Order = require("../models/Order.model");

exports.statistics = async (req, res) => {
  try {
    const date = req.query.date;

    const data = await Order.aggregate([
      {
        $match: {
          orderDate: new Date(date),
        },
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
