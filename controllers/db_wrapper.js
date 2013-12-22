/****

  Wrapper for PG module

***/
module.exports = {

  query: function(pg_instance, text, callback) {
	  
	  console.log("starting query");

    pg_instance.connect(function(conn_err) {
        
    	console.log("connect??");
    	if(conn_err) { 
    		callback(conn_err, null);
    	}
    	else {
    		console.log("query??");
    		pg_instance.query(text, function(err, result) {
			  callback(err, result);
			  console.log("ending connection");
			  pg_instance.end();
    		});
    	}
  
    }); //connect
  } //Query()
}; //exports
