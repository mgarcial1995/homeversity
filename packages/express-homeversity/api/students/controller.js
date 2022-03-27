const StudentModel = require("./model");

exports.getAllStudents = (req, res) => {
  // const courses = db.get('courses').value(); // query
  StudentModel.find()
    .exec()
    .then((response) => {
      res.status(200).json({ success: true, students: response });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    });
};
exports.createStudent = async (req, res) => {
  const body = req.body;

  const Students = new StudentModel({
    userID: body.userID,
    courses: body.courses,
    programs: body.programs,
    carshop: body.carshop,
    premiumID: body.premiumID,
    initPremium: body.initPremium,
    finishPremium: body.finishPremium
  });
  await Students.save()
    .then((response) => {
      console.log(response);
      res
        .status(200)
        .json({
          success: true,
          message: "Student has been created",
          data: response,
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    });
};
exports.deleteStudent = (req, res) => {
  // const courses = db.get('courses').value(); // query
  const id = req.params.id;
  StudentModel.findByIdAndDelete(id)
    .then((response) => {
      res.status(200).json({ success: true, message: "Student deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    });
};
exports.deleteAllStudent = (req, res) => {
  // const courses = db.get('courses').value(); // query
  StudentModel.deleteMany()
    .then((response) => {
      res.status(200).json({ success: true, message: "All students delete" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    });
};
exports.updateStudent = (req, res) => {
  // const courses = db.get('courses').value(); // query
  const id = req.params.id;
  const body = req.body;
  StudentModel.findByIdAndUpdate(id, body, { new: true })
    .then((response) => {
      res
        .status(200)
        .json({ success: true, message: "Student update", data: response });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    });
};
