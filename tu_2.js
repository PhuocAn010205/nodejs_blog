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



console.log(checkType(1, 2)); // cung kiểu dữ liệu
console.log(checkType(1, '2')); // khác kiểu dữ liệu


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
console.log(user1); // { name: 'Huỳnh Nguyễn Phước An ', age: 20, address: 'Đồng Nai  ', 
// phone: '0908633028 ' }

let string = "Huỳnh Nguyễn Phước An ";

console.log(typeof string=== "string"); // true

//kieu tra array
let names = ["An","Thien","Hao"];

console.log(Array.isArray(names)); // true

let person ={ten:"An", tuoi:20};

if(typeof person === "object" && person !== null && !Array.isArray(person)){
  console.log("person là object"); // person là object
}else {
  console.log("person không phải là object");
}


function isString(value) {
 return typeof value ==="string"
};
console.log(isString('Hello')); // true
console.log(isString(123)); // false

function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}
console.log(isNumber(123)); // true
console.log(isNumber(NaN)); // false

function isBigInt(value) {
  return typeof value === "bigint";
}
console.log(isBigInt(123n)); // true  
console.log(isBigInt(123)); // false
function isBoolean (value){
  return typeof value === "boolean";
};
console.log(isBoolean(false)); // true
console.log(isBoolean(0)); // false

function isNull(value) {
  return value === null;
};
console.log(isNull(null)); // true
console.log(isNull("null")); // false

function isUndefined(value) {
  return typeof value === "undefined"
};
console.log(isUndefined(undefined)); // true
console.log(isUndefined(null)); // false

function isSymbol(value) {
  return typeof value === "symbol"
}
console.log(isSymbol(Symbol("foo"))); // true
console.log(isSymbol("foo")); // false

function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};
console.log(isObject({})); // true
console.log(isObject([])); // false

function isArray(value) {
  return Array.isArray(value);
}
console.log(isArray([1, 2, 3])); // true
console.log(isArray("text")); // false

function isFunction(value){
  return typeof value === "function";
}
console.log(isFunction(function() {})); // true
console.log(isFunction({})); // false

function isString(value) {

    if (typeof value ==="string") {

      return `Chào mừng ${value} đến với trang web của chúng tôi!`;
    } else {
      return "Tên không hợp lệ!";
    }
  }
 
console.log(isString("Nguyễn A"));
console.log(isString("Trần B"));
console.log(isString(123));

function calculateAge(currentYear,birthYear) {
 if (typeof currentYear !== "number" || typeof birthYear !== "number" || !isNaN(currentYear) || isNaN(birthYear)) 
  {
    return -1;
  }
  else{
    return currentYear - birthYear;
  }
}
console.log(calculateAge(2024, 2000)); // 24
console.log(calculateAge(2024, 2020)); // 4
console.log(calculateAge(2024, "2020")); // -1
console.log(calculateAge(2024, NaN)); // -1
console.log(calculateAge(NaN, 2020)); // -1

function getElementAtIndex(array,index) {
  if(!Array.isArray(array) || typeof index !== "number" || index < 0 ) {
    return null;
  }
  else{
    return array[index];
  }
}
 console.log(getElementAtIndex([1, 2], 1)); // 2
console.log(getElementAtIndex(["red", "blue"], 0)); // red
console.log(getElementAtIndex({name: "John"}, 0)); // null
console.log(getElementAtIndex([1, 2], -1)); // null
console.log(getElementAtIndex([1, 2], "1")); // null
function checkEmpty(value) {
 if (typeof value === "undefined" || value === null) {
    return "Trống";
  }else {
    return "Không trống";
  }
}
console.log(checkEmpty(null)); // Trống
console.log(checkEmpty(undefined)); // Trống
console.log(checkEmpty()); // Trống
console.log(checkEmpty(123)); // Không trống
console.log(checkEmpty([])); // Không trống

function isValueUndefined(value) {
  if(value === void 0){
      return true;
  }else {
      return false;
  }
}

// Sample usage
console.log(isValueUndefined(undefined)); // true
console.log(isValueUndefined(void 0)); // true
console.log(isValueUndefined(null)); // false
console.log(isValueUndefined(0)); // false
console.log(isValueUndefined('')); // false

function validateUser(user) {
  if (typeof user.name !== "string" || user.name.trim() === "") {
    return "Tên không hợp lệ";
  }

  if (typeof user.email !== "string" || !user.email.includes("@")) {
    return "Email không hợp lệ";
  }

  if (typeof user.age !== "number" || !isFinite(user.age) || user.age < 0 || user.age > 120) {
    return "Tuổi không hợp lệ";
  }

  return "Hợp lệ";
}
console.log(validateUser({ name: "Alice", email: "alice@gmail.com", age: 25 }));
// ✅ Output: "Valid"

console.log(validateUser({ name: "", email: "alice@gmail.com", age: 25 }));
// ❌ Output: "Invalid name"

console.log(validateUser({ name: "Bob", email: "bobgmail.com", age: 25 }));
// ❌ Output: "Invalid email"

console.log(validateUser({ name: "Tom", email: "tom@gmail.com", age: 150 }));
// ❌ Output: "Invalid age"


// xử lí thông tin người dùng 

let numberA = 5;
let numberB = 5;
function isNumber(value){
  return typeof value === "number" && !isNaN(value);
}
if(isNumber(numberA)&& isNumber(numberB)){
  console.log(`Tổng A + B là: ${numberA + numberB}`);
}else {
  console.log("Giá trị không hợp lệ");
}
 function convertDataType(value, type){
  switch(type){
    case "number":
      return Number(value);
    case "string":  
       return String(value);
    case "boolean": 
    return Boolean(value);
    default:
      return "Invalid type";
  }
 }

console.log(convertDataType("123", "number")); // 123
console.log(convertDataType(123, "string"));   // "123"
console.log(convertDataType(1, "boolean"));    // true
console.log(convertDataType(123, "object"));   // Invalid type

function calculate(a, b, operator) {
   const num1 =Number(a);
   const num2 = Number(b);// chuyen dl ve kieu number
  if (isNaN(num1) || isNaN(num2)) // kiểm tra nếu không phải là số 
  {
    return "Số đầu vào không hợp lệ"; //Invalid input number
}

  switch (operator) {
    case "add":
      return  num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      if (num2 === 0) {
        return "Không thể chia cho 0";
      }
      return Number(num1) / Number(num2);
    default:
      return "Toán tử không hợp lệ";//Invalid operator
  }

}
console.log(calculate("5", "3", "add"));      // 8
console.log(calculate("5", "3", "subtract")); // 2
console.log(calculate("5", "3", "multiply")); // 15
console.log(calculate("5", "0", "divide"));   // Cannot divide by zero
console.log(calculate("five", "3", "add"));   // Invalid input number
console.log(calculate("5", "three", "add"));  // Invalid input number
console.log(calculate("5", "3", "modulus"));  // Invalid operator