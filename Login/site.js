function login(){
    var userName = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(userName=='merve' && password == '123')
    document.getElementById('result').innerHTML= "<p style =' color: green;'>LOGIN SUCCESSFUL</p>"
    else{
        document.getElementById('result').innerHTML = "<p style ='color:red;'>LOGIN FAILED</p>"
    }

}