const mongoose = require("mongoose")
const {Model, teachersRef, courseFields} = require('./model')
const referencesNames = Object.getOwnPropertyNames(teachersRef);


exports.getAllCourses = async (req, res) => {
    const populate = referencesNames.join(' ');
    const all = Model.find({}).populate(populate);
    await all.exec()
    .then(response =>{
        console.log(response);
        res.status(200).json({ success: true, courses: response });
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err});
    })
};
exports.getCourseById = async (req, res) => {
    const {id = null} = req.params;
    const Course = Model.findById(id);
    await Course.exec()
    .then(response => {
        if (!Course) {
            const message = `${Model.modelName} not found`;
            console.log(message);
        }else{
            console.log(response);
        res.status(200).json({ success: true, message: 'Course has been found', data: response })
        }  
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err });
    }
    );
};
exports.newCourse = async (req, res) =>{
    const body = req.body;
    const Course = new Model(body);
    await Course.save()
        .then(response =>{
            console.log(response)
            res.status(200).json({ success: true, message: 'Course has been created', data: response })
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({ success: false, error: err})
        }
    );
}
exports.deleteCourseByID = (req, res) =>{
    const id = req.params.id
    Model.findByIdAndDelete(id).then(response =>{
        res.status(200).json({ success: true, message:"Course deleted" })
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err})
    })
}
exports.deleteAllCourses = (req, res) =>{
    Model.deleteMany().then(response =>{
        res.status(200).json({ success: true, message:"All courses delete" })
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err})
    })
}
exports.updateCourseById = (req, res) =>{
    const id = req.params.id
    const body = req.body
    Model.findByIdAndUpdate(id, body, {new: true}).then(response =>{
        res.status(200).json({ success: true, message:"Course update", data: response })
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err})
    })
}
