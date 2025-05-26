import Cart from '../models/CartModel.js'
import Service from '../models/ServiceModel.js'


// Adding Items to cart
const addToCart = async (req, res) => {
    try {
        const userId = req.user;
        const { serviceId, quantity } = req.body;
        const service = await Service.findById(serviceId);
        if (!service) {
            return res.json({
                success: false,
                message: "Service not found!",
            })
        }

        const price = parseFloat(service.price)     // Converting String to number
        let cart = await Cart.findOne({ userId })
        if (!cart) {
            cart = new Cart({ userId, items: [] })
        }
        const existingItem = cart.items.find(
            (item) => item.serviceId.toString() === serviceId
        )

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.items.push({
                serviceId,
                quantity,
                priceAtAddition: price
            })
        }

        cart.updateAt = new Date();
        await cart.save()

        res.json({
            success: true,
            message: "Item added to cart",
            userId: `the userId is ${userId}`,
            cart,
        })

    } catch (error) {
        res.json({
            success: false,
            message: "Some Error Occured!"
        })
    }
}

// Deleting items from the cart
const removeFromCart = async (req, res) => {
    try {
        const userId = req.user;
        const { serviceId } = req.body;

        // Check service exists
        const service = await Service.findById(serviceId);
        if (!service) {
            return res.json({
                success: false,
                message: "Service not found!"
            });
        }

        if (!userId) {
            return res.json({
                success: false,
                message: "Something went wrong!!"
            });
        }

        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.json({
                success: false,
                message: "Cart not found!"
            });
        }

        const existingItem = cart.items.find(
            (item) => item.serviceId.toString() === serviceId
        );

        if (!existingItem) {
            return res.json({
                success: false,
                message: "Item not found in the cart!"
            });
        }

        if (existingItem.quantity > 1) {
            existingItem.quantity--;
        } else {
            // Remove the item from the array
            cart.items = cart.items.filter(     // Filter() function is used to create the new array that includes only the elements that pass a certain condition
                (item) => item.serviceId.toString() !== serviceId
            );
        }

        await cart.save();

        return res.json({
            success: true,
            message: "Cart updated successfully."
        });

    } catch (error) {
        // console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};


export { addToCart, removeFromCart }