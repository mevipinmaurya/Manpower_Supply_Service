import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type  : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const ServiceModel = mongoose.model.service || mongoose.model("Service", serviceSchema);

export default ServiceModel