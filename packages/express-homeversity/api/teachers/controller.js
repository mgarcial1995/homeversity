const {Model, teacherFields, coursesRef} =require('./model');
const referencesNames = Object.getOwnPropertyNames(coursesRef);

exports.newTeacher = async (req, res) =>{
    const body = req.body
    const Teacher = new Model(body)
    await Teacher.save()
        .then(response =>{
            console.log(response)
            res.status(200).json({ success: true, message: 'Teacher has been created', data: Teacher })
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({ success: false, error: err})
        }
    );
}
exports.getAllTeachers = (req, res) =>{
    const populate = referencesNames.join(' ');
    const all = Model.find({}).populate(populate)
    all.exec().then(response =>{
        res.status(200).json({ success: true, teacher: response })
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err})
    })
}
exports.getTeacherId = async (req, res) => {
    const {id = null} = req.params;
    const Teacher = Model.findById(id);
    await Teacher.exec()
    .then(response => {
        if (!Teacher) {
            const message = `${Model.modelName} not found`;
            console.log(message)
        }else{
            console.log(response)
        res.status(200).json({ success: true, message: 'Teacher has been found', data: response })
        }  
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err })
    }
    );
}


exports.deleteTeacherByID = (req, res) =>{
    const id = req.params.id
    Model.findByIdAndDelete(id).then(response =>{
        res.status(200).json({ success: true, message:"Teacher deleted" })
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err})
    })
}

exports.deleteAllTeacher = (req, res) =>{
    // const courses = db.get('courses').value(); // query
    Model.deleteMany().then(response =>{
        res.status(200).json({ success: true, message:"All teacher delete" })
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err})
    })
}

exports.updateTeacherById = (req, res) =>{
    // const courses = db.get('courses').value(); // query
    const id = req.params.id
    const body = req.body
    Model.findByIdAndUpdate(id, body, {new: true}).then(response =>{
        res.status(200).json({ success: true, message:"Teacher update", data: response })
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err})
    })
}