function checkDataType(value){
   return  typeof value;
}
console.log(checkDataType(42)); // number
console.log(checkDataType("Hello world")); // string
console.log(checkDataType({name: "John"})); // object