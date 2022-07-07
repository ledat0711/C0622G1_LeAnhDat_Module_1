function bMIFunction () {
    let weightJS = document.getElementById("weightHTML").value;
    let highJS = document.getElementById("highHTML").value;
    let bMIJS = (weightJS / (highJS * highJS));
    if (bMIJS < 18) {
        document.getElementById('outputText').innerHTML = 'Chỉ số BMI của bạn là:' +bMIJS.toFixed(2);
        document.getElementById('outputBMI').innerHTML = 'Bạn bị thiếu cân.';
    }
    else if (bMIJS < 25.0) {
        document.getElementById('outputText').innerHTML = 'Chỉ số BMI của bạn là:' + bMIJS.toFixed(2);
        document.getElementById('outputBMI').innerHTML = 'Cân nặng của bạn bình thường.';
    }
    else if (bMIJS < 30.0) {
        document.getElementById('outputText').innerHTML = 'Chỉ số BMI của bạn là:' + bMIJS.toFixed(2);
        document.getElementById('outputBMI').innerHTML = 'Bạn bị thừa cân.';
    }
    else {
        document.getElementById('outputText').innerHTML = 'Chỉ số BMI của bạn là:' + bMIJS.toFixed(2);
        document.getElementById('outputBMI').innerHTML = 'Bạn bị béo phì';
    }
}
