function login(event) {
    event.preventDefault(); 

    // form inputs
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validate inputs
    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter both email and password.');
      return;
    }

    //  authentication
    //replace examples
    var validEmail = 'user@example.com';
    var validPassword = 'password123';

    if (email === validEmail && password === validPassword) {
    
      window.location.href = 'homepage.html';
      
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }