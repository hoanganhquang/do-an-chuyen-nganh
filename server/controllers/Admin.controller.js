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
          _id: 0,
          total: 1,
          details: 1,
          "products.name": 1,
          "products._id": 1,
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
