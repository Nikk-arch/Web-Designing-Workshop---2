let fontSize = 16;
let isVisible = true;

function changeHeading() {
    let input = document.getElementById("inputText").value;
    if (input !== "") {
        document.getElementById("heading").innerText = input;
    }
}

function changeBackground() {
    let colors = ["#f8d7da", "#d4edda", "#d1ecf1", "#fff3cd"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

function increaseFont() {
    fontSize += 2;
    document.getElementById("para").style.fontSize = fontSize + "px";
}

function toggleParagraph() {
    let para = document.getElementById("para");
    if (isVisible) {
        para.style.display = "none";
    } else {
        para.style.display = "block";
    }
    isVisible = !isVisible;
}

function resetPage() {
    document.getElementById("heading").innerText = "Welcome to JavaScript Lab";
    document.body.style.backgroundColor = "#e5e5e5";
    document.getElementById("para").style.fontSize = "16px";
    document.getElementById("para").style.display = "block";
    document.getElementById("inputText").value = "";
    fontSize = 16;
    isVisible = true;
}