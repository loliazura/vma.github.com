const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
const container = document.querySelector('.container');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

function toggleDropdown() {
    var dropdown = document.querySelector(".dropdown-menu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}