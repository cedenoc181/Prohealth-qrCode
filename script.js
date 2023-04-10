// this is the nav bar elements
const eastSide = document.getElementById('eastside');
const westSide150 = document.getElementById('w150');
const westSide180 = document.getElementById('w180');
const inwood = document.getElementById('inwood');

const clinic = [eastSide, westSide150, westSide180, inwood];


const onClick = () => {
    console.log("this clinic nav was click")
 }

eastSide.addEventListener('click', onClick);














