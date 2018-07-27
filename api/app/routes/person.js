module.exports = function(application) {

    application.get('/', function(req, res){
        res.json({teste: 1})
    });
  
}