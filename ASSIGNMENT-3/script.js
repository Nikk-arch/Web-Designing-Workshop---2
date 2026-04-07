function calculateResult(){
    let n = document.getElementById("subject").value;
    let i ;
    let total=0;
    for(i=0;i<n;i++){
        let x = (parseFloat(prompt("Enter the subject No. " + (i+1))));
        total += x;
    }
        let average = total/n;
        let grade;
        if(average >= 75){
            grade = "A";
        }else if(average >= 60){
            grade = "B";
        }else if(average >= 50){
            grade = "C";
        }else if(average >= 40){
            grade = "D";
        }else{
            grade = "F";
        } 
        let Result;
        if(average >= 40){
            result= "Pass";
        }else{
            result = "Fail";
        }

   let res = document.getElementById("result").innerHTML = "Total Marks: " + total + "<br/>" + "Average Marks: " + average + "<br/>" + "Grade: " + grade + "<br/>" + "Result: "+ result + "<br/>";
}