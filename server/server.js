const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const test = require("./Router/router");
const mariadb = require('./config/mariadb'); // 수정 없음

app.use('/api', test);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server OK, port number is ${port}`);

    // Connect to the MariaDB database using connection pool
    mariadb.getConnection()
        .then(conn => {
            console.log('Connected to MariaDB database!');
            conn.release(); // 커넥션 해제 (사용 후 풀로 반환)
        })
        .catch(err => {
            console.error('Error connecting to the database:', err);
        });
});