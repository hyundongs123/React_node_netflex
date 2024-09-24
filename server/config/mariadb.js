const mariadb = require('mariadb');

// Create a connection pool
const pool = mariadb.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3301,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '123456',
    database: process.env.DB_DATABASE || 'board',
    connectionLimit: 5 // 커넥션 풀에서 사용할 최대 연결 수
});

module.exports = pool;