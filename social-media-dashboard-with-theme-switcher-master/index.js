
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');

    updateContainers();
}

function updateContainers(){
    const containers = document.querySelectorAll('.container');
    const mode = document.body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';

    containers.forEach(container => {
        const containerId = container.id;
        const containerSelector = `#${containerId}`;

        if (mode === 'light-mode') {
            container.classList.remove('light-mode');
            container.classList.remove(`${containerId}-dark-mode`);
            container.classList.add(`${containerId}-light-mode`);
        } else {
            container.classList.remove('dark-mode');
            container.classList.remove(`${containerId}-light-mode`);
            container.classList.add(`${containerId}-dark-mode`);
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    updateContainers();
})