// DOM Intro
// const header = document.querySelector("#header-title");
// header.style.borderBottom = "solid 2px blue";

// const header2 = document.querySelector(".title");
// header2.style.fontWeight = "bold";
// header2.style.color = "green";

// GetElementByClassName
// const items = document.getElementsByClassName("list-group-item");
// console.log(items);
// items[2].style.backgroundColor = "green";

// for(let el of items){
//     el.style.fontWeight = "bold";
// }

// GetElementByTagName
const li = document.getElementsByTagName("li");
li[2].style.backgroundColor = "green";

// this will not work
const li_class = document.getElementsByClassName("list-group-item");
li_class[4].style.backgroundColor = "blue"; 