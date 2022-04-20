const menuIcon = document.querySelector('.menu-icon');
const liheaderList = document.querySelectorAll('.header-list ul li');
const headerList = document.querySelector('.header-list');

menuIcon.addEventListener('click', () => {
    headerList.classList.toggle("responsive");
});

for (let i = 0; i < liheaderList.length; i++) {
    liheaderList[i].addEventListener('click', () => {
        headerList.classList.toggle("responsive");
    });
}