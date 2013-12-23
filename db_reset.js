
var db = require('./controllers/db_wrapper.js');

var success_callback = function(err, result) {
	 
	 if(err) {
		 console.log(err);
	 }
	 else {
		 console.log("Query success!");
	 }
};

var error_callback =    function(reason) {
	console.log("General DB error");
	console.log(reason);
};

//First drop the original tables
db.query('DROP TABLE buy').then( success_callback, error_callback)

//Re-create the tables
.then(function() {
    	
    	return db.query('CREATE TABLE buy(' +
		   		'id bigserial primary key, ' +
		   		'timePosted timestamp without time zone NOT NULL,' +
		   		'price double precision NOT NULL' +
		   		')');
    	
    }).then(success_callback, error_callback);
    		

