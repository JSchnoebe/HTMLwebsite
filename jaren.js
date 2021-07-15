console.log('js file connected');



function myFunctionYes() {
  alert("Congrats! We're friends." );
}
function myFunctionNo() {
  alert("We're not friends." );
}

function yourFavoriteTeam() {
var yourFavoriteTeam =
document.getElementById("yourTeam").value;
var text;

  // If the team is "Cubs"
  if(yourFavoriteTeam === "Cubs"){
  text = "Go Cubs!";

  //If the team is anything else
} else {
  text = "That team is Terrible!";
}
document.getElementById("yourTeam").innerHTML = text;
}

//use prompt and confirm methods
function questionSix(){
console.log("question six function works");
var userTeam = document.getElementById('yourTeam');
console.log(userTeam.value);
var userResponse = userTeam.value.toLowerCase();

if(userResponse === 'cubs'){
var userGame = confirm('They are the best, click ok to win your prize.');
console.log(userGame);

if(userGame === true){
console.log('We are playing the game.');


var numTeams = 2;
var otherTeams = 'Tell me what other teams you like.';

while(numTeams > 0){
var userInput = prompt(otherTeams + 'You have ' + numTeams + ' turns left.');
if(userInput !== ""){
  alert('Not a fan..');
  numTeams = numTeams - 1;
}



}//closes while loop


}//closes if user game is true


} else {
alert('No that is not the right team.');

}//closes main if statement

alert('Thanks for playing my game.');

}//closes question six function