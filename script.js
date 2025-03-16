const items = document.querySelectorAll('.item');
const clearButton = document.getElementById('clear-completed');

function toggleCompletion(event) {
    const item = event.target;
    item.classList.toggle('completed');
}

items.forEach(item => {
    item.addEventListener('click', toggleCompletion);
});