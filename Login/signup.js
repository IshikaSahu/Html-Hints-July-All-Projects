document.getElementById('signup-btn').addEventListener('click',function(){
    let username=document.getElementById('uname').value;
    let email=document.getElementById('mail').value;
    let password=document.getElementById('pass').value;

    document.getElementById('uname_error').innerText="";
    document.getElementById('mail_error').innerText="";
    document.getElementById('pass_error').innerText="";

var reg_email = new  RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if(username=='')
     document.getElementById('uname_error').innerText="Username Required*";
    else if(email=='')
     document.getElementById('mail_error').innerText="Email Required*";
     else if(!email.match(reg_email))
     document.getElementById('mail_error').innerText="Email Format is Wrong*";
    else if(password=='')
     document.getElementById('pass_error').innerText="Password Required*";
    else
     alert('Created Account successfully'); 
});