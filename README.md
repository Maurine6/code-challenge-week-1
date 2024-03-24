WK1: CODE CHALLENGE

  Date: 24/3/2024.

  Written By: Omondi Maurine.

Challenges.
1. Student Grade Generator.
2. Speed Detector.
3. Net Salary Calculator.

Introduction

In this code challenge, I am using javascript to write all the challeges. The challenges are in one folder and can be accessed on my github account. 

Let's get started.

1. STUDENT GRADE GENERATOR.

First, I need know the marks of the student. So I'll prompt the user to enter the given marks. This is done by:
    
    let marks = prompt("What's your marks:")
this line accepts the user given marks from the prompt.

After knowing the marks, the student would love to know what grade is their given marks.
so, I'll initialize grade using let to declare it. In this case we still do not know the graded so we say "not yet graded."

    let grade = "not yet graded"

let, allows us to redefine grade as it is meant to change depending on the marks.

Then I'll now use if...else statement to redefine grades of specific marks given.

    if(marks<40){
        grade = "E"
    }else if{Otherwise} proceeds to other arguments.

Then I'll use console.log(grade); to display the acquired grade.

2. SPEED DETECTOR.

For us to know the speed cvered by the user, I'll create a promp for the user to input respective speed.
    let speed= prompt("Enter Your speed:");

    declare the speedlimit using const because its not meant to change.

    const speedLimit = 70;

Now, let's write a function that will detect the speed if its above speed limit or not. This function should return  "OK" if the speed is less than or equals to the speed limit. 

If not, for any 5km/hr above the speed limit, the driver gets one demerit point. And if the demerit points exceed 12, the function should print "License suspended." Well, in this case create a new function that will take in the speed difference and  determine the demerit points the driver gets when  he overspeeds, and checks if the points exceed 12 points. 

We'll then call the second function inside the first function. 

3. Net Salary Calculator.

To calculate net salary of any person, we'll need some details which includes; basic salary, deductions(nhif, paye, nssf, houselevy), gross salary e.t.c

First, we need to know the basic salary. we'll again prompt the user to input their basic salary.
    
    let basicSalary = prompt("Please Input your Basic Salary:")

Second, we'll calculate paye and nhif using the respective percentages based on basic salary range.
In this case we'll write them as functions with no parameters taking in basic salary range as arguments using if...else if.. statement to give the required value.

Others like, nssf and houselevy are calculated directly from the basic salary.
    
    i.e const nssf = basicSalary*0.6;

To calculate grossSalry, add basic salary to allowances(if there is) 

To calculate deductions, add(nhif,paye,nssf,houselevy)

And lastly to calculate The required Net Salary;
    we need to subtract deductions from the gross salary.


  
  Technology used:
    Javascript only.

    Support and contact details:
        github.com/Maurine6  


        License:
The content of this site is licensed under the MIT license
Copyright (c) 2018.

    

