function validateUser(){
     var username=getValueById('username');
     var password= getValueById('password');
     var emailId=getValueById('emailId');
     // validation - task
     var user= {
         username:username,
         password:password,
         emailId:emailId
     }
     console.log('user',user);
     var url="http://localhost:13899/user/register";

var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
xhr.onload = function () {
    console.log("inside onload");
     console.log('data', xhr.responseText);
     var responseData=JSON.parse(xhr.responseText);
     localStorage.setItem('token',responseData.token);
}
xhr.send(JSON.stringify(user));

     return false;
}

function getValueById(id){
    return document.getElementById(id).value;
}