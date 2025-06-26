document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateButtonText(currentTheme);
    

    themeToggle.addEventListener('click', function() {
        let theme = document.documentElement.getAttribute('data-theme');
        theme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateButtonText(theme);
    });
    
    function updateButtonText(theme) {
        themeToggle.textContent = theme === 'dark' ? 'Modo Claro' : 'Modo Escuro';
    }
});