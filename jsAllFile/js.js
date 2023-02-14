document.getElementById('email').addEventListener('mouseup',function(){
    // let fromBody =  document.getElementById('fromBody');
    // let p = document.createElement('p').innerHTML = 'Type- test@email.com';
    // console.log(p);
    // p.appendChild(fromBody);
    alert('Type- test@email.com && pass=test')
})

document.getElementById('Login-butt').addEventListener('click',function(){
    let emailBox = document.getElementById('email');
    let emailValue = emailBox.value;
    // console.log(emailValue);
    let passwordBox = document.getElementById('password').value; 
    
    if (emailValue === 'test@email.com' && passwordBox == 'test') {
        window.location.href='./inside.html';
    }
    else{
        console.log('Input Correct Information');
    }
    
})
