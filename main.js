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
// const li = document.getElementsByTagName("li");
// li[2].style.backgroundColor = "green";

// // this will not work
// const li_class = document.getElementsByClassName("list-group-item");
// li_class[4].style.backgroundColor = "blue"; 

//QuerySelector
// const li_2 = document.querySelector(".list-group-item:nth-child(1)");
// li_2.style.backgroundColor = "green";

// const li_3 = document.querySelector(".list-group-item:nth-child(2)");
// // li_3.style.display = "none";

// // QuerySelectorAll
// const li = document.querySelectorAll("li");
// li[1].style.backgroundColor = "green";

// const odd = document.querySelectorAll("li:nth-child(odd)");
// for(let el of odd){
//     el.style.backgroundColor = "green";
// }


// DOM Manipulation
// const li = document.querySelector('.list-group');
// console.log(li.parentElement);
// li.parentElement.style.backgroundColor = "grey";

// console.log(li.lastElementChild);
// li.lastElementChild.style.backgroundColor = "grey";

// console.log(li.lastChild);

// console.log(li.firstElementChild);
// li.firstElementChild.style.backgroundColor = "grey";

// console.log(li.firstChild);
// console.log(li.nextSibling);

// console.log(li.nextElementSibling);
// li.nextElementSibling.style.backgroundColor = "grey";

// console.log(li.previousSibling);

// console.log(li.previousElementSibling);
// li.previousElementSibling.style.backgroundColor = "grey";


// const newDiv = document.createElement('div');
// newDiv.setAttribute("title", "hello world");

// const helloText = document.createTextNode("Hello world");
// newDiv.appendChild(helloText);

// // const container = document.querySelector("header .container");
// // const h1 = document.querySelector("header h1");

// // container.insertBefore(newDiv, h1);

// const ul = document.querySelector("ul");
// console.log(ul);
// const list = document.querySelector("li");

// ul.insertBefore(newDiv, list);