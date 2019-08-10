// Your code goes here

//Nav Bar
const navBar = Array.from(document.getElementsByClassName('nav-link'));

// navBar[1].addEventListener('click', cb => {
//     console.log("clicked");
// });

console.log(navBar);

//This times out the color

// navBar.addEventListener("mouseenter", event =>{
// event.target.style.color = "purple";

// setTimeout( () => {
//     event.target.style.color="";
// }, 500);
// }, false);

//Mouse enters, link change, mouse leaves, like goes back

navBar.forEach(link => {
  link.addEventListener("mouseenter", ev => {
    link.style.color = "yellow";
    ev.preventDefault();

    link.addEventListener("mouseleave", ev => {
    link.style.color = "";
    });
  });
});

//Img head diseappers then reappears 

const img = document.querySelector('.intro img');
console.log(img);
img.addEventListener('dblclick', (event) => {
    img.style.display = 'none';
    // img.style.width = '50px';

    setTimeout( () => {
        img.style.display = "";
    }, 1000);
});

const midImg = document.querySelector('.img-content');
console.log(midImg);

midImg.addEventListener('mouseover', () => {
    midImg.style.height = "200px";
    midImg.style.width = "200px";

    setTimeout( () => {
        midImg.style.height = "";
        midImg.style.width = "";
    }, 500);

});

const headFun = document.querySelector('.logo-heading');
console.log(headFun);

// headFun.addEventListener('load', () => {
    
// })

// window.addEventListener('load', (event) => {
//     alert('page is loaded')
// })

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


// const funBus = document.getElementsByClassName('logo-heading');
// console.log(funBus, "logo");
// funBus[0].addEventListener('keydown', function () {
// funBus.style.color = "red";
// })

const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs)

window.addEventListener('keydown', function(e) {
  let keyDown = e.key;
  if(keyDown === 'Enter') {
    allParagraphs.forEach(p => p.classList.toggle('bigP'));
    console.log("Big paragraphs");
  } 
  
});
    

const button = document.querySelector('.btn');
console.log(button);

button.addEventListener('click', (event) => {
event.target.style.color = "red";
})

const adventureImg = document.querySelector('.img-fluid');
console.log(adventureImg);
adventureImg.addEventListener('mouseover', () => {
    adventureImg.style.width = '30rem';
    adventureImg.style.height = '30rem';
    // adventureImg.setAttribute('src', 'img/fun.jpg');

adventureImg.addEventListener('mouseleave', () => {
    adventureImg.style.width = "";
    adventureImg.style.height = "";
})
}) 

