const textInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    if(textInput.value.trim() === "" || textInput.value.trim().length === 0){
        return nameOutput.textContent = "Anonymous";
    }
    nameOutput.textContent = event.target.value.trim();}
);