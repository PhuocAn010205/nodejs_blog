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


// Tim hieu ve truthy va falsy
let cmt ="";

if(cmt){
  console.log("Đây là chuỗi có dữ liệu"); // Đoạn này sẽ không chạy vì String là chuỗi rỗng

}else{
  console.log("Đây là một chuỗi rỗng"); // Đoạn này sẽ chạy vì String là chuỗi rỗng
}
//kiem tra objecct
let obj = {
  name: "An",
  age: 20,
  address: "Đồng Nai",
  phone: "0908633028"
};
if(obj && typeof obj === "object"){
  console.log("Đây là một object"); // Đoạn này sẽ chạy vì obj là một object
}else {
  console.log("Đây không phải là một object"); // Đoạn này sẽ không chạy vì obj là một object
}

// kiem tra or 
let firstName = "";
let lastName = "An dep trai";
if(firstName || lastName){
  console.log("Có ít nhất một biến có giá trị truthy"); // Đoạn này sẽ chạy vì lastName có giá trị truthy
}else {
  console.log("Tất cả các biến đều có giá trị falsy"); // Đoạn này sẽ không chạy vì lastName có giá trị truthy
}

// cach dung if else de kiem tra trong and or

let hello ="Hello world!";
if (hello){
  console.log("Xin chao the gioi!"); // Đoạn này sẽ chạy vì hello có giá trị truthy
}

//dung and or 
let Hello="Hello world!";
 Hello && console.log("Xin chao the gioi!"); // Đoạn này sẽ chạy vì hello có giá trị truthy

 function isObject(input) {
  return !!input && typeof input ==="object";
}

// Sample usage
console.log(isObject(null)); // false
console.log(isObject({ name: "John Smith" })); // true

function showMessage(message){
  message && console.log(message)
}
showMessage(""); // Không in gì cả
showMessage("Hello World!"); // In ra "Hello World!"


let tenNguoiDung="Huynh Nguyen Phuoc An";
let macDinh="Khach";

let tenHienThi=tenNguoiDung ?? macDinh;
console.log(tenHienThi); // Huynh Nguyen Phuoc An

let ten=null;
let macdinh="Khach";

let tenhienThi=ten ?? macdinh;
console.log(tenHienThi); // Khach

function checkValue(array,index,defaultvalue) {
  return array[index] || defaultvalue; // nếu không có giá
}

let numbervalue =[5,6,8];
console.log(checkValue(numbervalue, 0, "Error")); // 5
console.log(checkValue(numbervalue, 3, "Error")); // Error
console.log(checkValue(numbervalue, 1, "Error")); // 6
console.log(checkValue(numbervalue, 2, "Error")); // 8

function validateAge(age) {
  if (age === null || age === undefined) {
    return "Error: Age is null or undefined";
  }
  return !isNaN(age) && typeof age === "number" && age >= 0; // true nếu age là số và lớn hơn hoặc bằng 0
  // false nếu age không phải là số hoặc nhỏ hơn 0
}

// Sample usage
console.log(validateAge(25));    // true
console.log(validateAge(null));  // "Error: Age is null or undefined"
console.log(validateAge(-5));    // false

/**
 * Formats a full name by concatenating first name and last name.
 * If either firstName or lastName is null or undefined, it is replaced by an empty string.
 * @param {string|null|undefined} firstName - The first name.
 * @param {string|null|undefined} lastName - The last name.
 * @returns {string} - The formatted full name.
 */
function formatName(firstName, lastName) {
  const formattedFirstName = firstName ?? "";// Nếu firstName là null hoặc undefined, thay thế bằng chuỗi rỗng
  const formattedLastName = lastName ?? "";// Nếu lastName là null hoặc undefined, thay thế bằng chuỗi rỗng
  return `${formattedFirstName} ${formattedLastName}`;// Kết hợp firstName và lastName với một khoảng trắng giữa chúng
  // và trả về kết quả
}

// Sample usage
console.log(formatName("John", "Doe")); // John Doe
console.log(formatName(null, "Doe"));   // Doe
console.log(formatName("John"));        // John
console.log(formatName());              //
// vòng lặp for
// vòng lặp for là vòng lặp chạy từ 1 đến 5
for(let i=1;i<=5;i++){
  console.log(i);
}
let userName=["An","Thien","Hao"];// tạo một mảng tên người dùng
// vòng lặp for để duyệt qua từng phần tử trong mảng userName
for (let i = 0; i < userName.length; i++) {
  console.log(userName[i]); // In ra từng tên trong mảng
}
//Viết một hàm printNumbers nhận vào hai tham số là start (số bắt đầu) và end (số kết thúc). 
// Hàm này sẽ in ra console tất cả các số từ start đến end.
function printNumbers(start,end){
  for(let i=start; i <= end ;i++){
   console.log(i)
  }
}
printNumbers(1, 5);
// 1
// 2
// 3
// 4
// 5

// Viết một hàm reverseString nhận vào một chuỗi và trả về chuỗi đó được đảo ngược.
function reverseString(str) {
  let reversed = '';// Khởi tạo biến reversed là chuỗi rỗng
  for (let i = str.length - 1; i >= 0; i--) // Duyệt từ cuối chuỗi đến đầu chuỗi
    {
      reversed += str[i];// Nối từng ký tự vào biến reversed
  }
  return reversed;// Trả về chuỗi đã đảo ngược
}

// Sample usage
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
// Viết một hàm findMax nhận vào một mảng số và trả về số lớn nhất trong mảng đó.
function findMax(arr){
  let max=arr[0];
  for(let i=0;i < arr.length;i++){
      if(arr[i]>max){
         max = arr[i];
      }
  }
  return max;
}
console.log(findMax([1, 3, 5, 7, 9])); // 9
console.log(findMax([10, 20, 30, 40, 50])); // 50
console.log(findMax([-5, -2, -1, -3])); // -1

//Viết hàm listEvenNumbers nhận vào hai tham số là start và end, 
// sau đó in ra tất cả các số chẵn từ start đến end sử dụng vòng lặp for.
function listEvenNumbers(start,end){
  for(let i=start;i <=end;i++){
      if(i %2 === 0){
        console.log(i)
      }
 
  }
}
listEvenNumbers(1, 10);
// 2
// 4
// 6
// 8
// 10

//Viết hàm sumOddNumbers nhận vào một mảng số và trả về tổng của
//  tất cả các số lẻ trong mảng đó sử dụng vòng lặp for.

// Sample usage
function sumOddNumbers(arr){
  let sum = 0;
  for( let i =0 ;i < arr.length;i++){
      if(arr[i] %2 !==0){
          sum +=arr[i];
      }
  }
  return sum;
}
console.log(sumOddNumbers([1, 2, 3, 4, 5])); // 9


// Viết hàm findMin nhận vào một mảng số và trả về 
// số nhỏ nhất trong mảng đó sử dụng vòng lặp for.
// Sample usage
function findMin(arr){
  let min = arr[0];
  for(let i =0 ; i< arr.length;i++)
  {
      if(min>arr[i]){
          min =arr[i];
      }
  }
  return min;
}
console.log(findMin([5, 2, 8, 1, 4])); // 1

//Viết hàm countPositiveNumbers nhận vào một mảng số và trả về số lượng số dương trong mảng đó.

// Sample usage
function countPositiveNumbers(arr){
  let num = 0 ;
  for(let i = 0;i< arr.length;i++){
      if(arr[i]>0){
          num++;
      }
  }
  return num;
}
console.log(countPositiveNumbers([-1, 2, 3, -4, 5])); // 3

//Viết hàm sumArray nhận vào một mảng số và trả về 
// tổng của tất cả các số trong mảng đó.


// Sample usage
function sumArray(arr){
  let sum =0;
  for (let i =0 ; i< arr.length;i++){
      sum +=arr[i];
  }
  return sum;
 } 
console.log(sumArray([1, 2, 3, 4, 5])); // 15

//Viết hàm calculateAverage 
// nhận vào một mảng số và trả về trung bình cộng của các 
// số trong mảng đó, trả về 0 nếu mảng trống.


// Sample usage
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
  }
  return numbers.length > 0 ? sum / numbers.length : 0;// Trả về 0 nếu mảng trống
}
console.log(calculateAverage([10, 20, 30, 40, 50])); // 30

//Viết hàm isAscending nhận vào một mảng số và kiểm 
// tra xem mảng đó có phải là dãy số tăng dần không. Trường hợp mảng chỉ 
// có một phần tử hoặc mảng rỗng không được coi là mảng tăng dần.

// Sample usage
function isAscending(arr) {
  if (arr.length <= 1) return false;
  for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] >= arr[i + 1]) {
          return false;
      }
  }
  return true;
}
console.log(isAscending([1, 2, 3, 5])); // true

//Viết hàm isPrime nhận vào một số nguyên n 
// và trả về true nếu n là số nguyên tố, ngược lại trả về false.


// Sample usage
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) 
      return false;
  }
  return true;
}
console.log(isPrime(2)); // true

//Viết hàm sumPrimes nhận vào hai số nguyên 
// start và end, sau đó tính và trả về tổng của tất cả các số nguyên tố trong khoảng từ start đến end.

// Sample usage
function sumPrimes(start,end){
  let sum=0;
  for(let i =start;i<=end;i++){
      if(isPrime(i)){
          sum+=i;
      }
  }
  return sum;
}
console.log(sumPrimes(10, 20)); // 60

//Viết một hàm repeatChar nhận vào hai tham số: character và n. 
// Hàm này sẽ trả về một chuỗi gồm kí tự character được lặp lại n lần.


// Sample usage
function repeatChar(character,n){
  let num="";
  for(let i=0;i<n;i++){
      num+=character;
  }
  return num
}
console.log(repeatChar('*', 5)); // *****
console.log(repeatChar('a', 3)); // aaa
console.log(repeatChar('b', 0)); // (empty string)


//Viết một hàm arrayToHTMLList nhận vào một mảng các chuỗi và trả về một chuỗi HTML. 
// Chuỗi HTML này sẽ thể hiện một danh sách không sắp xếp (<ul>) với mỗi phần tử của 
// mảng được biểu diễn bằng một mục danh sách (<li>).
// Sample usage
function arrayToHTMLList(array) {
  let html = '<ul>';
  for (let i = 0; i < array.length; i++) {
      html += `<li>${array[i]}</li>`;
  }
  html += '</ul>';
  return html;
}
console.log(arrayToHTMLList(['HTML', 'CSS', 'JavaScript']));
// <ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>


//Viết một hàm linearSearch nhận vào hai tham số: một mảng số nguyên arr và một giá trị target cần tìm. 
// Hàm này sẽ thực hiện tìm kiếm trong mảng: nếu tìm thấy target, trả về vị trí (index) của target trong mảng; 
// nếu không tìm thấy, trả về -1.

// Sample usage
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) return i;
  }
  return -1;
}
 console.log(linearSearch([5, 3, 7, 6, 2, 9], 6)); // 3
 console.log(linearSearch([5, 3, 7, 6, 2, 9], 10)); // -1


 function testAge(age){
  for (let i = 0; i < testAge.length; i++) {
    if (age >= 18 && age <= 60) {
      console.log(`Độ tuổi ${age}: Hợp lệ`);
    } else {
      console.log(`Độ tuổi ${age}: Không hợp lệ`);
    }
  }
 }

 console.log(testAge([20, 22, 35, 61, 17, 58])); // true