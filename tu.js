console.log(isHealthy(70, 37)); // true
console.log(isHealthy(55, 37)); // false
function isHealthy (heartRate,temperature) {
    if(heartRate >=60 && heartRate<=100 && temperature >=36.5 && temperature<=37.5){
      console.log("Người này có sức khỏe bình thường")
    }else {
        console.log("Sức khỏe không ổn định")
    }
};