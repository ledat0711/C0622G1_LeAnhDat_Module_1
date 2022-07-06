function Add() {
    let number1 = document.getElementById("num1").value; //"7"
    let number2 = document.getElementById("num2").value; //"9"
    let result = Number(number1) + Number(number2); //16
    document.getElementById("result").innerHTML = "Tổng = " + result;
}
function Sub() {
    let number1 = document.getElementById("num1").value; //"7"
    let number2 = document.getElementById("num2").value; //"9"
    let result = Number(number1) - Number(number2); //16
    document.getElementById("result").innerHTML = "Hiệu = "  + result;
}
function nhan() {
    let number1 = document.getElementById("num1").value; //"7"
    let number2 = document.getElementById("num2").value; //"9"
    let result = Number(number1)*Number(number2); //16
    document.getElementById("result").innerHTML = "Tích =" + result;
}
function chia() {
    let number1 = document.getElementById("num1").value; //"7"
    let number2 = document.getElementById("num2").value; //"9"
    let result = Number(number1)/Number(number2); //16
    document.getElementById("result").innerHTML = "Thương =" + result;
}