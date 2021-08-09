const mysql = require('mysql')

export const con = 
    mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        port: 8889,
        database: 'identity'
      });
