// placeholder for controller code


var express = require('express');

var router = express

var burger = require("../models/burgers.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burg_obj = {
            burgers: data
        };
        console.log(burg_obj);
        res.render("index", burg_obj);
    });
});

router.post("/", function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect("/");
    });
});

router.put("/:id", function (req, res) {
    var id = req.params.id;

    console.log("id", id);

    burger.updateOne(id, function () {
        res.redirect("/");
    });
});

router.post("/delete", function (req, res) {
    burger.deleteALL(function (data) {
       res.redirect("/");
    });
});

module.exports = router;

