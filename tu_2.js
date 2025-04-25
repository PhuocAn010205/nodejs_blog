// kiểm tra 2 value có cần kiểu dữ liệu không hay;
function checkType(value1, value2) {
  if (typeof value1 === typeof value2) {
    return "cung kiểu dữ liệu";
  }
  return "khác kiểu dữ liệu";

};
//muốn kiểm tra dữ liệu thì không nên dùng if ở sau return vì lúc đó code chỉ chạy tới 
// return thì đã ra kết quả rồi, không chạy tiếp được nữa
// ví dụ sau
// function checkType(value1, value2) {
  // if (typeof value1 === typeof value2) {
  //   return "cung kiểu dữ liệu";
  // }
  // return "khác kiểu dữ liệu";}



console.log(checkType(1, 2)); // true
console.log(checkType(1, '2')); // false