// prompt the user to input the speed.
const prompt = require("prompt-sync")({sigint:true});

let speed = prompt("Enter speed:")
// initialize speedlimit.
const speedLimit = 70;

// write a function to detect the speed.
function speeddetector(){
    // check if the speed is less or equal to the speedlimit.
    if (speed <= speedLimit){
        // if true then print ok.
        console.log("OK");
    }else{
        // if false, call the function that calculates demerit points based on the  speed variance.
        return demeritPoints();
    }
}

// write a function to calculate the demerit points.
function demeritPoints(){
    // calculate the speed variance.
    const overSpeed = speed - speedLimit;
    // initialize the speed that when exceeded with rewards the demerit points.
    speedToPoints = 5;
    // calculate the rewarded points
    points = Math.floor(overSpeed/speedToPoints)
    // print the total acquired demerit points.
    console.log(`points: ${points}`);
    
    // check if the demerit points acquired are less or greater than 12.
    if (points > 12){
        // if true then print "License Suspended."
        console.log(`License Suspended.`)
    }
    
}
speeddetector(); // call the first function to execute the entire program.