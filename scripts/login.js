// Toggle password visibility
document.getElementById('togglePassword').addEventListener('click', function() {
  const passwordField = document.getElementById('password');
  const type = passwordField.type === 'password' ? 'text' : 'password';
  passwordField.type = type;
  this.classList.toggle('fa-eye-slash');
});

// Form validation
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Simple validation
  if (!email || !password) {
    document.getElementById('error-message').textContent = 'Please fill in both fields.';
    document.getElementById('error-message').style.color = 'red';
  } else {
    // Process login (e.g., send to server)
    document.getElementById('error-message').textContent = '';
  }
});

// Handle social login (simplified for now)
document.querySelector('.google').addEventListener('click', function() {
  alert("Google login clicked");
});

document.querySelector('.facebook').addEventListener('click', function() {
  alert("Facebook login clicked");
});
