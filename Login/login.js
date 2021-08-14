document.getElementById('login-btn').addEventListener('click',function(){
    let username=document.getElementById('uname').value;
    let password=document.getElementById('pass').value;

    document.getElementById('uname_error').innerText="";
    document.getElementById('pass_error').innerText="";

    if(username=='')
     document.getElementById('uname_error').innerText="Username Required*";
    else if(password=='')
     document.getElementById('pass_error').innerText="Password Required*";
    else
     alert('Login successfully'); 
});