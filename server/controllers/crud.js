exports.insert = async (model, req, res) => {
  try {
    await model.create(req.body);

    res.json({
      status: "success",
    });
  } catch (error) {
    res.json({
      status: "failure",
      message: "Không thành công",
    });
  }
};

exports.delete = async (model, req, res) => {
  try {
    await model.deleteOne({
      _id: req.params.id,
    });

    res.json({
      status: "success",
    });
  } catch (error) {
    res.json({
      status: "failure",
      message: "Không thành công",
    });
  }
};

exports.update = async (model, req, res) => {
  try {
    if (req.user) {
      await model.updateOne({ _id: req.user._id }, req.body);
    } else {
      await model.updateOne({ _id: req.params.id }, req.body);
    }

    res.json({
      status: "success",
    });
  } catch (error) {
    res.json({
      status: "failure",
      message: "Không thành công",
    });
  }
};

exports.getAll = async (model, req, res) => {
  try {
    let data;

    if (req.user.role === "User") {
      data = await model.findById(req.user._id);
    } else {
      data = await model.find();
    }

    res.json({
      status: "success",
      data,
    });
  } catch (error) {
    res.json({
      status: "failure",
      message: "Không thành công",
    });
  }
};

exports.getOne = async (model, res, query) => {
  try {
    const data = await model.findOne(query);

    res.json({
      status: "success",
      data,
    });
  } catch (error) {
    res.json({
      status: "failure",
      message: "Không thành công",
    });
  }
};
