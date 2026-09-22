//array
//bai 1
const names = ["An", "Bình", "Nam", "Hòa", "Lan"];
console.log("Danh sách tên:", names);
console.log(names[0]); // In ra phần tử đầu tiên
console.log(names[4]); // In ra phần tử cuoi cùng
console.log(names.length); // In ra độ dài của mảng
names.push("Hà"); // Thêm phần tử vào cuối mảng
console.log("Sau khi Thêm:", names);
names.pop(); // Xóa phần tử cuối cùng của mảng
console.log("Sau khi xóa phần tử cuối:", names);
//bai 2
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//bai 3
const student = {
  id: 1,
  name: "Nguyễn Văn An",
  age: 20,
  email: "an@gmail.com",
  major: "CNTT",
};
 console.log("Thông tin sinh viên:", student);
 console.log("Tên sinh viên:", student.name);
 console.log("Tuổi sinh viên:", student.age);
 console.log("Email sinh viên:", student.email);
 student.age = 21;
 console.log("Tuổi sinh viên sau khi cập nhật:", student.age);
student.phone = "0123456789"; // Thêm thuộc tính mới
console.log("Thông tin sinh viên sau khi thêm số điện thoại:", student);
//bai 4
const students = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    age: 20,
  },
  {
    id: 2,
    name: "Trần Văn Bình",
    age: 21,
  },
  {
    id: 3,
    name: "Lê Văn Nam",
    age: 20,
  },
];
console.log("Danh sách sinh viên:", students);
console.log("Tên sinh viên đầu tiên:", students[0].name);
console.log("Tuổi sinh viên thứ hai:", students[1].age);
for (let i = 0; i < students.length; i++) {
    console.log("Tên sinh viên:", students[i].name);
}

//bai 5
let html = document.getElementById("students");
let content = "";
for (let i = 0; i < students.length; i++) {
   content +=
  `<div>
  <h3>tên sinh viên: ${students[i].name}</h3>
  <h4>Age: ${students[i].age}</h4>
  </div>`;
}
html.innerHTML = content;
console.log(html);
//bai tap tổng hợp
const products = [
  { id: 1, name: "iPhone 15", price: 20000000 },
  { id: 2, name: "Samsung Galaxy S24", price: 5000000 },
  { id: 3, name: "Xiaomi 14", price: 3000005 }
];
console.log("Danh sách sản phẩm:", products);
let totalPrice = 0; 
for (let i = 0; i < products.length; i++) {
  console.log("Tên sản phẩm:", products[i].name);
  console.log("Giá sản phẩm:", products[i].price);
  totalPrice += products[i].price;
}
console.log("Tổng giá trị sản phẩm:", totalPrice);
let htmlProducts = document.getElementById("products");
let contents = "";
for (let i = 0; i < products.length; i++) {
   contents +=
  `<div>
  <h3>tên san pham: ${products[i].name}</h3>
  <h4>Giá: ${products[i].price}</h4>
  </div>`;
}
contents += `<h4>Tổng giá trị: ${totalPrice}</h4>`;
htmlProducts.innerHTML = contents;
