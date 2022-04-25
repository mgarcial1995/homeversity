const UserModel = require("./model");
const StudentModel = require("../students/model");
const TeachersModel = require("../teachers/model");
// const {Model, teachersRef, courseFields} = require('./model')
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

exports.getUserId = async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  const typeUser =
    user.typeUser === "student"
      ? await StudentModel.findOne({ userID: user._id })
      : TeachersModel({ userID: user._id });
  let userdata = {
    typeUser,
    name: user.name + " " + user.surname,
  };
  res.json({ userdata });
};
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
exports.signinUser = async (req, res) => {
  const user = await UserModel.findOne({ email: req.body.email });
  const typeUser =
    user.typeUser === "student"
      ? await StudentModel.findOne({ userID: user._id })
      : TeachersModel({ userID: user._id });
  if (!user) {
    return res.status(400).json({ message: "El usuario no existe" });
  }
  let isValid = await UserModel.comparePassword(
    req.body.password,
    user.passWord
  );
  if (!isValid)
    return res.status(401).json({ token: null, message: "Invalid password" });
  const token = jwt.sign({ id: user._id }, "user", {
    expiresIn: 86400, //24hrs
  });
  let userdata = {
    typeUser,
    name: user.name,
    surname: user.surname,
    id: user._id,
  };
  res.json({ token, userdata });
};
exports.signupUser = async (req, res) => {
  const body = req.body;

  const isUser = await UserModel.findOne({ email: body.email });

  const User = new UserModel({
    name: body.name,
    surname: body.surname,
    gender: body.gender,
    bornDate: body.bornDate,
    typeUser: body.typeUser,
    passWord: body.passWord,
    email: body.email,
  });

  if (User.typeUser === "student") {
    const Student = new StudentModel({
      userID: User._id,
      courses: [],
      programs: [],
      carshop: [],
      premiumID: null,
      initPremium: null,
      finishPremium: null,
    });
    await Student.save();
  } else {
    const Teacher = await TeachersModel({
      name: body.name,
      description: body.description,
      photo: body.photo,
      job: body.job,
      idUser: User._id,
    });
    await Teacher.save();
  }
  await User.save()
    .then((response) => {
      console.log(response);
      let token = jwt.sign({ id: response._id }, "user", {
        expiresIn: 86400, //24hrs
      });
      res.status(200).json({
        success: true,
        token: token,
        data: response,
      });
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
    gender: body.gender,
    bornDate: body.bornDate,
    typeUser: body.typeUser,
    passWord: body.passWord,
    email: body.email,
  });
  await Users.save()
    .then((response) => {
      console.log(response);
      res.status(200).json({
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
