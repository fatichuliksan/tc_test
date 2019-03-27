'use strict';

exports.format = function (statusCode, values = null, res, message = null) {
    if (!message) {
        if (statusCode == 200) {
            message = 'success'
        } else {
            message = 'internal server error'
        }
    }

    var data = {
        'status': statusCode,
        'message': message,
        'data': values,
    };
    // res.status(statusCode);
    res.json(data);
    res.end(data);
};