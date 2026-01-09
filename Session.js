// // session in JavaScript 
// // it stores the information about the current user session in a web application
// // it is used to maintain the state of the user across multiple requests and pages
// // it can store user preferences, login status, shopping cart contents, etc.
// // session data is typically stored on the server side and identified by a unique session ID
// // which is sent to the client as a cookie
// // session data is temporary and is usually deleted when the user logs out or closes the browser
// console.log("Session.js loaded");
// sessionStorage.setItem("username", "devendra");
// sessionStorage.setItem("username", "dev"); // updates the value of username key it overwrites the previous value
// console.log("Username stored in session storage:", sessionStorage.getItem("username"));
// // console.log("Session storage length:", sessionStorage.length);
// // sessionStorage.removeItem("username");
// // console.log("Username after removal:", sessionStorage.getItem("username"));
// // sessionStorage.clear();
// // console.log("Session storage length after clear:", sessionStorage.length);
// sessionStorage.setItem("age", "25");
// sessionStorage.setItem("marks", "90");
// // sessionStorage.clear(); // clears all the data in session storage
// console.log("Age:", sessionStorage.getItem("age"));
// console.log("Marks:", sessionStorage.getItem("marks"));


// const saveButton = document.getElementById("saveButton");
// const loadButton = document.getElementById("loadButton");
// const inputField = document.getElementById("inputField");
// saveButton.addEventListener("click", () => {
//     const inputValue = inputField.value;
//     sessionStorage.setItem("inputData", inputValue);
//     console.log("Data saved to session storage:", inputValue);
// });

// loadButton.addEventListener("click", () => {
//     const storedValue = sessionStorage.getItem("inputData");
//     console.log("Data loaded from session storage:", storedValue);
//     alert("Loaded data: " + storedValue);
// });




// Example of using sessionStorage to store user preferences
    
{/* <p>onlie exam portal</p>
    <input type="text" id="username" placeholder="Enter Username">
    <input type="password" id="password" placeholder="Enter Password">
    <button id="loginButton">Login</button>
    <button id="logoutButton">Logout</button>
     <script src="Session.js"></script> */}
// const nameInput = document.getElementById("username");
// const passwordInput = document.getElementById("password");
// const loginButton = document.getElementById("loginButton");
// const logoutButton = document.getElementById("logoutButton");

// loginButton.addEventListener("click", () => {
//     const username = nameInput.value;
//     const password = passwordInput.value;
//     sessionStorage.setItem("username", username);
//     sessionStorage.setItem("password", password);
// });

// logoutButton.addEventListener("click", () => {
//     sessionStorage.removeItem("username");
//     sessionStorage.removeItem("password");
// });
// // On page load, check if user is logged in
// window.addEventListener("load", () => {
//     const storedUsername = sessionStorage.getItem("username");  
//     const storedPassword = sessionStorage.getItem("password");
//     if (storedUsername && storedPassword) {
//         alert(`Welcome back, ${storedUsername}!`);
//     } else {
//         alert("Please log in.");
//     }           
// });


// // //Storing Data in localStorage

// localStorage.setItem("name","rashmika")
// localStorage.setItem("age",23)
// localStorage.setItem("salary",90000)

// //  //Updating data


//  localStorage.setItem("name","deepika")

// //  // Get the data by key

// console.log( localStorage.getItem("name"))



// // //Removing Data from localStorage

//  localStorage.removeItem("name")


//         // Clearing All Data in localStorage

//          localStorage.clear()


//        // Store an object


// let user={
//   name1:"rashmika",
//   age:23
// }

// localStorage.setItem("user",JSON.stringify(user))
// //  let user1=JSON.parse(localStorage.)



function login() {
    
    let user = document.getElementById("username").value;
    let remember = document.getElementById("remember").checked;

    if (remember) {
        localStorage.setItem("user", user);
    }
}
