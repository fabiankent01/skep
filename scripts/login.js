document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const toggleText = document.getElementById("toggle-text");
  const formTitle = document.getElementById("form-title");

  function toggleForms() {
      if (loginForm.classList.contains("hidden")) {
          loginForm.classList.remove("hidden");
          signupForm.classList.add("hidden");
          formTitle.textContent = "Login";
          toggleText.innerHTML = `Don't have an account? <a href="#" id="toggle-form">Sign Up</a>`;
      } else {
          loginForm.classList.add("hidden");
          signupForm.classList.remove("hidden");
          formTitle.textContent = "Sign Up";
          toggleText.innerHTML = `Already have an account? <a href="#" id="toggle-form">Login</a>`;
      }
      attachToggleEvent();
  }

  function attachToggleEvent() {
      document.getElementById("toggle-form").addEventListener("click", function (e) {
          e.preventDefault();
          toggleForms();
      });
  }

  attachToggleEvent(); // Attach the event on page load

  // Login Validation
  loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      let email = document.getElementById("login-email").value.trim();
      let password = document.getElementById("login-password").value.trim();

      if (!email || !password) {
          alert("Please fill in both fields.");
          return;
      }

      alert("Login successful! (Backend required)");
  });

  // Signup Validation
  signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      let email = document.getElementById("signup-email").value.trim();
      let password = document.getElementById("signup-password").value.trim();
      let confirmPassword = document.getElementById("confirm-password").value.trim();

      if (!email || !password || !confirmPassword) {
          alert("Please fill in all fields.");
          return;
      }

      if (password.length < 6) {
          alert("Password must be at least 6 characters.");
          return;
      }

      if (password !== confirmPassword) {
          alert("Passwords do not match!");
          return;
      }

      alert("Signup successful! (Backend required)");
  });
});
