function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const refs = {
  input: document.querySelector("input"),
  createButton: document.querySelector('button[data-create]'),
  destroyButton: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}

let sizes = 30;
refs.createButton.addEventListener('click', addCollection);
refs.destroyButton.addEventListener('click', destroyCollection)

function addCollection() {
  if(refs.input.value < 1 || refs.input.value > 100){
   return alert("value must be 1-100")
  }
  
createBox(refs.input.value);


}

// function addCollection() {
//   if(refs.input.value < 1 || refs.input.value > 100){

// alert("value must be 1 - 100");
// return;
//   }
//   createBox(refs.input.value);
// }

function createBox (number){
  removeBox ();
  for (let i = 0; i < number; i++ ){
  const box = document.createElement("div");
  box.style.width = `${sizes}px`;
  box.style.height = `${sizes}px`;

  box.style.backgroundColor = getRandomHexColor();
  refs.boxes.append(box);
  refs.input.value = "";
  sizes += 10;
}
}

function destroyCollection (){
  refs.input.value = "";
  removeBox()
}


function removeBox () {
  boxes.innerHTML = "";
  sizes = 30;
}







