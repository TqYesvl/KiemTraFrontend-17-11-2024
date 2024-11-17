//Khởi tạo biến nút tăng giảm  số lượng...///
var btnLeft1 = document.querySelector('.btn-left1');
btnLeft1.addEventListener('click', function () {
    var number1 = document.querySelector('.input-number1');
    --number1.value;
    var number11 = number1.value;
    var giagoc1 = document.querySelector('.giagoc1');
    var giagoc11 = giagoc1.innerText;
    var gia1 = document.querySelector('.gia1');
    gia1.innerText = parseInt(giagoc11) * parseInt(number11);
    if (number11 < 0) {
        alert("Nhập sai số lượng");
    }
})
var btnRight1 = document.querySelector('.btn-right1');
btnRight1.addEventListener('click', function () {
    var number1 = document.querySelector('.input-number1');
    ++number1.value;
    var number11 = number1.value;
    var giagoc1 = document.querySelector('.giagoc1');
    var giagoc11 = giagoc1.innerText;
    var gia1 = document.querySelector('.gia1');
    gia1.innerText = parseInt(giagoc11) * parseInt(number11);
})
//Khởi tạo biến nút tăng giảm  số lượng...///
var btnLeft2 = document.querySelector('.btn-left2');
btnLeft2.addEventListener('click', function () {
    var number2 = document.querySelector('.input-number2');
    --number2.value;
    var number22 = number2.value;
    var giagoc2 = document.querySelector('.giagoc2');
    var giagoc22 = giagoc2.innerText;
    var gia2 = document.querySelector('.gia2');
    gia2.innerText = parseInt(giagoc22) * parseInt(number22);
    if (number22 < 0) {
        alert("Nhập sai số lượng");
    }
})
var btnRight2 = document.querySelector('.btn-right2');
btnRight2.addEventListener('click', function () {
    var number2 = document.querySelector('.input-number2');
    ++number2.value;
    var number22 = number2.value;
    var giagoc2 = document.querySelector('.giagoc2');
    var giagoc22 = giagoc2.innerText;
    var gia2 = document.querySelector('.gia2');
    gia2.innerText = parseInt(giagoc22) * parseInt(number22);
})
var btnthanhtoan = document.querySelector('.submit-thanhtoan');
btnthanhtoan.addEventListener('click', function () {
    var number1 = document.querySelector('.input-number1');
    var number11 = number1.value;
    var giagoc1 = document.querySelector('.giagoc1');
    var giagoc11 = giagoc1.innerText;
    var gia1 = document.querySelector('.gia1');
    gia1.innerText = parseInt(giagoc11) * parseInt(number11);
    var number2 = document.querySelector('.input-number2');
    var number22 = number2.value;
    var giagoc2 = document.querySelector('.giagoc2');
    var giagoc22 = giagoc2.innerText;
    var gia2 = document.querySelector('.gia2');
    gia2.innerText = parseInt(giagoc22) * parseInt(number22);
    var tongtien = parseInt(gia1.innerText) + parseInt(gia2.innerText);
    alert("Tổng tiền thanh toán của bạn là : " +tongtien);
})
