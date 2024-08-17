
const getError = (errors1) => {
	try {
    
  
    
		return errors1;
	} catch (error) {
		return "";
	}
};
module.exports = ({ errors1 }) => {
	return`


<!DOCTYPE html>
<html>
<style>
body {font-family: Arial, Helvetica, sans-serif;
   display: flex;
   justify-content: center;
  }
* {box-sizing: border-box}
h5{
color:red;
}
/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

form{
  width: fit-content;
  background-color: rgba(164, 155, 143, 0.458);
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  
  border: none;
  cursor: pointer;
  width: 40%;
  opacity: 0.9;
}

button:hover {
  opacity:1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
  
  margin-right: 5vw;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn, .signupbtn {
  float: left;
 
}

/* Add padding to container elements */
.container {
  padding: 16px;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
td{
  width: 15vw;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn, .signupbtn {
     width: 100%;
  }
}


</style>
<body>

<form action="/" method="POST" style="border:1px solid #ccc">
  <div class="container">
    <div class="head">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
  </div>
    <hr>
    <table>
      <tr>
    <td><label for="name"><b>Name</b></label></td>
    <td><input type="text" placeholder="Enter name" name="name" ><br></td>
  </tr>
  <tr>
   <td> <label for="email"><b>Email</b></label></td>
   <td> <input type="text" placeholder="Enter Email" name="email" ><br></td>
  </tr>
   <td> <label for="psw"><b>Password</b></label></td>
    <td><input type="password" placeholder="Enter Password" name="password" ><br></td>
<tr>
  <td>  <label for="psw-repeat"><b>Repeat Password</b></label></td>
   <td> <input type="password" placeholder="Repeat Password" name="pswrepeat" ><br></td>
  </tr>
  </table>
    <label>
      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
    </label>
  
    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>
    <h5>${getError(errors1)}</h5>

    <div class="clearfix">
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" >Sign Up</button>
    </div>
  </div>
</form>

</body>
</html> `;
};
