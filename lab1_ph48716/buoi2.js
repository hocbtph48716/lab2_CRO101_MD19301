// 1. Hàm kiểm tra số dương
function testNum(a) {
    let result;
    if (a > 0) {
        result = 'Số dương';
    } else {
        result = 'Không phải số dương';
    }
    return result;
}
console.log(testNum(-5)); // Kết quả: "Không phải số dương"

// 2. Hàm tính phí thành viên
function getFee(isMember) {
    return isMember ? '$2.00' : '$10.00';
}
console.log('Phí thành viên là ', getFee(true));  // Kết quả: "Phí thành viên là $2.00"
console.log('Phí thành viên là ', getFee(false)); // Kết quả: "Phí thành viên là $10.00"
console.log('Phí thành viên là ', getFee(null));  // Kết quả: "Phí thành viên là $10.00"

// 3. Cấu trúc switch
const expr = 'Cam';
switch (expr) {
    case 'Tao':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Cam':
    case 'Buoi':
        console.log('Cam và Bưởi giá 20,000/kg');
        break;
    default:
        console.log(`Xin lỗi, chúng tôi không có giá ${expr}.`);
}

// 4. Vòng lặp for
for (let step = 0; step < 5; step++) {
    console.log("Đi bộ mỗi bước về phía đông, bước thứ ", step + 1);
}

// 5. Hàm dumpProps để in thuộc tính của đối tượng
const dumpProps = (obj, objName) => {
    let result = "";
    for (const i in obj) {
        result += `${objName}.${i} = ${obj[i]}\n`;
    }
    console.log(result);
};
const myCar = { make: "Ford", model: "Mustang" };
dumpProps(myCar, "car");

// 6. Lỗi tham chiếu không xác định "arr"
const arr = [1, 2, 3]; // Thêm định nghĩa mảng
console.log('Độ dài của mảng là: ', arr.length);

// 7. Sửa lỗi nối mảng sai tên biến
const array11 = ['a', 'b', 'c'];
const array22 = ['d', 'e', 'f'];
const array33 = array11.concat(array22);
console.log(array33); // Kết quả: Array ["a", "b", "c", "d", "e", "f"]

// 8. Lọc từ có độ dài lớn hơn 6
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log(result); // Kết quả: Array ["exuberant", "destruction", "present"]

// 9. Tìm phần tử đầu tiên lớn hơn giá trị cụ thể
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);
const found2 = array1.find((element) => element > 10000);
console.log(found);  // Kết quả: 12
console.log(found2); // Kết quả: undefined

// 10. Tạo mảng mới với các phần tử nhân đôi
const array111 = [1, 4, 9, 16];
const map1 = array111.map((x) => x * 2);
console.log(map1); // Kết quả: Array [2, 8, 18, 32]

// 11. Duyệt mảng bằng forEach
const array1111 = ['a', 'b', 'c'];
array1111.forEach((element) => console.log(element));
// Kết quả: "a" "b" "c"

// 12. Duyệt đối tượng bằng Object.entries
const object1 = { a: 'somestring', b: 42 };
for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}
// Kết quả: "a: somestring" "b: 42"

// 13. Lấy giá trị từ đối tượng bằng Object.values
const object111 = { a: 'somestring', b: 42, c: false };
console.log(Object.values(object111));
// Kết quả: Array ["somestring", 42, false]
