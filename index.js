const title = document.getElementById('title');
const input = document.getElementById('input');

function submitClicked() {
    title.textContent = input.value;
    input.value = '';
}