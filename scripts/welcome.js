document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('visited')) {
        alert('Hello, World! Welcome to the page for the first time!');
        localStorage.setItem('visited', 'true');
    }
});