$(document).ready(function()  {

var wins=0;
var losses=0;
var userTotal=0;
var computerPick=0;
var crys1=0;
var crys2=0;
var crys3=-0;
var crys4=0;

//set what a new game looks like. assign values to each crystal and the computers selection randomly. assign values to the crystal via the id in their associated spans.
$("#newGameBtn").on("click", newGame());

function newGame() {

userTotal=0;

crys1= Math.floor(Math.random() * 12)+1;
crys2= Math.floor(Math.random() * 12)+1;
crys3= Math.floor(Math.random() * 12)+1;
crys4= Math.floor(Math.random() * 12)+1;

console.log(crys1);
console.log(crys2);
console.log(crys3);
console.log(crys4);

computerPick= Math.floor(Math.random() * 120-19);
$("#computerPick").text(computerPick);
}

//add the values of each crystal when clicked and determine win conitions

$("#crys1").click(function(){
  userTotal= userTotal + crys1;
  $("#userTotal").text(" " + userTotal);
  if(userTotal === computerPick){
    alert("You beat the wizard. Rad!")
  wins++}
  else(userTotal > computerPick) {
    alert("Lame! The wizard wins this time. Try again");
  losses++}
  
});

$("#crys2").click(function(){
  userTotal= userTotal + crys2;
  $("#userTotal").text(" " + userTotal);
  if(userTotal === computerPick){
    alert("You beat the wizard. Rad!")
    wins++}
  else(userTotal > computerPick) {
    alert("Lame! The wizard wins this time. Try again");
    losses++}
});

$("#crys3").click(function(){
  userTotal= userTotal + crys3;
  $("#userTotal").text(" " + userTotal);
  if(userTotal === computerPick){
    alert("You beat the wizard. Rad!")
  wins++}
  else(userTotal > computerPick) {
    alert("Lame! The wizard wins this time. Try again");
  losses++}
});

$("#crys4").click(function(){
  userTotal= userTotal + crys4;
  $("#userTotal").text(" " + userTotal);
  if(userTotal === computerPick){
    alert("You beat the wizard. Rad!")
  wins++}
  else(userTotal > computerPick) {
    alert("Lame! The wizard wins this time. Try again");
  losses++}
});





});

