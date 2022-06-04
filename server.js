const express = require('express');
const app = express();

const server = app.listen(3000,()=>{
    console.log('Start server : localhost:3000')
})

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req,res){
    res.render('index.html');
})

app.get('/about', function(req,res){
    res.render('about.html');
})


var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : '11111111',
    database : 'opentutorials'
});

const stringfy = require('stringfy');


app.get('/db', function(req, res){
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query('SELECT 1+1 AS Solution', function (error, results, fields) {
          // When done with the connection, release it.
          console.log('results :', results);
          res.send(results.Solution);
        
          // Handle error after the release.
          if (error) throw error;
       
          // Don't use the connection here, it has been returned to the pool.
        });
      });
})