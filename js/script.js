let menu = document.querySelector('.ri-menu-line');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('remix-menu');
    navlist.classList.toggle('open')
}

menu.onclose = () => {
    menu.classList.toggle('ri-home-8-line');
    navlist.classList.toggle('open')
}