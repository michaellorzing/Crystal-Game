$(document).ready(function()  {

var wins=0;
var losses=0;
var userTotal=0;
var crysVal=[0,0,0,0];

var computerPick=0;
var gameRunning=false;

var $computerPick= $("#computerPick");
var $crys1=$("#crys1");
var $crys2=$("#crys2");
var $crys3=$("#crys3");
var $crys4=$("#crys4");
var $crystal=$(".crystal");
var $wins=$("#wins");
var $losses=$("#losses");
var $userTotal=$("#userTotal");
var $newGameBtn=$("#newGameBtn");

function crysNumPick(){
  return Math.floor(Math.random()*12);
};

function computerNumPick() {
  return Math.floor(Math.random()*(120-19));
};

function assignCrys(){
  for(var i=0; i < crysVal.length; i++){
    crysVal[i]=crysNumPick();
  }

  $crys1.val(crysVal[0]);
  $crys2.val(crysVal[1]);
  $crys3.val(crysVal[2]);
  $crys4.val(crysVal[3]);
}



});

