//Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#top');

    if(window.pageYOffset > fixedNav){
        header.classList.add('nav-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }else{
        header.classList.remove('nav-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};

// Humberger
const burger = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-menu');

burger.addEventListener('click', function(){
    burger.classList.toggle('burger-on');
    navMenu.classList.toggle('hidden');
});

// Click outside buger
window.addEventListener('click', function(e){
    if(e.target != burger && e.target != navMenu){
        burger.classList.remove('burger-on');
        navMenu.classList.add('hidden');
    }
});

// Dark mode toggle
const darkToggle = document.querySelector('#toggle-dark');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
    if(darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// Move toggle

if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)){
   darkToggle.checked = true;
}else{
   darkToggle.checked = false;
};

