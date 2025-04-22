//de1 
//Viết hàm canOrganizeMusicFestival để đánh giá khả năng tổ chức một lễ hội âm nhạc.
//  Điều kiện: số lượng ban nhạc ít nhất là 5, có đủ ngân sách quảng cáo, 
// và dự báo thời tiết không có mưa.
function canOrganizeMusicFestival(bandCount, hasEnoughBudget, weatherForecast){
    if(bandCount>=5 &&hasEnoughBudget && weatherForecast!=="rainy"){
        return true;
    }else {
        return false;
    }
}
console.log(canOrganizeMusicFestival(6, true, "sunny")); // true
console.log(canOrganizeMusicFestival(4, true, "cloudy")); // false
console.log(canOrganizeMusicFestival(5, false, "sunny")); // false
console.log(canOrganizeMusicFestival(5, true, "rainy")); // false
//de2 
//Viết hàm canOpenNewStore để đánh giá khả năng mở cửa hàng mới. Điều kiện:
//Địa điểm tốt hoặc ngân sách quảng cáo cao, và:
//Phải có ít nhất 3 nhân viên có kinh nghiệm.
console.log(canOpenNewStore(true, false, 4)); // true
console.log(canOpenNewStore(true, false, 2)); // false
console.log(canOpenNewStore(false, true, 3)); // true
console.log(canOpenNewStore(false, false, 5)); // false
function canOpenNewStore(isGoodLocation, highAdBudget, experiencedEmployees){
    if ((isGoodLocation || highAdBudget)&& experiencedEmployees>=3){
        return true;
    }else {
        return false;
    }
}
//de 3
//Viết hàm isCapableProjectManager để xác định một người có đủ năng lực quản lý dự án hay không.
//  Điều kiện: kinh nghiệm ít nhất 3 năm, hiểu biết về công nghệ, và có kỹ năng giao tiếp tốt.
//  Đáp ứng tất cả các yếu tố mới đủ điều kiện.
console.log(isCapableProjectManager(4, true, true)); // true
console.log(isCapableProjectManager(2, true, true)); // false
console.log(isCapableProjectManager(5, false, true)); // false
function isCapableProjectManager(experienceYears, knowsTech, goodCommunication){
    if(experienceYears >=3 && knowsTech &&goodCommunication){
        return true;
    }else{
        return false;
    }
};
//De 4 
//Viết hàm canJoinExchangeProgram để kiểm tra xem một sinh viên có đủ 
// điều kiện tham gia chương trình trao đổi học thuật. Điều kiện:
//Điểm trung bình trên 8.0 hoặc có sự giới thiệu từ giáo viên, và:
//Không có vi phạm kỷ luật.
console.log(canJoinExchangeProgram(8.5, false, true)); // true
console.log(canJoinExchangeProgram(7.5, true, true));  // true
console.log(canJoinExchangeProgram(7.5, true, false)); // false
console.log(canJoinExchangeProgram(9, true, false)); // false
function canJoinExchangeProgram(averageGrade, hasTeacherRecommendation, noDisciplinaryViolations) {
    if((averageGrade >=8 ||hasTeacherRecommendation)&&noDisciplinaryViolations){
        return true;
    }else {
        return false;
    }
};
// de5
//Viết hàm planSportsEvent để quyết định việc tổ chức một sự kiện thể thao.
//  Điều kiện: chỉ tổ chức nếu có ít nhất 50 người tham gia, ngân sách dưới 10000, 
// và không trùng với ngày lễ. Nếu các điều kiện không đủ, hãy hoãn sự kiện
console.log(planSportsEvent(60, 8000, false)); // true
console.log(planSportsEvent(40, 9000, false)); // false
console.log(planSportsEvent(60, 11000, true)); // false
function planSportsEvent(participants, budget, isHoliday) {
    if((participants>=50|| budget<= 1000) && !isHoliday){
        return true;
    }else {
        return false;
    }
};