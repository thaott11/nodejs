// Get the client
import mysql from 'mysql2/promise';

// Create the connection to database
const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'learn_nodejs',
});


// // Using placeholders
// try {
//   const [results] = await connection.query(
//     'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//     ['Page', 45]
//   );

//   console.log(results);
// } catch (err) {
//   console.log(err);
// }


export default connection