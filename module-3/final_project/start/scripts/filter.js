let buttons = document.querySelectorAll('button'); // There is 5 more buttons so you need grab all of them together

let allImages = document.querySelectorAll('.image');

//allImages.forEach(image => console.log(images));  

const toggleImages = (dataClass) =>{
    if(dataClass === 'all') { // if button click has a data-class of all 
        //cycle through all the images and show them
        allImages.forEach(image => image.style.display = 'flex');
    } else { // if button click has a data class isnt all then this will happen:
        allImages.forEach( image => { //cycle through images and check to see if button pressed has the same data-class as any of the images.
            if ( image.dataset.class === dataClass ) {
                  image.style.display = 'flex';
            } else { // if they don't match hide the images
                  image.style.display = 'none'
            }
        })
     }
}

/*for (let counter=0; counter <buttons.length;  counter++) {
    buttons[counter].addEventListener('click' , function() {
        console.log(buttons[counter]);
    } ); // buttons[0] , buttons[1] , buttons[2] .......
}*/

const toggleActiveClass = (active) => {
    buttons.forEach((button) => button.classList.remove('active'));
    active.classList.add('active');
}

buttons.forEach(button => button.addEventListener('click', ()=> {
    // console.log(button.dataset.class);
    toggleImages(button.dataset.class);
    toggleActiveClass(button);
}) );








/*for ( let counter=0; counter< allImages.length; counter++) {
    console.log(allImages[counter]);
}*/



//allImages.forEach(image => console.log(images));  // another way to do a 'for' loop




/*let heading1 = document.querySelector('h1');
heading1.style.color='purple';
heading1.style.fontSize='55px';*/




/*an event listener
let heading1 = document.querySelector('h1');

buttons.forEach(button => button.addEventListener('click',function( event) {
    console.log('clicked');
    heading1.style.color='red';
} ) ); */




/* selecting by attribute:
let image4 = allImages[3];

console.log(image4.getAttribute('src'));

image4.setAttribute('src' , 'https://via.placeholder.com/150');
console.log(image4.getAttribute('src')); */





/* let main = document.querySelector('main');

let newDiv = document.createElement('div');
    newDiv.style.border = '1px solid purple';
let newDivText = document.createTextNode('new Div');

newDiv.appendChild(newDivText);

main.appendChild(newDiv);
*/