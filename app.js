'use strict';

var yourName = prompt("What is your name?");

var yourAge = prompt('How old are you?');

var ageResult = (yourAge <= 0) ?
alert('The age you entered is incorrect \nas its less than or equal to zero') : undefined;

var yourGender = prompt('Are you a male or female?');

let answerArr = [yourName, yourAge, yourGender, wantWelcome,];



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
    let answerArr2 = [];

    let question1 = "Are you excited to see the Todo list?";
    
    function askQuestion1 (question) 
{

    let answer = prompt(question);

    if (answer == "yes" || answer == "no") {
        return answerArr2.push(answer);
    } else if (answer == "") {
        return answerArr2.push("Invalid");
    }

}

let question2 = "Do you know Osama?";

function askQuestion2 (question) 
{

    let answer = prompt(question);

    if (answer == "yes" || answer == "no") {
        return answerArr2.push(answer);
    } else if (answer == "") {
        return answerArr2.push("Invalid");
    }

}

let question3 = "Do you think you Osama's Todo list is going to be useful?";

function askQuestion3 (question) 
{

    let answer = prompt(question);

    if (answer == "yes" || answer == "no") {
        return answerArr2.push(answer);
    } else if (answer == "") {
        return answerArr2.push("Invalid");
    }


}
askQuestion1(question1);
askQuestion2(question2);
askQuestion3(question3);

// function askQuestion(question) 
// {

//     let answer = prompt(question);

//     if (answer == "yes" || answer == "no") {
//         return answer;
//     } else if (answer == "") {
//         return "Invalid";
//     }

// }


for(let i = 0 ; i<answerArr.length ; i++){
    console.log(answerArr[i]);
}
for(let i = 0 ; i<answerArr2.length ; i++){
    console.log(answerArr2[i]);
}