/****

  Wrapper for PG module

***/
module.exports = {
   query: function(text, callback) {
      pg.connect(function(err, client, done) {
        client.query(text, function(err, result) {
          callback(err, result);
        })
      });
   }
}
