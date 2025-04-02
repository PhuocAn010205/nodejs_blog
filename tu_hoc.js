console.log(canPurchaseCarInsurance(22, true, true)); // true
console.log(canPurchaseCarInsurance(20, true, true)); // false
function canPurchaseCarInsurance(age, hasLicense, noAccidents) {
    if (age >= 21 && hasLicense && noAccidents){
        return true;
    }
    else {
        return false;
    }
}
// Viết hàm canPurchaseCarInsurance(age, hasLicense, noAccidents)
//  kiểm tra xem một người có thể mua bảo hiểm xe không. 
// Điều kiện: trên 21 tuổi, có giấy phép lái xe và không có hồ sơ tai nạn trong quá khứ.
//Đề 2
//Viết hàm canJoinFootballTeam(age, hasExperience)
//  kiểm tra xem một người có được tham gia đội bóng không. 
// Điều kiện: tuổi từ 18 đến 35 và có kinh nghiệm chơi bóng.
console.log(canJoinFootballTeam(25, true)); // true
 console.log(canJoinFootballTeam(18, true)); // false
 function canJoinFootballTeam(age,hasExperience){
    if(age >=18 && age <=35 && hasExperience){
        return true;
    }else{
        return false
    }
 };
//  Đề 3    
//isBankAccountValid(isIdentityVerified, balance)
//  kiểm tra xem tài khoản ngân hàng có hợp lệ. 
// Điều kiện: đã xác minh danh tính và số dư tài khoản trên 100 đô.
console.log(isBankAccountValid(true, 150)); // true
console.log(isBankAccountValid(false, 200)); // false
function isBankAccountValid(isIdentityVerified,balance){
    if (isIdentityVerified && balance>=100){
      return true;
    }else {
        return false;
    }
};
// de 4
//Viết hàm canParticipateInMarathon(age, hasTrained) 
// kiểm tra xem một người có thể tham gia giải chạy bộ. 
// Điều kiện: tuổi từ 18 trở lên và đã tập luyện.
console.log(canParticipateInMarathon(20, true)); // true
console.log(canParticipateInMarathon(20, false)); // false
function canParticipateInMarathon(age,hasTrained){
    if(age>=18 && hasTrained){
       return true;
    }else {
        return false;
    }
}
//De 5
//Viết hàm canEnrollCookingClass(lovesCooking, noFoodAllergies)
//  kiểm tra xem một người có thể tham gia khóa học nấu ăn. 
// Điều kiện: yêu thích nấu ăn và không bị dị ứng thực phẩm.
console.log(canEnrollCookingClass(true, true)); // true
 console.log(canEnrollCookingClass(true, false)); // false
 function canEnrollCookingClass(lovesCooking, noAccidents) {
    if(lovesCooking && noAccidents){
        return true;
    }else {
        return false;
    }
 }