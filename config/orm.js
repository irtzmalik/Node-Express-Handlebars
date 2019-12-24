
// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.

var connection = require('../config/connection.js');


var orm = {

    selectAll: function (inp_obj) {
        var query = "SELECT * FROM burgers";
        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }
            inp_obj(result);
        });
    },

    insertOne: function (burger, inp_obj) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burger], function (err, result) {
            if (err) {
                throw err;
            }
            inp_obj(result);
        });
    },

    updateOne: function (id, inp_obj) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";

        connection.query(queryString, [id], function (err, result) {
            if (err) {
                throw err;
            }
            inp_obj(result);
        });
    },

    deleteALL: function (inp_obj) {
        var queryString = "TRUNCATE TABLE burgers";
    
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            inp_obj(result);
        });
    }
};

module.exports = orm;

