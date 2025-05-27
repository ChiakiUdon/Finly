// Handle back arrow clicks to go back in history
document.querySelectorAll('.back-arrow').forEach(arrow => {
  arrow.addEventListener('click', () => {
    window.history.back();
  });
});

// Exit button (example behavior: redirect to dashboard or login)
const exitBtn = document.querySelector('.exit-btn');
if (exitBtn) {
  exitBtn.addEventListener('click', () => {
    window.location.href = '../pages/dashboard.html'; // Change as needed
  });
}

// Toggle switches
document.querySelectorAll('.toggle-switch').forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    // Optional: trigger save to backend/localStorage here
  });
});

// Settings menu buttons navigation
document.querySelectorAll('.settings-button').forEach(button => {
  button.addEventListener('click', () => {
    const text = button.innerText.toLowerCase();
    if (text.includes("edit profile")) {
      window.location.href = "edit-profile.html";
    } else if (text.includes("biometric")) {
      window.location.href = "biometric.html";
    } else if (text.includes("notification")) {
      window.location.href = "notification-pref.html";
    }
  });
});