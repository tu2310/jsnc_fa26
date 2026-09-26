//bai 1234
axios.get('http://localhost:3000/products').then((res) => {
  console.log("thành công", res.data);

  document.getElementById("product-list").innerHTML = res.data.map((item,index) => {
    return `
      <tr class="hover:bg-gray-50">
        <td class="px-4 py-2 border border-gray-300">${index + 1}</td>
        <td class="px-4 py-2 border border-gray-300">${item.id}</td>
        <td class="px-4 py-2 border border-gray-300">${item.name}</td>
        <td class="px-4 py-2 border border-gray-300">${item.price.toLocaleString('vi-VN')} VND</td>
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
      </tr>
    `;
  }).join("");
});