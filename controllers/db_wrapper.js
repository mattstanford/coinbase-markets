/****

  Wrapper for PG module

***/
module.exports = {

  query: function(pg_instance, text, callback) {

    pg_instance.connect(function(err, client, done) {
        
	  client.query(text, function(err, result) {
          callback(err, result);
          pg_instance.end();
	  });
	  
    });
	  
  }
  
};
