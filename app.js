//Nav Animation
const nav = document.querySelector('nav');

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 30){
        nav.classList.add('nav-animate')
    }else{
        nav.classList.remove('nav-animate');
    }
})

//Animations
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});