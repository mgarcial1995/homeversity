const UserModel = require("./model");
const mongoose = require("mongoose");

exports.getAllUsers = (req, res) => {
  // const courses = db.get('courses').value(); // query
  UserModel.find()
    .exec()
    .then((response) => {
      res.status(200).json({ success: true, users: response });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    });
};
exports.createUser = async (req, res) => {
  const body = req.body;

  const Users = new UserModel({
    name: body.name,
    surname: body.surname,
    bornDate: body.bornDate,
    carShop: body.carShop,
    typeUser: body.typeUser,
    passWord: body.passWord,
    email: body.email,
    premiumID: body.premiumID,
    initPremium: body.initPremium,
    finishPremium: body.finishPremium,
    courses: body.courses,
    descriptTeacher: body.descriptTeacher,
    jobTeacher: body.jobTeacher,
  });
  await Users.save()
    .then((response) => {
      console.log(response);
      res
        .status(200)
        .json({
          success: true,
          message: "User has been created",
          data: response,
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    });
};
exports.deleteUser = (req, res) => {
  // const courses = db.get('courses').value(); // query
  const id = req.params.id;
  UserModel.findByIdAndDelete(id)
    .then((response) => {
      res.status(200).json({ success: true, message: "User deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    });
};
exports.deleteAllUsers = (req, res) => {
  // const courses = db.get('courses').value(); // query
  UserModel.deleteMany()
    .then((response) => {
      res.status(200).json({ success: true, message: "All users delete" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    });
};
exports.updateUser = (req, res) => {
  // const courses = db.get('courses').value(); // query
  const id = req.params.id;
  const body = req.body;
  UserModel.findByIdAndUpdate(id, body, { new: true })
    .then((response) => {
      res
        .status(200)
        .json({ success: true, message: "User update", data: response });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    });
};
