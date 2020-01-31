var news = document.getElementById("Conclusion");
news.style.visibility = "hidden";
news.innerHTML = "";
var chart = document.getElementById("Chart");
chart.style.visibility = "hidden";
chart.innerHTML = "";

var P1= document.getElementById("P1");
var P2= document.getElementById("P2");
P2.style.visibility = "visible";
P1.style.visibility = "hidden";

var Class = document.getElementById("Class").value;
var SubClass = document.getElementById("SubClass");
var SubClassvalue = document.getElementById("SubClass").value;
var Race = document.getElementById("Race").value;
var SubRace = document.getElementById("SubRace");
var SubRacevalue = document.getElementById("SubRace").value;

var Prof1 = document.getElementById("Prof1");
var Prof2 = document.getElementById("Prof2");
var Prof3 = document.getElementById("Prof3");
var Prof4 = document.getElementById("Prof4");
var Prof5 = document.getElementById("Prof5");
var Prof6 = document.getElementById("Prof6");


for (let i = 0; i < 100; i++){
 Prof1.remove(0);
 Prof2.remove(0);
 Prof3.remove(0);
 Prof4.remove(0);
 
 SubClass.remove(0);

 SubRace.remove(0);
} 
 
 var opt = document.createElement("option");
function CreOpt(value){
 opt.value = value;
opt.text = value;
}

let races = ["Knowledge","Life","Light","Nature","Tempest","Trickery","War","Draconic Bloodline","Wild Magic","The Archfey","The Fiend","The Great Old One","Archery","Defense","Dueling","Great Weapon Fighting","Protection","Two-Weapon Fighting"];
for (let i = 0; i<races.length; 1++){
CreOpt(races[i]);
SubClass.add(opt);
}
var value="Hill Dwarf";
CreOpt(value);
  SubRace.add(opt);

var value="Mountain Dwarf";
CreOpt(value);
 SubRace.add(opt);


var value="High Elf" ;
CreOpt(value);
 SubRace.add(opt);

var value="Wood Elf";
CreOpt(value);
 SubRace.add(opt);

var value="Dark Elf";
CreOpt(value);
 SubRace.add(opt);


var value="Lightfoot";
CreOpt(value);
 SubRace.add(opt);

var value="Stout";
CreOpt(value);
 SubRace.add(opt);


var value="Black";
CreOpt(value);
 SubRace.add(opt);

var value="Blue";
CreOpt(value);
 SubRace.add(opt);

var value="Brass";
CreOpt(value);
 SubRace.add(opt);

var value="Bronze";
CreOpt(value);
 SubRace.add(opt);

var value="Copper";
CreOpt(value);
 SubRace.add(opt);

var value="Gold";
CreOpt(value);
 SubRace.add(opt);

var value="Green";
CreOpt(value);
 SubRace.add(opt);

var value="Red";
CreOpt(value);
 SubRace.add(opt);

var value="Silver";
CreOpt(value);
 SubRace.add(opt);

var value="White";
CreOpt(value);
 SubRace.add(opt);


var value="Rock Gnome";
CreOpt(value);
 SubRace.add(opt);

var value="Forest Gnome";
CreOpt(value);
 SubRace.add(opt);

function Switch() { 
 var FN = document.getElementById("FN").value;
 if (FN == "") {
 
 }
 else{ 
 var LN = document.getElementById("LN").value;
 if (LN == "") {
 
 } else {
 var Source = document.createElement("script");
 Source.src = "Support.js";
 Source.innerHTML = null;
 Source.id = "Source";
 document.getElementById("output").innerHTML = "";
 document.getElementById("output").appendChild(Source);
 }
 }
}

var Label2 = document.getElementsByName("Label2");
for (let i = 0, length = Label2.length; i < length; i++) {
 Label2[i].style.visibility = "hidden";
}
var Label1 = document.getElementsByName("Label1");
var PAlingement = document.getElementsByName("PAlingement");
for (let i = 0, length = Label1.length; i < length; i++) {
 Label1[i].style.visibility = "visible";
}
for (let i = 0, length = PAlingement.length; i < length; i++) {
 PAlingement[i].style.visibility = "visible";
}