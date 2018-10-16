function startDate() {
    var today2 = new Date();
    var D2 = today2.getDay();
    var d2 = today2.getDate()
    var M2 = today2.getMonth();
    var Y2 = today2.getFullYear();
    D2 = checkDate(D2);
    d2 = checkDate(d2);
    M2 = checkDate(M2);
    Y2 = checkDate(Y2);
    if(d2 = 0) {
        d2 = "Monday";
    }else if(d2 = 1){
        d2 = "Tuesday";
    }else if(d2 = 1){
        d2 = "Wednesday";
    }else if(d2 = 1){
        d2 = "Thursday";
    }else if(d2 = 1){
        d2 = "Friday";
    }else if(d2 = 1){
        d2 = "Saturday";
    }else {
        d2 = "Sunday"
    }
    document.getElementById('date').innerHTML = d2 + " " + M2;
    var t = setTimeout(startTime, 500);
}
function checkDate(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
document.addEventListener('DOMContentLoaded', function() {
    startTime();
});