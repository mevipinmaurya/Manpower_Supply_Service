import { instance } from "../index.js"
import crypto from 'crypto'

export const processPayment = async (req, res) => {
    const options = {
        amount: Number(req.body.amount * 100),
        currency: "INR"
    }

    const order = await instance.orders.create(options)

    res.status(200).json({
        success: true,
        order
    })
}


export const getKey = async (req, res) => {
    res.status(200).json({
        key: process.env.RAZORPAY_API_KEY
    })
}


export const paymentVerification = async (req, res) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
    const body = razorpay_order_id + "|" + razorpay_payment_id

    const expectedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_API_SECRET).update(body.toString()).digest("hex")
    // console.log(`Razor signature ${razorpay_signature}`)
    // console.log(`Expected Razor signature ${expectedSignature}`)

    const isAuthentic = expectedSignature === razorpay_signature
    if(isAuthentic){
        return res.redirect(`https://manpower-supply-service-1.onrender.com/paymentSuccess?reference=${razorpay_payment_id}`)
    }
    else{
        res.status(404).json({
            success: false
        })
    }

}