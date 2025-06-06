import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const addressSchema = new Schema({
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    country: { type: String }
}, { _id: false });

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        address: addressSchema // Embedded address
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);
export default User;
