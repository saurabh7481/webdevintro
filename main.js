const form = document.querySelector("#form");
const username = document.querySelector("#name");
const email = document.querySelector("#email");

// form.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log("clicked")
// })

// form.addEventListener("mouseover" , (e) => {
//     alert("mouseover");
// })

// form.addEventListener("mouseout", (e) => {
//     alert("mouseout");
// })

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(username.value == "" || email.value == ""){
        alert("Enter values!")
    } else {
        console.log(username.value, email.value);
    }
})