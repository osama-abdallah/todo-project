'use strict';

var yourName = prompt("What is your name?");

var yourAge = prompt('How old are you?');

var ageResult = (yourAge <= 0) ?
    alert('The age you entered is incorrect \nas its less than or equal to zero') : undefined;

var yourGender = prompt('Are you a male or female?');

if (yourGender.toLowerCase() == 'male') 
{
    var wantWelcome = confirm('Would you like to skip the welcoming message?');

    if (wantWelcome) { undefined; }

    else {
        alert(`welcome Mr. ${yourName}`);
    }
}

else if (yourGender.toLowerCase() == 'female') 
{

    var wantWelcome = confirm('Would you like to skip the welcoming message?');

    if (wantWelcome) { undefined }
    else {
        alert(`welcome Ms. ${yourName}`);
    }
}
else 
{
    var wantWelcome = confirm('Would you like to skip the welcoming message?');

    if (wantWelcome) { undefined }
    else {
        alert(`welcome ${yourName}`);
    }

}
// while (yourGender!=="male" && yourGender!=="female") {
//    yourGender= prompt("are you male or female?");
// }
let question1 = askQuestion("Are you excited to see the Todo list?");

let question2 = askQuestion("Do you know Osama?");

let question3 = askQuestion("Do you think you Osama's Todo list is going to be useful?");

function askQuestion(question) 
{

    let answer = prompt(question);

    if (answer == "yes" || answer == "no") {
        return answer;
    } else if (answer == "") {
        return "Invalid";
    }

}

let answerArr = [yourName, yourAge, yourGender, wantWelcome, question1, question2, question3];

for(let i = 0 ; i<answerArr.length ; i++){
    console.log(answerArr[i]);
}