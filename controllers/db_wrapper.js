/****

  Wrapper for PG module

***/
var pg = require('pg'); 
var Q = require('q');

module.exports = {

  conString: "postgres://postgres:password@localhost/Coinbase",

  query: function(text) {
	  
	  var deferred = Q.defer();  
	  
	  var client = new pg.Client(this.conString);	  
	  client.connect(function(conn_err) {
        
	    if(conn_err) { 
	      deferred.reject(new Error(conn_err));
        }
        else {
          client.query(text, function(query_err, result) {
        	  deferred.resolve(query_err, result);
        	  client.end();
    	    });
    	}
  
      }); //connect  
	  
	  return deferred.promise;
	  
  } //query
}; //exports
