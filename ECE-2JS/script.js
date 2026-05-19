console.log("Hello from external file!");
// Create an element and add to page
let heading = document.createElement("h2");
heading.textContent = "This heading was created by JavaScript!";
document.body.appendChild(heading);
// Add a button
let button = document.createElement("button");
button.textContent = "Click Me!";
button.onclick = function() {
    alert("Button clicked!");
};
document.body.appendChild(button);