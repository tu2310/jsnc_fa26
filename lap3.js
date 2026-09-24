//bai 1
const name = "Nguyễn Văn An";
const age = 20;
const major = "Lập trình Web";
const enname =
               `Xin chào ${name} 
                Bạn ${age} tuổi.
                học ngành :${major}`;
console.log(enname);
//bai 2
const student = {
  id: 1,
  name: "Nguyễn Văn An",
  age: 20,
  major: "Lập trình Web",
};
const ds = `
            id: ${student.id}
            Tên: ${student.name}
            Tuổi: ${student.age}
            Ngành: ${student.major}`;
console.log(ds);  
//bai 3
const sum1 = (a, b) => a + b;
console.log(sum1(5, 3));
//bai 4
const square = (a) => {
    return a * a;
};
const sum = (a, b) => {
    return a + b;
};
const sayHello = (name) => {
    return "Xin chào " + name;
};
console.log(square(5));
console.log(sum(10, 20));
console.log(sayHello("An"));
//bai 5
const numbers = [1, 2, 3, 4, 5];
const nhan = numbers.map((number) => number * 2);
console.log(nhan);
//bai 6
const students = [
  { id: 1, name: "An", age: 20 },
  { id: 2, name: "Bình", age: 22 },
  { id: 3, name: "Cường", age: 21 },
];
const names = students.map((student) => student.name);
console.log(names);
//bai 8 va bai tong hop
const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 20000000,
    category: "Điện thoại",
  },
  {
    id: 2,
    name: "MacBook Air",
    price: 25000000,
    category: "Laptop",
  },
  {
    id: 3,
    name: "AirPods",
    price: 5000000,
    category: "Phụ kiện",
  },
];
const ds1 = products.map((product) => { 
  return  `<tr class="hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-300">${product.id}</td>
              <td class="px-4 py-2 border border-gray-300">${product.name}</td>
              <td class="px-4 py-2 border border-gray-300">${product.price.toLocaleString('vi-VN')} VND</td>
              <td class="px-4 py-2 border border-gray-300">${product.category}</td>
              <td class="px-4 py-2 border border-gray-300">
                <div class="flex items-center justify-center gap-2">
                  <a
                    href="#"
                    class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </a>

                  <button
                    class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>`; 
 
});
const html = document.getElementById("students");
html.innerHTML = ds1.join("");