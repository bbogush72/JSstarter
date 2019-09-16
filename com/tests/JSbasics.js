
var str = "I'm a \"double quoted\"  string inside \"double quotes\"   ";
console.log(str);

// single quotes
var href = '<a href="http://google.com" target="_blank">Link</a>a> ';
console.log(href);

/* Code output
\' single quote
\" double quote
\\ backslash
\n new line
\r carriage return
\t tab
\b backspace
\f from feed
 */

var str2 = "FirstLine\n \t \\SecondLine \nThirdLine";
console.log(str2);

// concatenate with plus operator

var first = "1- first sentence" ;
var second = "2- second sentence";

var concat = first + second; // or directly print
console.log(first+" "+second); // the other way ==> console.log(concat);

//another concat
var concat2 = "3- try this concat " + " then try this one";
console.log(concat2);

//last concat examples
var mystr = "4- First Sentence. ";
console.log(mystr+="5- This is the 2nd sentence.");

console.log(first+" "+mystr+" "+ concat2);

var adjective = " great!";
var myPet = "Snail mail is";
var combined = myPet+=adjective; console.log(combined);


// length of a string
var firstname = "Snail Mail";
console.log("length of firstname is: "+ firstname.length);
console.log(firstname[0]);

//fix initial letter
var fixme = "jello world!";
fixme='Hello World';
console.log(fixme);

//find nth position
console.log("3rd letter of Hello is : "+fixme[3]);

//find last char
console.log("last letter of Hello World: "+   fixme[fixme.length-1]);
//find second to last letter
console.log("second to last letter of Hello World: "+ fixme[fixme.length-2] );

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result+="The " + myAdjective+" "+ myNoun +" "+ myVerb + " to the kitchen " + myAdverb;
    return result;
}
console.log(wordBlanks("cat","Small","runs","everyday"));
console.log(wordBlanks(" the car", " requires", " change of oil"," semiannually"));

//arrays

var myarray = ["Snail", 20];
console.log(myarray);

//2d array
var array2D = [["SnailMail", 2], ["MysteryMail", 4]];
console.log(array2D);

console.log(array2D[0,0]);
console.log(array2D[0,1]);

//toString method
console.log(array2D.toString());