var express = require('express');
var bodyParser = require("body-parser");
var app = express();

var dbConfig = {
    user: 'sa',
    password: 'DhanuAnu*1',
    server: 'localhost\\SQL2019EXPRESS',
    database: 'BLUEWHALE_COMPANY1'
};

var server = app.listen(5000, function () {
    var port = server.address().port;
    console.log("Server now running on port", port);
});

// Body Parser Middleware
app.use(bodyParser.json());

app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    // Request methods you wish to allow
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    // Request headers you wish to allow
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// app.post('/getProductByName', function (req, res) {
//     const postBody = req.body;
//     console.log(postBody);    
//     console.log(postBody.searchType);
//     console.log(postBody.searchText);
//     // var query = 'select * from Domains';
//     //executeQuery(query, res);
//     var sql = require("mssql");
//     new sql.ConnectionPool(dbConfig).connect().then(pool => {
//         return pool.request().input('SearchType', sql.Int, req.body.searchType)
//             .input('SearchText', sql.VarChar(250), req.body.searchText)
//             .execute("GetProductListByName")
//     }).then(result => {
//         let rows = result.recordset;
//         res.status(200).json(rows);
//         console.log("Send Success");
//         sql.close();
//     }).catch(err => {
//         res.status(500).send(err);
//         // res.status(500).send({ message: "${err}" })
//         console.log("Send Failed " + err);
//         sql.close();
//     });
// });

app.get('/getProductList', function (req, res) {
    var sql = require("mssql");
    new sql.ConnectionPool(dbConfig).connect().then(pool => {
        return pool.request().execute("GetProductList")
    }).then(result => {
        let rows = result.recordset;
        res.status(200).json(rows);
        console.log("Send Success");
        sql.close();
    }).catch(err => {
        res.status(500).send(err);
        // res.status(500).send({ message: "${err}" })
        console.log("Send Failed " + err);
        sql.close();
    });
});

app.get('/getMenuItems', function (req, res) {
    var sql = require("mssql");
    new sql.ConnectionPool(dbConfig).connect().then(pool => {
        return pool.request().execute("GetMenuItems")
    }).then(result => {
        let rows = result.recordset;
        let res1 = fetchMenuItems(rows);
        res.status(200).json(res1);
        console.log("Send Success");
        sql.close();
    }).catch(err => {
        res.status(500).send(err);
        // res.status(500).send({ message: "${err}" })
        console.log("Send Failed " + err);
        sql.close();
    });
});

var fetchMenuItems = function (rows) {
    let arr = [];
    let res = rows.filter(x => x.ParentId == 0)
    res.forEach(element => {
        let idx = arr.push({ label: element.Label, children: [] });
        if (rows.filter(x => x.ParentId == element.MenuId).length) {
            arr[idx - 1]['children'] = pushMenuObject(element.MenuId, rows);
        }
    });
    return arr;
}

var pushMenuObject = function (menuId, rows) {
    let arr = [];
    let res = rows.filter(x => x.ParentId == menuId)
    res.forEach(element => {
        let idx = arr.push({ label: element.Label });
        if (rows.filter(x => x.ParentId == element.MenuId).length) {
            arr[idx - 1]['children'] = pushMenuObject(element.MenuId, rows);
        } else {
            arr[idx - 1]['title'] = element.Title;
            arr[idx - 1]['route'] = element.Route;
        }
    })
    return arr;
}

// var executeQuery = function (query, res) {
//     var sql = require("mssql");
//     new sql.ConnectionPool(dbConfig).connect().then(pool => {
//         return pool.request().query(query)
//     }).then(result => {
//         let rows = result.recordset;
//         res.status(200).json(rows);
//         console.log("Send Success");
//         sql.close();
//     }).catch(err => {
//         res.status(500).send(err);
//         // res.status(500).send({ message: "${err}" })
//         console.log("Send Failed");
//         sql.close();
//     });
// }

// var executeStoredProc = function (req, res) {
//     // console.log(req.body);
//     var sql = require("mssql");
//     new sql.ConnectionPool(dbConfig).connect().then(pool => {
//         return pool.request().input('SearchType', sql.Int, req.body.searchType)
//             .input('SearchText', sql.VarChar(250), req.body.searchText)
//             .execute("GetProductList")
//     }).then(result => {
//         let rows = result.recordset;
//         res.status(200).json(rows);
//         console.log("Send Success");
//         sql.close();
//     }).catch(err => {
//         res.status(500).send(err);
//         // res.status(500).send({ message: "${err}" })
//         console.log("Send Failed " + err);
//         sql.close();
//     });
// }