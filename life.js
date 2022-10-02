var userAge = prompt("Enter your age");
var remainlife = function (age) {

    var yearremain = 70 - age;
    var days = yearremain * 365;
    var weeks = yearremain * 52;
    var months = yearremain * 12;
    var total = alert(`you have ${days} days,  ${weeks} weeks, ${months} months, and ${yearremain} years, remaining in your 70 years life.`);
    return total;

};

remainlife(userAge);