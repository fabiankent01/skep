document.addEventListener('DOMContentLoaded', function () {
    const authButtons = document.getElementById('auth-buttons');
    const userInfo = document.getElementById('user-info');
    const userDisplayName = document.getElementById('user-display-name');
    const logoutBtn = document.getElementById('logout-btn');
  
    updateUserDisplay();
  
    function updateUserDisplay() {
      const loggedInUser = localStorage.getItem('loggedInUser');
      if (loggedInUser) {
        userDisplayName.textContent = loggedInUser;
        authButtons.style.display = 'none';
        userInfo.style.display = 'flex';
      } else {
        authButtons.style.display = 'flex';
        userInfo.style.display = 'none';
      }
    }
  
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function (e) {
        e.preventDefault();
        localStorage.removeItem('loggedInUser');
        window.location.reload();
      });
    }
  });
  