// Your code goes here
const navBar = document.querySelector('.nav-link');

// navBar[1].addEventListener('click', cb => {
//     console.log("clicked");
// });

console.log(navBar);

navBar.addEventListener("mouseenter", event =>{
event.target.style.color = "purple";

setTimeout( () => {
    event.target.style.color="";
}, 500);
}, false);

const img = document.querySelector('.intro img');
console.log(img);
img.addEventListener('dblclick', (event) => {
    img.style.height = '50px';
    img.style.width = '50px';

    setTimeout( () => {
        event.target.style.height = "";
        event.target.style.width = "";
    }, 500);
});

const midImg = document.querySelector('.img-content');
console.log(midImg);

midImg.addEventListener('mouseover', () => {
    midImg.style.height = "50px";
    midImg.style.width = "50px";
});

const headFun = document.querySelector('.logo-heading');
console.log(headFun);

headFun.addEventListener('load', () => {
    
})

const adventureAwaits = document.querySelector('.inverse-content .text-content');
console.log(adventureAwaits);

adventureAwaits.addEventListener('wheel', function () {
    adventureAwaits.style.color = 'red';
})


const intro = document.querySelector('body');
console.log(intro);

intro.addEventListener('keyup', function () {
    intro.style.backgroundColor = "pink";
    

    setTimeout( () => {
        intro.style.backgroundColor = "";
    }, 1000)
}, true);


window.addEventListener('load', (event) => {
    alert('page is loaded')
})

