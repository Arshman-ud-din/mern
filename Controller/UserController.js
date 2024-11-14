const bcrypt = require('bcryptjs');

// Function to Get User Registration Data (optional, for demonstration)
function GetUserRegistration(req, res) {
    return res.send("User registration data fetched successfully.");
}

// Async function for creating a user account
async function CreateUserAccount(req, res) {
    try {
        const { username, email,Age, password } = req.body;

        // Basic validation: Check if required fields are provided
        if (!username || !email || !password) {
            return res.status(400).send({ message: "Username, email, and password are required." });
        }

        // Validate email format (basic check)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).send({ message: "Invalid email format." });
        }

        // Password length check
        if (password.length < 6) {
            return res.status(400).send({ message: "Password must be at least 6 characters long." });
        }

        // Hash password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // Simulate saving the user data (you can replace this with database logic)
        const userData = {
            username,
            email,
            Age,
            password: hashedPassword
        };

        // You would save the userData into the database here, like:
        // await UserModel.create(userData);

        console.log(userData);  // Just for debugging

        // Send success response
        return res.status(201).send({
            message: "User registered successfully!",
            userdata: userData
        });

    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Internal server error." });
    }
}

module.exports = { GetUserRegistration, CreateUserAccount };
