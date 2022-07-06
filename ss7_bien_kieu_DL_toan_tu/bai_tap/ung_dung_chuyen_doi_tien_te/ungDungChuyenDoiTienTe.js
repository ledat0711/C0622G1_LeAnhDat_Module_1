function ChangeMoney() {
    let Amount = +document.getElementById("Amount").value;
    let FromC = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let ResultOK;


    if (FromC == "KRW" && To == "VND") {
        ResultOK = "Kết quả: " + (Amount * 17.88) + " Đ";
    }
    else if (FromC == "VND"&& To =="KRW"){
        ResultOK = "Kết quả: "+ (Amount / 17.88) + " ₩";
    }
    else if (FromC == "VND") {
        ResultOK = "Kết quả: " + Amount + " Đ"
    } else {
        ResultOK = "Kết quả: " + Amount + " ₩"
    }
    alert(ResultOK);
}