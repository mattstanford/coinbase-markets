/****

  Wrapper for PG module

***/
module.exports = {

  conString: "postgres://postgres:password@localhost/Coinbase",

  query: function(text, callback) {
	
	  var pg = require('pg'); 

	  var client = new pg.Client(this.conString);	  

	  client.connect(function(conn_err) {
        
	    if(conn_err) { 
          callback(conn_err, null);
        }
        else {
          client.query(text, function(query_err, result) {
        	  callback(query_err, result);
			  client.end();
    	    });
    	}
  
      }); //connect
  } //query
}; //exports
