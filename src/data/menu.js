    const closeButton = document.querySelector('#closeButton');
    const openButton = document.querySelector('#openButton');
    const menu = document.querySelectorAll('.menu__items');

   export function closeBtn() {
        openButton.style.display = 'block';
        menu.style.display = 'none';
        closeBtn.style.display = 'none';
    };
   export function openBtn() {
        openButton.style.display = 'none';
        menu.style.display = 'block';
        closeBtn.style.display = 'block';
    };