'use strict';

module.exports = function (app) {
    let apiUser = require('./controllers/ApiUserController');
    app.get('/users', apiUser.users);
    app.get('/users/:id', apiUser.userDetail);
    app.post('/users', apiUser.userCreate);
    app.put('/users/:id', apiUser.userUpdate);
    app.delete('/users/:id', apiUser.userDelete);
};