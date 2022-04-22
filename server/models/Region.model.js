const mongoose = require("mongoose");

const RegionSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  provinces: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "province",
    },
  ],
});

RegionSchema.pre(/^find/, function (next) {
  this.populate({
    path: "provinces",
    select: "-_id -__v",
  });

  next();
});

const Region = mongoose.model("region", RegionSchema);

module.exports = Region;
