let mobileMenuId = 'mobile-nav';
let openMenuClass = 'cross-hamburger';
let displayClass = 'display-mobile-nav';

const init = () => {
    document.getElementById('menu').addEventListener('click', onMenuClick);
}

const onMenuClick = () => {
    changeHamburgerPosition();
    displayMobileMenu();
}

const changeHamburgerPosition = () => {
    let hamburgerEl = document.getElementById('hamburger');
    
    if (hamburgerEl.classList.contains(openMenuClass)) {
        hamburgerEl.classList.remove(openMenuClass);
    } else {
        hamburgerEl.classList.add(openMenuClass);
    }
}

const displayMobileMenu = () => {
    let mobileMenuEl = document.getElementById(mobileMenuId);

    if (mobileMenuEl.classList.contains(displayClass)) {
        mobileMenuEl.classList.remove(displayClass);
    } else {
        mobileMenuEl.classList.add(displayClass);
    }
}

if (!!window.addEventListener) {
    window.addEventListener("DOMContentLoaded", init);
} else {
    // MSIE
    window.attachEvent("onload", init);
}

