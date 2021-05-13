const hamMenu = document.querySelector('.ham');
const hamClose = document.querySelector('.close')
const mobileNav = document.querySelector('.navBar')
const header = document.querySelector('header')

hamMenu.addEventListener('click',onHam);
hamClose.addEventListener('click',onClose)


function onHam(){

    mobileNav.style.transition = "all 0.5s ease";

    header.style.background = 'rgba(56,156,56,1)';
    mobileNav.style.display = 'flex';
    mobileNav.style.opacity = '1';
    mobileNav.style.left = '0';


    console.log('hello')
}
function onClose(){
    mobileNav.style.transition = "all 0.5s";
    mobileNav.style.opacity = '1';
    header.style.background = 'none';
    mobileNav.style.display = 'flex';
    mobileNav.style.left = '0'
    
    mobileNav.style.transform = 'translateY(1000px)';


    console.log('hello')
}

