document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const toggleText = document.getElementById("toggle-text");
  const formTitle = document.getElementById("form-title");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const passwordMatchMessage = document.getElementById("password-match-message");

  let isLogin = true;

  function toggleForms() {
    isLogin = !isLogin;
    loginForm.classList.toggle("hidden");
    signupForm.classList.toggle("hidden");
    formTitle.textContent = isLogin ? "Login" : "Sign Up";
    toggleText.innerHTML = isLogin
      ? `Don't have an account? <a href="#" id="toggle-form">Sign Up</a>`
      : `Already have an account? <a href="#" id="toggle-form">Login</a>`;
    attachToggleEvent();
  }

  function attachToggleEvent() {
    document.getElementById("toggle-form").addEventListener("click", function (e) {
      e.preventDefault();
      toggleForms();
    });
  }

  attachToggleEvent(); // Attach event on page load

  function showError(inputId, message) {
    const errorElement = document.getElementById(inputId + "-error");
    errorElement.textContent = message;
  }

  function clearErrors() {
    document.querySelectorAll(".error-message").forEach(el => el.textContent = "");
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
  }

  document.querySelectorAll(".toggle-password").forEach(icon => {
    icon.addEventListener("click", function () {
      const targetInput = document.getElementById(this.getAttribute("data-target"));
      if (targetInput.type === "password") {
        targetInput.type = "text";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
      } else {
        targetInput.type = "password";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
      }
    });
  });

  confirmPasswordInput.addEventListener("input", function () {
    const password = document.getElementById("signup-password").value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (confirmPassword === "") {
      passwordMatchMessage.textContent = "";
    } else if (password === confirmPassword) {
      passwordMatchMessage.textContent = "✔ Passwords match!";
      passwordMatchMessage.style.color = "green";
    } else {
      passwordMatchMessage.textContent = "❌ Passwords do not match!";
      passwordMatchMessage.style.color = "red";
    }
  });

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();

    let email = document.getElementById("login-email").value.trim();
    let password = document.getElementById("login-password").value.trim();

    if (!email) {
      showError("login-email", "Email is required.");
      return;
    }

    if (!validateEmail(email)) {
      showError("login-email", "Please enter a valid email.");
      return;
    }

    if (!password) {
      showError("login-password", "Password is required.");
      return;
    }

    localStorage.setItem("loggedInUser", "User");

    const params = new URLSearchParams(window.location.search);
    const redirectUrl = params.get('redirect');
    window.location.href = redirectUrl ? redirectUrl : 'homepage.html';
  });

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();

    let email = document.getElementById("signup-email").value.trim();
    let password = document.getElementById("signup-password").value.trim();
    let confirmPassword = document.getElementById("confirm-password").value.trim();

    if (!email) {
      showError("signup-email", "Email is required.");
      return;
    }

    if (!validateEmail(email)) {
      showError("signup-email", "Please enter a valid email.");
      return;
    }

    if (!password) {
      showError("signup-password", "Password is required.");
      return;
    }

    if (!validatePassword(password)) {
      showError("signup-password", "Password must be at least 6 characters, contain an uppercase letter, a lowercase letter, a number, and a special character.");
      return;
    }

    if (password !== confirmPassword) {
      showError("confirm-password", "Passwords do not match!");
      return;
    }

    localStorage.setItem("loggedInUser", "New User");

    const params = new URLSearchParams(window.location.search);
    const redirectUrl = params.get('redirect');
    window.location.href = redirectUrl ? redirectUrl : 'homepage.html';
  });
});
