function bmicalcu (weight, height){
// var bmi = weight/(height*height);
var bmi = weight/ Math.pow(height,2);
return Math.round(bmi);
}
 var calcu = bmicalcu(70,2);
 console.log(calcu);
