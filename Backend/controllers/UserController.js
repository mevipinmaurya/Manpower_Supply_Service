import User from "../models/UserModel.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

// User signup functionality
const register = async (req, res) => {
    try {
        const { name, email, password, address } = req.body;

        // Basic validation
        if (!name || !email || !password) {
            return res.status(401).json({
                success: false,
                message: "Name, email, and password are required"
            });
        }

        // Optional: You can validate address fields here if required
        if (address && (!address.street || !address.city || !address.state || !address.zip || !address.country)) {
            return res.status(400).json({
                success: false,
                message: "Incomplete address information"
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Email already registered"
            });
        }

        const hashPass = await bcryptjs.hash(password, 10);
        const user = new User({
            name,
            email,
            password: hashPass,
            address // automatically embedded from req.body
        });

        await user.save();

        return res.status(201).json({
            success: true,
            message: "Account created successfully"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "An error occurred during registration"
        });
    }
};


// Login Functionality
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({
                success: false,
                message: "All fields are required"
            })
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User doesn't exit"
            })
        }

        const matchPass = await bcryptjs.compare(password, user.password)
        if (!matchPass) {
            return res.status(501).json({
                success: false,
                message: "Incorrect Password !!!"
            })
        }

        const tokenData = {
            userId: user._id
        }

        const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: "1d" });

        return res.status(201).cookie("token", token, { expiresIn: "1d", httpOnly: true }).json({
            success: true,
            message: `Welcome back ${user.name}`,
            user: {
                userId: user._id,
                email: user.email,
                name: user.name,
                address : {
                    street : user.address.street,
                    city : user.address.city,
                    state : user.address.state,
                    pincode : user.address.zip,
                    country : user.address.country
                }
            },
            token,
        })
    }
    catch (error) {
        console.log(error)
        return res.status(401).json({
            success: false,
            message: "Error"
        })
    }
}



export { register, login } 