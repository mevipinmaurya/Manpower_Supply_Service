import ServiceModel from "../models/ServiceModel.js"


// Add Service
const addService = async (req, res) => {
    const addService = new ServiceModel({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        category: req.body.category,
        price: req.body.price
    })

    try {
        await addService.save()
        res.json({
            success: true,
            message: "Service Added Successfully"
        })
    } catch (error) {
        res.json({
            success: false,
            message: "Failed !"
        })
    }
}

// Get Service
const getService = async (req, res) => {
    try {
        const services = await ServiceModel.find({})
        res.json({
            success: true,
            message: services
        })
    } catch (error) {
        res.json({
            success: false,
            message: "Some error occured"
        })
    }
}

// Delete Service
const delService = async (req, res)=>{
    try {
        await ServiceModel.findByIdAndDelete(req.body.id);
        res.json({
            success : true,
            message : "Service Deleted"
        })
    } catch (error) {
        res.json({
            success : false,
            message : "Some error occured"
        })
    }
}

export { addService, getService, delService }