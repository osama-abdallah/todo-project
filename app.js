var yourName = prompt("What is your name?");

var yourAge = prompt('How old are you?');

var ageResult = (yourAge <=0) ? 
alert('The age you entered is incorrect \nas its less than or equal to zero'): undefined;

var yourGender = prompt('Are you a male or female?');

if (yourGender.toLowerCase() == 'male') {
   var wantWelcome = confirm('Would you like to skip the welcoming message?');
    
   if(wantWelcome) {undefined;}

        else {
            alert(`welcome Mr. ${yourName}`);
    }
}

else if (yourGender.toLowerCase() == 'female') {
    
    var wantWelcome = confirm('Would you like to skip the welcoming message?');
    
   if(wantWelcome) {undefined}
        else {
            alert(`welcome Ms. ${yourName}`);
   }
   }
else { 
    var wantWelcome = confirm('Would you like to skip the welcoming message?');
    
if(wantWelcome) {undefined}
     else {
         alert(`welcome ${yourName}`);
        }
    
}