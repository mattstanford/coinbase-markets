
var db = require('./controllers/db_wrapper.js');

//First drop the original tables
db.query('DROP TABLE buy')
  .then(  function(err, result) {
		 
		 if(err) {
			 console.log(err);
		 }
		 else {
			 console.log("Drop Table success!");
		 }
	 },
    function(reason) {
    	console.log("Error Dropping table");
    	console.log(reason);
    })
    .then(function() {
    	
    	return db.query('CREATE TABLE buy(' +
		   		'id bigserial primary key, ' +
		   		'timePosted timestamp without time zone NOT NULL,' +
		   		'price double precision NOT NULL' +
		   		')');
    	
    })
    .then(function(err, result) { console.log("Create table success!"); });
    		

