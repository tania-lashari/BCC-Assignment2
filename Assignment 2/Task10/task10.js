var userPassword = 12345;
var password = prompt("enter your password");
if (password === userPassword){
    console.log("correct");
}
else if(password === ""){
    console.log("enter your passwrd");
}