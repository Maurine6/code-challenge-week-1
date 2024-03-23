// prompt the user to input the marks
const prompt = require("prompt-sync")({sigint:true});

let marks = prompt("What's your marks:")
// initialize grade.
let grade = "not yet graded"

// alert the user on the required range of input.
alert = "Marks should be between 0 to 100. Not anything above that!"



// define grades from the given marks using IF

    if (marks > 79){
        // marks above 79 are graded at A. Marks should not exceed 100.
        grade = "A";
    } 
    else if (marks > 59){
        // marks from 60 to 79 are graded at B.
        grade = "B";
    } 
    else if(marks > 49){
        // marks from 50 to 59 are graded at C.
        grade = "C";
    } 
    else if(marks >= 40){
        // marks from 40 to 49 are graded at D.
        grade = "D";
    
    }
    else if(marks < 40){
        // any marks below 40, that is from 0 are graded at E.
        grade = "E";
    }
    else;
    alert ="Fail";

    console.log(grade);
