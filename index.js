const express = require("express");
const app = express();
//const cors=require("cors")
const { body, validationResult } = require("express-validator");
const path = require("path");
const bodyparser=require('body-parser');
const signuppage = require(('./signup'))
app.use(bodyparser.urlencoded({extended: false}));
var errors1="";



// Express.js middleware to use JSON objects    
app.use(express.json());
//app.use(express.static(path.join(__dirname,'..','form-validation')))
//app.use(cors());

app.get('/', (req, res) => {
	res.send(signuppage({errors1}))
})

app.post(
  "/",
  // using validation to verify valid inputs (MIDDLEWARE)
  [
    [
        body("name").notEmpty().withMessage("Enter Your Name"),
        body("email").isEmail().withMessage("Enter valid E-mail <i>ex:(wxyz@acd.com)</i>"),
        body("password").isLength({min:6}).withMessage("Password Must Conatains Minimu 6 Character"),
    ],
  ],
  async (req, res) => {
    
    var result1=[];
    
    const errors = validationResult(req);
    const result=Object.values(errors);
    result1= result[1]
    for(var i=0;i<result1.length;i++){
    errors1 +=result1[i].msg + '<br>';
  }
   if(req.body.password != req.body.pswrepeat){
    errors1 +="Password not Match with confirm password"
   }
    if (!errors.isEmpty() || (req.body.password != req.body.pswrepeat)) {
        res.send(signuppage({errors1}));
         }else{

    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            width: 100%;
            height: 100vh;
            display: flex;
            background-color: green;
            justify-content: center;
            align-items: center;
        }
        div{
            
            display: flex;
            background-color: rgb(19, 21, 19);
            justify-content: center;
            align-items: center;
            text-align: center;
            height: 40vh;
            width: 40vw;
            color: white;
            flex-direction: column;
            border-radius: 5px;
        }
        a{
            text-decoration: none;
            background-color: white;
            border: 2px solid gray;
            margin-bottom: 10px;
            width: 100px;
            height: 30px;
            padding: 8px;
            color: black;
            border-radius: 3px;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        }
    </style>
</head>
<body>
    <div><h1>Hi! ${req.body.name} <br> "Your Registration Successfull</h1>  <a href='javascript:window.history.back();'>Back</a></div>
</body>
</html>`)
  }
  errors1="";
  }
);

// Server Listening at port 3000
const port = 4000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});