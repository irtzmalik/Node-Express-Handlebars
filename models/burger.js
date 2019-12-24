// your model should do CRUD operations

var orm = require("../config/orm.js");

var burger = {
    selectAll: function (inp_obj) {
        orm.selectAll(function (res) {
            inp_obj(res);
        });
    },
    insertOne: function (burger, inp_obj) {
        orm.insertOne(burger, function (res) {
            inp_obj(res);
        });
    },
    updateOne: function (id, inp_obj) {
        orm.updateOne([id], function (res) {
            inp_obj(res);
        });
    }
};

module.exports = burger;
