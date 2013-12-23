
var db = require('./controllers/db_wrapper.js');

//First drop the original tables
db.query('DROP TABLE buy', function(err, result) {
	
   if(err) {
	   console.log("Error: " + err);
   }
   else {
	   console.log("Drop table success!");
   }
   
   //Re-create the tables
   db.query('CREATE TABLE buy(' +
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



