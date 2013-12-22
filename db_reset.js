var pg = require('pg'); 

var conString = "postgres://postgres:password@localhost/Coinbase";

var client = new pg.Client(conString);
var db_wrapper = require('./controllers/db_wrapper.js');

//DB Wrapper callbacks
var drop_table_success_cb = function(result) {
	console.log("Success dropping table!");
  };
var create_table_success_cb = function(result) {
	console.log("Success Creating table!");
  };
var error_cb = function(err) {
	console.log("Error running DB Query: " + err); 
  };
//First drop the original tables
db_wrapper.query(client, 'DROP TABLE buy', function(err, result) {
	
   if(err) {
	   console.log("Error: " + err);
   }
   else {
	   console.log("Drop table success!");
   }
   
   //Re-create the tables
   db_wrapper.query(client, 'CREATE TABLE buy(' +
   		'id bigserial primary key, ' +
   		'timePosted timestamp without time zone NOT NULL,' +
   		'price double precision NOT NULL' +
   		')',
   		function(err, result) {
   	  
   	  	  if(err) {
   	  		  console.log("error creating table: " + err);
   	  	  }
   	  	  else {
   	  		  console.log("Successfully created table!");
   	  	  }
   	  	  
        });
  		
  });



