'use strict';

let response = require('../configs/response');
let User = require('../models/users');

module.exports = {
    users: (req, res) => {
        User.getUsers(function (error, result) {
            if (error)
                response.format(500, error, res, result);
            response.format(200, result, res);
        });
    },
    userCreate: (req, res) => {
        User.setUser(null, req, function (error, result) {
            if (error)
                response.format(500, error, res, result);
            response.format(200, result, res);
        });
    },
    userUpdate: (req, res) => {
        User.setUser(req.params.id, req, function (error, result) {
            if (error)
                response.format(500, error, res, result);
            response.format(200, result, res);
        });
    },
    userDetail: (req, res) => {
        User.getUserById(req, function (error, result) {
            if (error)
                response.format(500, error, res, result);
            response.format(200, result, res);
        })
    },
    userDelete: (req, res) => {
        User.deleteUserById(req, function (error, result) {
            if (error)
                response.format(500, error, res, result);
            response.format(200, result, res);
        })
    }
}