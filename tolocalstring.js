//toLocalString() = methods that returns a string with a language sensitive representation of this number
//number.toLocaleString(local, {options});
//'Locale' specify that language (undifined = you'll use default set in browser)
//'options' is object with formatting options
//let's make a number UNCOMMENT CODE BELOW

/*

let myNum = 1234.567;
//re-assign myNumb to locale
//myNum = myNum.toLocaleString("en-US"); //US
//myNum = myNum.toLocaleString("hi-IN"); //Hindi
myNum = myNum.toLocaleString("de-DE"); //Germany
console.log(myNum);

*/

//let's format some currency we will set that with "options" instead of "locale"
//i'll pick US english
//to add some options we will use curly braces
//the "currency" is the currency unit UNCOMMENT CODE BELOW

//myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"})

//format the number to percent
let myNum = 10;
myNum = myNum.toLocaleString(undefined, {style: "percent"})
console.log(myNum);