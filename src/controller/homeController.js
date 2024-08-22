import connection from "../configs/connectBD.js";

// Render dữ liệu 
let renderCreateUserForm = (req, res) => {
    return res.render('createUser');
}

let getHome = async (req, res) => {
    try {
        const [results] = await connection.query('SELECT * FROM `user`');
        return res.render('index', { dataUser: results });
    } catch (err) {
        console.log(err);
    }
}

let getUserDetail = async (req, res) => {
    const userId = req.params.id;
    try {
        const [result] = await connection.query('SELECT * FROM `user` WHERE ID = ?', [userId]);
        return res.render('userDetail', { user: result[0] });
    } catch (err) {
        console.log(err);
    }
}


let CreateUser = async (req, res) => {
    const { firstName, lastName, address, email } = req.body
    try {
        await connection.query('INSERT INTO `user` (`First name`, `Last_Name`, `Address`, `Email`) VALUES (?, ?, ?, ?)', [firstName, lastName, address, email]);
        return res.redirect('/');
    } catch (err) {
        console.log(err);
    }
}

let renderUpdateForm = async (req, res) => {
    const userId = req.params.id;
    try {
        const [result] = await connection.query('SELECT * FROM `user` WHERE ID = ?', [userId])
        return res.render('updateUser', { user: result[0] });
    } catch (err) {
        console.log(err)
    }
}

// Update User
let updateUser = async (req, res) => {
    const userId = req.params.id;
    const { firstName, lastName, address, email } = req.body;
    try {
        await connection.query('UPDATE `user` SET `First name` = ?, `Last_Name` = ?, `Address` = ?, `Email` = ? WHERE ID = ?', [firstName, lastName, address, email, userId]);
        return res.redirect('/');
    } catch (err) {
        console.log(err);
    }
}

// Xóa người dùng
let deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        await connection.query('DELETE FROM `user` WHERE ID = ?', [userId]);
        return res.redirect('/');
    } catch (err) {
        console.log(err);
    }
}


export default { getHome, getUserDetail, CreateUser, renderCreateUserForm, renderUpdateForm, updateUser, deleteUser }
