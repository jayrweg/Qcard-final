document.getElementById('loginButton').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;
  
    
    if (password === '12345'|| password === 12345)  {
      window.location.href = 'page2.html';
    } else {
      alert('Nenolasiri si sahihi. Tafadhali jaribu tena');
    }

     // Clear the password input field
  passwordInput.value = '';
  });
  