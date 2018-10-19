function startDate() {
    var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var ending = "th";
    if(d.getDate() == 1) {
        ending = "st";
    }else if(d.getDate() == 2) {
        ending = "nd";
    }else if (d.getDate() == 3) {
        ending = "rd";
    }

    document.getElementById('date').innerHTML = days[d.getDay()] + ", " + d.getDate() + ending + " " + months[d.getMonth()] + " " + d.getFullYear();
    var t = setTimeout(startTime, 500);
}
document.addEventListener('DOMContentLoaded', function() {
    startDate();
});