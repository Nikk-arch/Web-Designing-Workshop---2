function generateInputs() {
    const numSubjects = parseInt(document.getElementById("numSubjects").value);
    const container = document.getElementById("subjectsContainer");

    container.innerHTML = "";

    if (isNaN(numSubjects) || numSubjects <= 0) {
        alert("Please enter a valid number of subjects.");
        return;
    }

    for (let i = 1; i <= numSubjects; i++) {
        const input = document.createElement("input");

        input.type = "number";
        input.min = "0";
        input.max = "100";
        input.placeholder = `Enter marks for Subject ${i}`;
        input.id = `subject${i}`;

        container.appendChild(input);
        container.appendChild(document.createElement("br"));
    }
}

function calculateResult() {
    const numSubjects = parseInt(document.getElementById("numSubjects").value);

    let total = 0;
    let pass = true;

    for (let i = 1; i <= numSubjects; i++) {
        const marks = parseFloat(document.getElementById(`subject${i}`).value);

        if (isNaN(marks) || marks < 0 || marks > 100) {
            alert(`Enter valid marks for Subject ${i}`);
            return;
        }

        total += marks;

        if (marks < 35) {
            pass = false;
        }
    }

    const average = total / numSubjects;

    let grade;

    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    const status = pass ? "PASS" : "FAIL";

    document.getElementById("result").innerHTML = `
        <h3>Result</h3>
        <p>Total Marks: ${total}</p>
        <p>Average Marks: ${average.toFixed(2)}</p>
        <p>Grade: ${grade}</p>
        <p>Status: ${status}</p>
    `;
}