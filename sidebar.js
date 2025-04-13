const sidebar = document.querySelector('.sidebar')
const toggleButton = document.querySelector('.menubtn')


toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('active')
});

document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape'){
        sidebar.classList.remove('active');
    }
});