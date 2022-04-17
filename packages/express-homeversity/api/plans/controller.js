const PlanModel = require('./model')
const mongoose = require("mongoose")

exports.getAllPlans = (req, res) =>{
    PlanModel.find().exec().then(response =>{
        res.status(200).json({ success: true, plans: response })
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err})
    })
}
exports.newPlan = async (req, res) =>{
    const body = req.body
    const Plan = new PlanModel({
        tittle: body.tittle,
        time: body.time,
        recommended: body.recommended,
        message: body.message,
        label: body.description,
        price: body.price
    });
    await Plan.save()
        .then(response =>{
            console.log(response)
            res.status(200).json({ success: true, message: 'Plan has been created', data: response })
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({ success: false, error: err})
        }
    );
}
exports.deletePlanByID = (req, res) =>{
    const id = req.params.id
    PlanModel.findByIdAndDelete(id).then(response =>{
        res.status(200).json({ success: true, message:"Plan deleted" })
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err})
    })
}
exports.deleteAllPlans = (req, res) =>{
    PlanModel.deleteMany().then(response =>{
        res.status(200).json({ success: true, message:"All plans deleted" })
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err})
    })
}
exports.updatePlanById = (req, res) =>{
    const id = req.params.id
    const body = req.body
    PlanModel.findByIdAndUpdate(id, body, {new: true}).then(response =>{
        res.status(200).json({ success: true, message:"Plan updated", data: response })
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err})
    })
}