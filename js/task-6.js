function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



  const input = document.querySelector("input");
  const createButton = document.querySelector('button[data-create]');
  const destroyButton = document.querySelector('button[data-destroy]');
  const boxes = document.querySelector('#boxes');


let sizes = 30;
createButton.addEventListener('click', addCollection);
destroyButton.addEventListener('click', destroyCollection)

function addCollection() {
  if(input.value < 1 || input.value > 100){
   return alert("value must be 1-100")
  }
  
createBox(input.value);


}

// Якщо правильно то підкажіть як ще можна оптимізувати. Або натякніть)))

function createBox (number){
  removeBox ();
let murkUpBox = [];
  for (let i = 0; i < number; i++ ){
  const box = document.createElement("div");
  box.style.width = `${sizes}px`;
  box.style.height = `${sizes}px`;
  box.style.backgroundColor = getRandomHexColor();
  murkUpBox.push(box);
  input.value = "";
  sizes += 10;
};
 boxes.append(...murkUpBox);

console.log(murkUpBox);
}

function destroyCollection (){
  input.value = "";
  removeBox()
}


function removeBox () {
  boxes.innerHTML = "";
  sizes = 30;
}











// const refs = {
//   input: document.querySelector("input"),
//   createButton: document.querySelector('button[data-create]'),
//   destroyButton: document.querySelector('button[data-destroy]'),
//   boxes: document.querySelector('#boxes'),
// }

// let sizes = 30;
// refs.createButton.addEventListener('click', addCollection);
// refs.destroyButton.addEventListener('click', destroyCollection)

// function addCollection() {
//   if(refs.input.value < 1 || refs.input.value > 100){
//    return alert("value must be 1-100")
//   }
  
// createBox(refs.input.value);


// }

// function createBox (number){
//   removeBox ();
// let murkUpBox = "";
//   for (let i = 0; i < number; i++ ){
//   const box = document.createElement("div");
//   box.style.width = `${sizes}px`;
//   box.style.height = `${sizes}px`;

//   box.style.backgroundColor = getRandomHexColor();
//  refs.boxes.append(box);
//  murkUpBox += `${box}`;
//   refs.input.value = "";
//   sizes += 10;
// };
// console.log(murkUpBox);
// }

// function destroyCollection (){
//   refs.input.value = "";
//   removeBox()
// }


// function removeBox () {
//   boxes.innerHTML = "";
//   sizes = 30;