//de1
//Viết hàm investmentDecision 
// để quyết định xem có nên đầu tư vào một dự án không. 
// Đầu tư nếu dự án có rủi ro thấp hoặc trung bình và ROI (Return on Investment) 
// dự kiến trên 10%, hoặc nếu dự án có rủi ro cao nhưng ROI trên 20%.

console.log(investmentDecision("medium", 0.12)); // true
console.log(investmentDecision("high", 0.15));   // false
console.log(investmentDecision("low", 0.1));     // false
function investmentDecision(riskLevel, expectedROI){
    if( (riskLevel !== "high" && expectedROI > 0.1) || (riskLevel === "high" && expectedROI > 0.2)){
        return true;
    }else {
        return false
    }
};
//de 2
//Viết hàm determineTravelPlan để xác định kế hoạch 
// du lịch dựa trên thời tiết, ngân sách, và sở thích
//  cá nhân. Nếu thời tiết tốt, ngân sách từ 5000 trở 
// lên và thích phiêu lưu, chọn “Du lịch núi”; nếu
//  không thích phiêu lưu, chọn “Du lịch biển”. Nếu ngân sách nhỏ hơn 5000, chọn “Khám phá địa phương”.
//  Nếu thời tiết xấu, luôn chọn “Hoãn kế hoạch”.
console.log(determineTravelPlan(true, 6000, true));   // Du lịch núi
console.log(determineTravelPlan(true, 4000, false));  // Khám phá địa phương
console.log(determineTravelPlan(false, 7000, true));  // Hoãn kế hoạch

function determineTravelPlan(isWeatherGood, budget, likesAdventure) {
    if (!isWeatherGood){
        return "Hoãn kế hoạch"
    } else if(budget >= 5000){
            return likesAdventure? "Du lịch núi":"Du lịch biển";
    }else {
        return "Khám phá điạ phương ";
    }
};
//de 3  
console.log(determineStudentCategory(92, 0.85)); // Xuất sắc
console.log(determineStudentCategory(77, 0.7));  // Giỏi
console.log(determineStudentCategory(65, 0.6));  // Khá
console.log(determineStudentCategory(58, 0.6));  // Trung bình
console.log(determineStudentCategory(70, 0.4));  // Cần cải thiện
function determineStudentCategory(score, attendanceRate) {
    if (attendanceRate < 0.5) {
        return "Cần cải thiện";
    }
    if (score >= 90) {
        return "Xuất sắc";
    }
    if (score >= 75 && attendanceRate >= 0.7) {
        return "Giỏi";
    }
    if (score >= 60 && attendanceRate >= 0.6) {
        return "Khá";
    }
    return "Trung bình";
}
//de 4
function hasAccessToWorkroom(isManager, hasAccessCard, passedSafetyTest) {
   if(isManager || hasAccessCard && passedSafetyTest){
       return true;
   } else {
    return false;
   }
};

// Sample usage
console.log(hasAccessToWorkroom(false, true, true));  // true
console.log(hasAccessToWorkroom(true, false, false)); // true
console.log(hasAccessToWorkroom(false, true, false)); // false