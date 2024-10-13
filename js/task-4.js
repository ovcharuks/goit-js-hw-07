const btn = document.querySelector(".submit");
const form = document.querySelector(".login-form");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  if (elements.email.value === "" || elements.password.value === "") {
    alert("All form fields must be filled in");
  } else {
    const valueForm = {
      email: elements.email.value,
      password: elements.password.value,
    };

    console.log(valueForm);
  }
  event.target.reset();
}

//Чому обов'язково з elements? Можна так?

// function submitForm (event) {
//     event.preventDefault();
//     const email = event.currentTarget.email.value;
//     const password = event.currentTarget.password.value;
//     if (email === "" || password === ""){
//         alert('All form fields must be filled in')
//     }
//     else {
//     const valueForm = {
//         email: [email],
//         password: [password]
//     }
// }
// };
