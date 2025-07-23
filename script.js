const langSwitcher = document.getElementById('langSwitcher');
langSwitcher.addEventListener('change', changeLanguage);

function changeLanguage() {
  const lang = langSwitcher.value;
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('welcome-text').textContent = data.welcome;
      document.getElementById('tagline').textContent = data.tagline;
    });
}
