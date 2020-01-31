var chart = document.getElementById("Chart");
chart.style.visibility = "hidden";
chart.innerHTML = "";

var P1= document.getElementById("P1");
var P2= document.getElementById("P2");
P2.style.visibility = "visible";
P1.style.visibility = "hidden";

var Class = document.getElementById("Class");
var SubClass = document.getElementById("SubClass");
var SubClassvalue = document.getElementById("SubClass").value;
var Race = document.getElementById("Race");
var SubRace = document.getElementById("SubRace");
var SubRacevalue = document.getElementById("SubRace").value;
var  Background = document.getElementById("Background");

var Prof1 = document.getElementById("Prof1");
var Prof2 = document.getElementById("Prof2");
var Prof3 = document.getElementById("Prof3");
var Prof4 = document.getElementById("Prof4");
var Prof5 = document.getElementById("Prof5");
var Prof6 = document.getElementById("Prof6");

var Lang1 = document.getElementById("Lang1");
var Lang2 = document.getElementById("Lang2");
var Lang3 = document.getElementById("Lang3");
var Lang4 = document.getElementById("Lang4");
var Lang5 = document.getElementById("Lang5");

var IncAtt1 = document.getElementById("IncAtt1");
var IncAtt2 = document.getElementById("IncAtt2");

for (let i = 0; i < 100; i++){
 Prof1.remove(0);
 Prof2.remove(0);
 Prof3.remove(0);
 Prof4.remove(0);
 Prof5.remove(0);
 Prof6.remove(0);
 Class.remove(0);
 SubClass.remove(0);
Race.remove(0);
 SubRace.remove(0);
 IncAtt1.remove(0);
 IncAtt2.remove(0);
 Lang1.remove(0);
 Lang2.remove(0);
 Lang3.remove(0);
 Lang4.remove(0);
 Lang5.remove(0);
} 

function CreOpt(value){
 opt.value = value;
 opt.text = value;
}

let Att = ["Strenght","Dexterity","Constitution","Intelligence","Wisdom","Charisma"];
let Attv = ["str","dex","con","int","wis","cha"];
for (let i = 0; i < Att.length; i++){
  var opt = document.createElement("option");
opt.value = Attv[i];
opt.text = Att[i];
  IncAtt1.add(opt);
  var opt = document.createElement("option");
opt.value = Attv[i];
opt.text = Att[i];
  IncAtt2.add(opt);
}

let Lang = ["Common","Dwarfish","Elvish","Gaint","Gnomish","Goblin","Halfling","Orc","Abyssal","Celestial","Deep Speech","Draconic","Infernal","Primordial","Sylvan","Undercommon"];
for (let i = 0; i < Lang.length; i++){
  var opt = document.createElement("option");
CreOpt(Lang[i]);
  Lang1.add(opt);
  var opt = document.createElement("option");
CreOpt(Lang[i]);
  Lang2.add(opt);
  var opt = document.createElement("option");
CreOpt(Lang[i]);
  Lang3.add(opt);
  var opt = document.createElement("option");
CreOpt(Lang[i]);
  Lang4.add(opt);
  var opt = document.createElement("option");
CreOpt(Lang[i]);
  Lang5.add(opt);
}

let classes = ["Barbarian","Bard","Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rogue","Sorcerrer","Warlock","Wizard"];
for (let i = 0; i < classes.length; i++){
  var opt = document.createElement("option");
  CreOpt(classes[i]);
  Class.add(opt);
}
let Bak = ["Acolyte","Charlatan","Criminal","Entertainer","Folk Hero","Guild Artisan","Hermit","Noble","Outlander","Sage","Sailor","Soldier","Urchin"];
for (let i = 0; i < Bak.length; i++){
  var opt = document.createElement("option");
  CreOpt(Bak[i]);
  Background.add(opt);
}
let Skill = ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History","Insight","Intimidation","Investigation","Medicine","Nature","Perception", "Peformance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"];
for (let i = 0; i < Skill.length; i++){
  var opt = document.createElement("option");
  CreOpt(Skill[i]);
  Prof5.add(opt);
  var opt = document.createElement("option");
  CreOpt(Skill[i]);
  Prof6.add(opt);
}

let racest = ["Dwarf","Elf","Halfling","Human","Dragonborn","Gnome","Half-elf","Half-orc","Tiefling"];
let racesv = ["Dwarf","Elf","Halfling","Human","Dragonborn","Gnome","Halfelf","Halforc","Tiefling"];
for (let i = 0; i < racest.length; i++){
  var opt = document.createElement("option");
  opt.value = racest[i];
  opt.text = racesv[i];
  Race.add(opt);
}


let subclasses = ["Knowledge","Life","Light","Nature","Tempest","Trickery","War","Draconic Bloodline","Wild Magic","The Archfey","The Fiend","The Great Old One","Archery","Defense","Dueling","Great Weapon Fighting","Protection","Two-Weapon Fighting"];
for (var i = 0; i < subclasses.length; i++){
  var opt = document.createElement("option");
CreOpt(subclasses[i]);
SubClass.add(opt);
}

let subraces = ["Hill Dwarf","Mountain Dwarf","High Elf","Wood Elf","Dark Elf","Lightfoot","Stout","Black","Blue","Brass","Bronze","Copper","Gold","Green","Red","Silver","White","Rock Gnome","Forest Gnome"];
for (var i = 0; i<subraces.length; i++){
  var opt = document.createElement("option");
CreOpt(subraces[i]);
SubRace.add(opt);
}

function Switch() { 
 var FN = document.getElementById("FN").value;
 if (FN == ",") {
 
 }
 else{ 
 var LN = document.getElementById("LN").value;
 if (LN == ",") {
 
 } else {
 var Source = document.createElement("script");
 Source.src = "Support.js";
 Source.innerHTML = null;
 Source.id = "Source";
 document.getElementById("output").innerHTML = ",";
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