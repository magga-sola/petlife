imgEl = document.getElementById('pet_image');
formEl = document.getElementById('pet_name_form');
proFormEl = document.getElementById('pet_pronoun_form');
nameEl = document.getElementById('_petName');
pronounEl = document.getElementById('_petPronoun');
const petImages = [
    'images/labrador.jpeg',
    'images/cat.jpeg',
    'images/doberman.jpg',
    'images/cat2.jpg',
    'images/cat3.jpg',
    'images/bunny.jpg',
    'images/goat.jpg',
    'images/frog.jpg'
];

// transform into Image Elements with appropriate paths
petImages.forEach(src => {

    const i = new Image();
    i.src = src;
})

//initialize index within the pet image list
let idx = 0;

function swipe(i) {
    idx = (i + petImages.length) % petImages.length; //acounts for -1 or +1 making the index out of bounds
    imgEl.src = petImages[idx]
    imgEl.alt = petImages[idx].split('/').pop().replace(/\.\w+$/, '').replace(/[-_]/g, ' ');
}


function switchPet(buttonElement) {
    const dir = buttonElement.id === 'right' ? 1 : -1;
    swipe(idx + dir);

}


function nameSubmit(event) {
    event.preventDefault();
    let input = event.srcElement[0].value;
    formEl.reset();
    if (input != " ") {
        nameEl.textContent = input;
    }
}

function proSubmit(event) {
    let pro = event.value;
    pronounEl.textContent = pro;
}

formEl.addEventListener("submit", nameSubmit);
proFormEl.addEventListener("select", proSubmit);