const darkModeSwitch = document.getElementById('darkModeSwitch');
const darkModeStyle = document.getElementById('dark-mode-style');

darkModeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', darkModeSwitch.checked);
  darkModeStyle.href = darkModeSwitch.checked ? 'assets/css/dark-mode.css' : '';
});

// Check local storage for user preference
const isDarkMode = localStorage.getItem('darkMode') === 'true';
darkModeSwitch.checked = isDarkMode;
document.body.classList.toggle('dark-mode', isDarkMode);
darkModeStyle.href = isDarkMode ? 'assets/css/dark-mode.css' : '';

// Save user preference to local storage
darkModeSwitch.addEventListener('change', () => {
  localStorage.setItem('darkMode', darkModeSwitch.checked);
});