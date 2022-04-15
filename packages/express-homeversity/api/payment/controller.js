const mongoose = require("mongoose");
const paymentModel = require("./model");

exports.newPayment = async (req, res) => {
  const body = req.body;

  const Payment = new paymentModel({
    idUser: body.idUser,
    method: body.method,
    price: body.price,
    courses: body.courses,
    programs: body.programs,
    idPremiun: body.idPremiun,
  });
  await Payment.save()
    .then((response) => {
      console.log(response);
      res
        .status(200)
        .json({
          success: true,
          message: "Payment has been created",
          data: response,
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    });
};

exports.getAllPayment = (req, res) => {
  // const courses = db.get('courses').value(); // query
  paymentModel
    .find()
    .exec()
    .then((response) => {
      res.status(200).json({ success: true, teacher: response });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    });
};

exports.deletePaymentByID = (req, res) => {
  // const courses = db.get('courses').value(); // query
  const id = req.params.id;
  paymentModel
    .findByIdAndDelete(id)
    .then((response) => {
      res.status(200).json({ success: true, message: "Payment deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    });
};

exports.deleteAllPayment = (req, res) => {
  // const courses = db.get('courses').value(); // query
  paymentModel
    .deleteMany()
    .then((response) => {
      res.status(200).json({ success: true, message: "All payment delete" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    });
};

exports.updatePaymentById = (req, res) => {
  // const courses = db.get('courses').value(); // query
  const id = req.params.id;
  const body = req.body;
  teacherModel
    .findByIdAndUpdate(id, body, { new: true })
    .then((response) => {
      res
        .status(200)
        .json({ success: true, message: "Payment update", data: response });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    });
};
