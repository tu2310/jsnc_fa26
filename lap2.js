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