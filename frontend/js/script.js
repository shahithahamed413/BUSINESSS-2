function calculateBMI(){

let height =
document.getElementById("height").value / 100;

let weight =
document.getElementById("weight").value;

let bmi =
weight / (height * height);

document.getElementById("result").innerHTML =
"Your BMI is " + bmi.toFixed(2);

}