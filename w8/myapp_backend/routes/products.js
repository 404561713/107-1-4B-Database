var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

    var db = req.con;
    var data = '';

    db.query("SELECT * from product", (err, rows) => {
        if (err) console.log(err);
        data = rows;
        res.render('products', { title: 'Products List', data: data })
    })
});

router.get('/create', function(req, res, next) {
    res.render('productCreate', { title: "Create Product" });
});

router.post('/create', function(req, res, next) {
    var db = req.con;
    var sql = {
        ProductName: req.body.product_name,
        Price: req.body.product_price
    };
    res.redirect('/products');
    db.query('INSERT INTO product SET ?', sql, function(err, rows) {
        if (err) {
            console.log(err);
        }
    });
    res.setHeader('Content-Type', 'application/json');
    res.redirect('/products');
});


router.get('/edit', function(req, res, next) {
    var db = req.con;
    var id = req.query.id;
    var data = '';

    db.query("SELECT * from product where ProductID=?", id, (err, rows) => {
        if (err) console.log(err);
        data = rows[0];
        console.log(data.ProductID);
        res.render('productEdit', { title: 'Products List', data: data })
    })
});

router.post('/edit', function(req, res, next) {
    var db = req.con;
    var id = req.body.product_id;
    var sql = {
        ProductID: id,
        ProductName: req.body.product_name,
        Price: req.body.product_price
    };
    console.log(sql);
    res.redirect('/products');
    db.query('UPDATE product SET ? WHERE ProductID = ?', [sql, id], function(err, rows) {
        if (err) {
            console.log(err);
        }
    });
    res.setHeader('Content-Type', 'application/json');
    res.redirect('/products');
});

router.get('/delete', function(req, res, next) {
    var db = req.con;
    var id = req.query.id;

    db.query("DELETE from product where ProductID=?", id, (err, rows) => {
        if (err) console.log(err);
        data = rows;
        res.redirect('/products');
    })
});


module.exports = router;