
// bai 2
// tạo 1 hàm createUser để tạo người dùng với các thuộc tính: tên, tuổi, địa chỉ và số điện thoại.
function createUser(name, age, address, phone) {
  return {
    name:name ,
    age: age ,
    address:address,
    phone: phone 
  };
}

const user1 = createUser("Huỳnh Nguyễn Phước An ", 20, "Đồng Nai  ", "0908633028 ");
console.log(user1); // { name: 'Huỳnh Nguyễn Phước An ', age: 20, address: 'Đồng Nai  ', phone: '0908633028 ' }