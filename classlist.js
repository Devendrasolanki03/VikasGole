// =========================== 24-12-25 ==========================
//we can also replace elements using replace child method

// const parent = document.getElementById("parent");
// const old = document.getElementById("old");

// const new1 = document.createElement("h1");
// new1.textContent = "new world";
// parent.replaceChild(new1, old);

//create text node = it is uused to create text node wich contain plain text it'll not have any attribute, it can not have children

// var p = document.createElement("p")
// var para = document.createTextNode("hello guys")
// p.append(para)
// document.body.appendChild(p)
// p.setAttribute("id", "i1")
// console.log(document.getElementById("i1").innerText);

//3.
// var d = document.createElement("button
// document.getElementById("d1").prepend(d);
// document.getElementById("d1").before(d);
// document.getElementById("d1").after(d);

// var hh = document.createElement("h1")
// hh.innerText= "welcome"
// document.querySelector("body").prepend(hh)

// add event listner = this method in javascript is a powerful way to register event listener on html elements, it providesa more flexible and modern approach, // usign thi we can call multiplr functions also
// var b = document.createElement("button");
// b.innerText = "click here";
// document.body.append(b);

// b.addEventListener("click", function () {
//   alert("button is clicked");
// });

//class list =  the class list property in js is a powerful way to work with the css classess of an css element
// it provide convenient way to add, remove,toggle andcheck for classes without directly manipulating the class name property
//methods of classlist = 1. add() = it is used to add one or more classes to the element
//2. remove() = it is used to remove the class
//3. toggle() = it means adding the class if it doesn;t exist, and remkving the class if its exist
//4. contains() = it is used to contain whether, the element contains the givern class or not
//5. replace() = it is used toreplace the class;
//6. lemgth() = how many classes are there in the classes

//===========4
// var p1 = document.getElementById("m")
// function add(){
//     p1.classList.add("a");
// }

// function remove(){
//     p1.classList.remove("a");
// }

// function change(){
//     p1.classList.toggle("a");
//     p1.classList.toggle("h");

// }

//==============5
function giveTime() {
  var d = new Date();
//   let hour = d.getHours();
//   let minute = d.getMinutes();
//   let seconds = d.getSeconds();

//   return `${hour}:${minute}:${seconds}`;

return d.toLocaleTimeString();

}

setInterval(() => {
  var v = document.querySelector(".c");
  v.innerHTML = giveTime();
}, 1000);

//functions = 30 interview questions