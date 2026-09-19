console.log('day la lap 1');
//bài 1,2
let name = "Nguyễn Quang Năng Tú";
let age = 20;
const address = "Hà Nội";
const isStudent = true;
console.log("Họ tên:", name);
console.log("Tuổi:", age);
age = 21;
console.log("Tuổi:", age);
console.log("Địa chỉ:", address);
console.log("Sinh viên:", isStudent);
//bài 3
const a=10;
const b=5;
console.log("Tổng :",a+b);
console.log("Hiệu:",a-b);
console.log("Tích:",a*b);
console.log("Thương:",a/b);
//bài 4 
function sayHello(name){
    console.log("Xin chào",name);
}
sayHello("An");
sayHello("Tú");
sayHello("Nam");
//bai 5
const result = sum(10, 20);
function sum(a,b){
    return a+b;
}
console.log("tổng:",result)
//bai 6
function calculateTotal(price, quantity) {
    return price * quantity;
}

const total = calculateTotal(50000, 4);

console.log("giá tiền:",total);
//bai 7
const math = 8;
const english = 7;
const javascript = 9;

function calculateAverage(math, english, javascript) {
    return (math + english + javascript) / 3;
}

const average = calculateAverage(8, 7, 9);

console.log("Điểm trung bình:", average);