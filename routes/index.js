const { request } = require('express');
var express = require('express');
var jwt = require('jwt-simple');
var secret = 'xxxyyyzzz';
var validate_key = "xYxZbAcDeF";
 
var router = express.Router();

/* GET home page. */
router.get('/getToken', function(req, res, next) {
  var payload = { 
    access_token:validate_key
  };
  var token = jwt.encode(payload, secret);
  res.render('index', { title: 'Token Gen', token });
});


router.get('/decodeToken/:accesstoken',(req,res)=>{
  if(req.params && req.params.accesstoken && req.params.accesstoken === validate_key){
    return res.render('wish',{title:'Wish'});
  }else{
    return res.render('page_error',{title:'Error'});
  }
});

// router.get('/valentine/decodeToken',(req,res)=>{
  
//     return res.render('page_error',{title:'Error'});

// });

module.exports = router;
