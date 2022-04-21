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
  this.populate("provinces");

  next();
});

const Region = mongoose.model("region", RegionSchema);

module.exports = Region;
