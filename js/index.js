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
}, false);

const midImg = document.querySelector('.img-content');
console.log(midImg);

midImg.addEventListener('mouseover', () => {
    midImg.style.height = "50px";
    midImg.style.width = "50px";
});

const headFun = document.querySelector('.logo-heading');
console.log(headFun);


