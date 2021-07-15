<p id="my-favorite-team"></p>
<input id="yourTeam" type="text">
<button onclick="yourFavoriteTeam()">Submit Team</button>

<script>



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
</script>