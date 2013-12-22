/****

  Wrapper for PG module

***/
module.exports = {

  query: function(pg_instance, text, success_cb, error_cb) {

    pg_instance.connect(function(err, client, done) {
        
	  client.query(text, function(err, result) {
		  
		  if (err) {
			  error_cb(err, result);
		  } 
		  else {
			  success_cb(result);
		  }
          
          pg_instance.end();
	  });
	  
    });
	  
  }
  
};
