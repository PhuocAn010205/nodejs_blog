// Viết hàm canAttendTechSeminar(age, isITEmployee, hasRegistered)
//  kiểm tra xem một người có đủ điều kiện
//  tham gia hội thảo công nghệ. Điều kiện bao gồm:
//  tuổi trên 18, là nhân viên IT, và đã đăng ký online.
console.log(canAttendTechSeminar(25, true, true)); // true
console.log(canAttendTechSeminar(20, false, true)); // false
function canAttendTechSeminar(age, isITEmployee, hasRegistered){
    if(age>=18 && isITEmployee && hasRegistered){
       return true;
    }else 
    {
        return false;
    }
}