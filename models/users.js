'use strict';

let db = require('../configs/config');
let sql;
let data;

//Task object constructor
let User = function (user) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.address = user.address;
    this.phone = user.phone;
    this.created_at = new Date();
    this.updated_at = new Date();
};

User.setUser = function setUser(id, req, result) {
    if (id) {
        data = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            phone: req.body.phone,
            updated_at: new Date()
        };
        sql = "UPDATE users SET ? WHERE id=" + id;
    } else {
        data = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            phone: req.body.phone,
            created_at: new Date()
        };
        sql = "INSERT INTO users SET ?";
    }

    db.query(sql, data, function (error, rows) {
        if (error) {
            result(error, null);
        } else {
            if (rows.length > 0) {
                result(null, rows[0]);
            } else {
                result(null, rows);
            }
        }
    });
};

User.getUsers = function getUsers(result) {
    sql = "SELECT * FROM users";
    db.query(sql, function (error, rows) {
        if (error) {
            result(error);
        } else {
            result(null, rows);
        }
    });
};

User.getUserById = function getUserById(req, result) {
    data = {
        id: req.params.id,
    };
    sql = 'SELECT * FROM users where id=? limit 1';
    db.query(sql, data, function (error, rows) {
        if (error) {
            result(error, null);
        } else {
            if (rows.length > 0) {
                result(null, rows[0]);
            } else {
                result(null, []);
            }
        }
    });
};

User.deleteUserById = function deleteUserById(req, result) {
    data = {
        id: req.params.id
    };
    sql = " DELETE FROM users WHERE id=?";
    db.query(sql, data, function (error, rows) {
        if (error) {
            result(error);
        } else {
            result(null, rows);
        }
    });
};


module.exports = User;