// document.getElementById('email').addEventListener('focus',function(){
//     let fromBody =  document.getElementById('fromBody');
//     let p = document.createElement('p').innerHTML = 'Type- test@email.com';
//     // console.log(p);
//     p.appendChild(fromBody);
// })
document.getElementById('Login-butt').addEventListener('click',function(){
    let emailBox = document.getElementById('email');
    let emailValue = emailBox.value;
    // console.log(emailValue);
    let passwordBox = document.getElementById('password').value; 
    
    if (emailValue === 'in' && passwordBox == 'in') {
        window.location.href='inside.html';
    }
    else{
        console.log('Input Correct Information');
    }
    
})
// 
