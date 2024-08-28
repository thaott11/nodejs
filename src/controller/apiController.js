import connection from "../configs/connectBD.js";

export const GetAllUsers = async (req, res) => {
    try {
        const [results] = await connection.query('SELECT * FROM `user`');
        return res.status(200).json({
            message: 'hi',
            data: results
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: 'Error retrieving users',
            error: err.message
        });
    }
};

export const CreateUser = async (req, res) => {
    const { firstName, lastName, address, email } = req.body;

    // Debugging logs
    console.log("Received body:", req.body);

    // Check if all fields are present
    if (!firstName || !lastName || !email || !address) {
        return res.status(400).json({
            message: 'All fields are required'
        });
    }

    try {
        // Insert new user into the database
        await connection.query(
            'INSERT INTO `user` (`First name`, `Last_Name`, `Address`, `Email`) VALUES (?, ?, ?, ?)',
            [firstName, lastName, address, email]
        );

        return res.status(201).json({
            message: 'User created successfully'
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: 'Error creating user',
            error: err.message
        });
    }
};
