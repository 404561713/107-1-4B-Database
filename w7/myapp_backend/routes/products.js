var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

    var db = req.con;
    var data = '';

    db.query("SELECT * from product", (req, rows) => {
        data = rows;
        console.log(data);
        res.render('products', { title: 'Products List', data: data })
    })
});


module.exports = router;