imgEl = document.getElementById('pet_image');
formEl = document.getElementById('pet_name_form');
proFormEl = document.getElementById('pet_pronoun_form');
nameEl = document.getElementById('_petName');
pronounEl = document.getElementById('_petPronoun');
floorAccEl = document.getElementById('floor_accessory');
bodyAccEl = document.getElementById('body_accessory');
headAccEl = document.getElementById('head_accessory');
rightArrowEl = document.getElementById('right');
leftArrowEl = document.getElementById('left');
wheelEl = document.getElementById('wheel');
spinBtnEl = document.getElementById('spinBtn');
const petImages = [
    'images/labrador.png',
    'images/cat3.png',
    'images/doberman.png',
    'images/bunny.png',
    'images/goat.png',
    'images/frog.png'
];

const petBox = [
    'images/property/labrador_box.png',
    'images/property/cat3_box.png',
    'images/property/doberman_box.png',
    'images/property/bunny_box.png',
    'images/property/goat_box.png',
    'images/property/frog_box.png'
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
    resetAccessories()
    styleHat();
}


function switchPet(buttonElement) {
    const dir = buttonElement.id === 'right' ? 1 : -1;
    swipe(idx + dir);

}

function resetAccessories() {
    floorAccEl.style.display = "none";
    headAccEl.style.display = "none";
    bodyAccEl.style.display = "none";
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

function styleHat() {
    // get the current Pet we're working with
    
    if (idx == 0) {
        //labrador hat 1
        headAccEl.style.top = "0";
        headAccEl.style.right = "210px";
        headAccEl.style.width = "80px";
        headAccEl.style.height = "80px";
        headAccEl.style.transform = "rotate(-10deg)";
    
    } else if (idx == 1) {
        //siamese hat 1
        headAccEl.style.top = "30px";
        headAccEl.style.right = "138px";
        headAccEl.style.width = "100px";
        headAccEl.style.height = "80px";
        headAccEl.style.transform = "rotate(3deg)";
        
    } else if (idx == 2) {
        //doberman hat 1
        headAccEl.style.top = "50px";
        headAccEl.style.right = "170px";
        headAccEl.style.width = "100px";
        headAccEl.style.height = "80px";
        headAccEl.style.transform = "rotate(-10deg)";

    } else if (idx == 3) {
        //bunny hat 1
        headAccEl.style.top = "180px";
        headAccEl.style.right = "138px";
        headAccEl.style.width = "60px";
        headAccEl.style.height = "80px";
        headAccEl.style.transform = "rotate(-10deg)";

    } else if (idx == 4) {
        //goat hat 1
        headAccEl.style.top = "90px";
        headAccEl.style.right = "90px";
        headAccEl.style.width = "50px";
        headAccEl.style.transform = "rotate(8deg)";

    } else {
        //Frog hat 1
        headAccEl.style.top = "158px";
        headAccEl.style.right = "148px";
        headAccEl.style.width = "30px";
        headAccEl.style.height = "80px";
        headAccEl.style.transform = "rotate(-30deg)";

    }
}
function setHatVis(imgEl) {
    if (imgEl.src == headAccEl.src) {
        if (headAccEl.style.display == "block") {
            hide(headAccEl);
        } else {
            reveal(headAccEl);
        }
    } else if (headAccEl.src == ""){
        headAccEl.src = imgEl.src;
        reveal(headAccEl);
    } else {
        headAccEl.src = imgEl.src;
        reveal(headAccEl);
    }
}

function setItemVis(imgEl) {
    if (imgEl.src == floorAccEl.src) {
        if (floorAccEl.style.display == "block") {
            hide(floorAccEl);
        } else {
            reveal(floorAccEl);
        }
    } else if (floorAccEl.src == ""){
        floorAccEl.src = imgEl.src;
        reveal(floorAccEl);
    } else {
        floorAccEl.src = imgEl.src;
        reveal(floorAccEl);
    }
}

function getProperty() {
    let currentSrc = imgEl.src.replace(/(.+\w\/)(.+)/,"/$2");
    let boxSrc = petBox[idx].replace(/(.+\w\/)(.+)/,"/$2");
    let petSrc = petImages[idx].replace(/(.+\w\/)(.+)/,"/$2");

    if (currentSrc == petSrc){
        //Put pet in box
        petInBox();
    } else if (currentSrc == boxSrc) {
        //Remove box
        resetProperty();
    }else {
        return;
    }
}

function resetProperty() {
    imgEl.src = petImages[idx];
    //imgEl.src = newSrc;
}

function petInBox() {
    imgEl.src = petBox[idx];
}

function reveal(el) {
    el.style.display = "block";
}
function hide(el) {
    el.style.display = "none";
}

function enableGif(imgEl) {
        imgEl.src = "images/arrow.gif";
}

function setNormal(imgEl) {
    imgEl.src = "images/arrow_still.png"
}
function setHat(imgEl) {
    headAccEl.src = imgEl.src;
    reveal();
}

formEl.addEventListener("submit", nameSubmit);
proFormEl.addEventListener("select", proSubmit);