// prompt the user to input the BASIC SALARY.
const prompt = require("prompt-sync")({sigint:true});

let basicSalary = prompt("Please Input your Basic Salary:")

// write a function to calculate paye based on the basic salary.
function paye(){
    if(basicSalary<=24000){
        return (basicSalary)*0.1;
    }else if(basicSalary<=32333){
        return (basicSalary)*0.25;
    }else if(basicSalary>32333){
        return (basicSalary)*0.3
    }
}

// write a function that calculates nhif amount based on the basic salary.
function nhif(){
    if(basicSalary<=5999){
        return 150;
    }else if(basicSalary>=6000){
        return 300;
    }else if(basicSalary>=8000){
        return 400;
    }else if(basicSalary>=12000){
        return 500;
    }else if(basicSalary>=15000){
        return 600;
    }else if(basicSalary>=20000){
        return 750;
    }else if(basicSalary>=25000){
        return 850;
    }else if(basicSalary>=30000){
        return 900;
    }else if(basicSalary>=35000){
        return 950;
    }else if(basicSalary>=40000){
        return 1000;
    }else if(basicSalary>=45000){
        return 1100;
    }else if(basicSalary>=50000){
        return 1200;
    }else if(basicSalary>=60000){
        return 1300;
    }else if(basicSalary>=70000){
        return 1400;
    }else if(basicSalary>=80000){
        return 1500;
    }else if(basicSalary>=90000){
        return 1600;
    }else if(basicSalary>=100000){
        return 1700;
    }
}



// initialize nssf which is 6% of the basic salary.
const nssf = basicSalary*0.06;
console.log(`nssf:${nssf}`);


// initialize gross salary also known as, grosspay. Its usually basic salary plus allowances but in this case we do not have allowances.
const grossSalary = (basicSalary);
console.log(`Grosspay:${grossSalary}`);

// initialize house levy which is 1.5% of the basic salary.
const houseLevy = grossSalary*0.015;
console.log(`Houselevy:${houseLevy}`);

// Calculate deductions.
const deductions = houseLevy + nssf + paye(); + nhif();
console.log(`Deductions:${deductions}`);

// calculate the respective netpay.
const netpay = grossSalary - deductions;
console.log(`Your netpay is:${netpay}`);

    