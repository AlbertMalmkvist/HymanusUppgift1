var  Info = document.getElementById("Info");
Info.innerHTML = "";
var P1= document.getElementById("P1");
var P2= document.getElementById("P2");
P1.style.visibility = "visible";
P2.style.visibility = "hidden";

var FN = document.getElementById("FN").value; 
var LN = document.getElementById("LN").value; 


var IncAtt1 = document.getElementById("IncAtt1").value; 
var IncAtt2 = document.getElementById("IncAtt2").value; 

var str = document.getElementById("Strenght").value; 
var dex = document.getElementById("Dexterity").value; 
var con = document.getElementById("Constitution").value; 
var int = document.getElementById("Intelligence").value; 
var wis = document.getElementById("Wisdom").value; 
var cha = document.getElementById("Charisma").value; 

var Lang1 = document.getElementById("Lang1").value; 
var Lang2 = document.getElementById("Lang2").value; 
var Lang3 = document.getElementById("Lang3").value; 
var Lang4 = document.getElementById("Lang4").value; 
var Lang5 = document.getElementById("Lang5").value; 

var ALang1 = "";
var ALang2 = "";
var ALang3 = "";
var ALang4 = "";
var ALang5 = "";

var Prof1 = document.getElementById("Prof1").value; 
var Prof2 = document.getElementById("Prof2").value; 
var Prof3 = document.getElementById("Prof3").value; 
var Prof4 = document.getElementById("Prof4").value;  
var Prof5 = document.getElementById("Prof5").value; 
var Prof6 = document.getElementById("Prof6").value;

var AProf1 = "";
var AProf2 = "";
var AProf3 = "";
var AProf4 = "";
var AProf5 = "";
var AProf6 = "";

var Expert1 = document.getElementById("SubClassBonus1").value;
var Expert2 = document.getElementById("SubClassBonus2").value;

var AExpert1 = "";
var AExpert2 = "";

var ExpertText = "";

var LN = document.getElementById("LN").value; 

var LN = document.getElementById("LN").value; 


var Aling = "";
var AlingmentText = "";
var PAlingement = document.getElementsByName("PAlingement");
for (let i = 0, length = PAlingement.length; i < length; i++) {
 if (PAlingement[i].checked ) {
   Aling = PAlingement[i].value;
   AlingmentText = "Your Alingment is "+Aling+". <br>\n";
 }
}

var Class = document.getElementById("Class").value;
var SubClass = document.getElementById("SubClass");
var SubClassvalue = document.getElementById("SubClass").value;

var ClassText = "";

if (Class == "Barbarian") {
  ClassText = "Your class is " +Class+". <br>\n";
  AProf1 =Prof1 + ", ";
  AProf2 =Prof2 + ", ";
}
else if (Class == "Bard") {
  ClassText = "Your class is " +Class+". <br>\n";
  AProf1 =Prof1 + ", ";
  AProf2 =Prof2 + ", ";
  AProf3 =Prof3 + ", ";
}  
else if (Class == "Cleric") {
  ClassText = "Your class is " +Class + " who's domain is the "+SubClassvalue+" domain. <br>\n";
  AProf1 =Prof1 + ", ";
  AProf2 =Prof2 + ", ";
  if (SubClassvalue == "Knowledge") {
    AExpert2 = Expert2;
    AExpert1 = Expert1;
    ExpertText ="You got expertise in "+ AExpert1 + " and " + AExpert2+". <br>\n";

    ALang2 = Lang2 +", ";  
    ALang3 = Lang3 +", "; 
}
}  
else if(Class == "Druid"){
  ClassText = "Your class is " +Class+". <br>\n";
  AProf1 =Prof1 + ", ";
  AProf2 =Prof2 + ", ";
}
else if (Class == "Fighter") {
  ClassText = "Your class is " +Class + " who's fighting style is "+SubClassvalue+" fighting style. <br>\n";
  AProf1 =Prof1 + ", ";
  AProf2 =Prof2 + ", ";
}  
else if (Class == "Monk") {
  ClassText = "Your class is " +Class+". <br>\n";
  AProf1 =Prof1 + ", ";
  AProf2 =Prof2 + ", ";
}
else if (Class == "Paladin") {
  ClassText = "Your class is " +Class+". <br>\n";
  AProf1 =Prof1 + ", ";
  AProf2 =Prof2 + ", ";
}  
else if(Class == "Ranger"){
  ClassText = "Your class is " +Class+". <br>\n";
  AProf1 =Prof1 + ", ";
  AProf2 =Prof2 + ", ";
  AProf3 =Prof3 + ", ";
}
else if(Class == "Rogue"){
  ClassText = "Your class is " +Class+". <br>\n";
  AExpert1 = Expert1;
  ExpertText ="You got expertise in "+ AExpert1 +". <br>\n";
  AProf1 =Prof1 + ", ";
  AProf2 =Prof2 + ", ";
  AProf3 =Prof3 + ", ";
  AProf4 =Prof4 + ", ";
}
else if(Class == "Sorcerer"){
  ClassText = "Your class is " +Class + " who's sorcerous origin comes from the "+SubClassvalue+" inside you. <br>\n";
  AProf1 =Prof1 + ", ";
  AProf2 =Prof2 + ", ";
}
else if(Class == "Warlock"){
  ClassText = "Your class is " +Class + " who's patron is "+SubClassvalue+". <br>\n";
  AProf1 =Prof1 + ", ";
  AProf2 =Prof2 + ", ";
}
else if(Class == "Wizard"){
  ClassText = "Your class is " +Class +". <br>\n";
  AProf1 =Prof1 + ", ";
  AProf2 =Prof2 + ", ";
}
else{}

var Race = document.getElementById("Race").value;
var SubRace = document.getElementById("SubRace");
var SubRacevalue = document.getElementById("SubRace").value;

var RaceText="";


var RLang1 = "";
var RLang2 = "";
var RProf = "";

if (Race == "Dwarf") {
  RaceText = "Your a " +SubRacevalue+ " which is a subrace of the "+Race +" race. <br>\n";
  RLang1 = "Common";
  RLang2 = "Dwarfish";
  con ++;
  con ++;
  if (SubRacevalue = "Hill Dwarf") {
    wis++;
  }
  if (SubRacevalue = "Mountain Dwarf") {
    str++;
    str++;

  }
}
else if (Race == "Elf") {
  RaceText = "Your a " +SubRacevalue+ " which is a subrace of the "+Race +" race. <br>\n";
  RLang1 = "Common";
  RLang2 = "Elvish";
  RProf = "Perception, ";
  dex++;
  dex++;
  if (SubRacevalue = "Dark Elf") {
    cha++;
  }
  if (SubRacevalue = "Wood Elf") {
    wis++;
  }
  if (SubRaceval == "High Elf") {
    ALang1 = Lang1 +", ";    
    int++;
  }
}  
else if (Race == "Halfling") {
  RaceText = "Your a " +SubRacevalue+ " which is a subrace of the "+Race +" race. <br>\n";
  RLang1 = "Common";
  RLang2 = "Halfling";
  dex++;
  dex++;
  if (SubRacevalue = "Lightfoot") {
    cha++;
  }
  if (SubRacevalue = "Stout") {
    con++;
  }
}  
else if(Race == "Human"){
  RaceText = "Your race is " +Race +". <br>\n";
  RLang1 = "Common";
  RLang2 = Lang1;
  str++;
  dex++;
  con++;
  int++;
  wis++;
  cha++;
}
else if (Race == "Dragonborn") {
  RaceText = "Your a " +SubRacevalue+ " which is a subrace of the "+Race +" race. <br>\n";
  RLang1 = "Common";
  RLang2 = "Draconic";
  str++;
  str++;
  cha++;
}  
else if (Race == "Gnome") {
  RaceText = "Your a " +SubRacevalue+ " which is a subrace of the "+Race +" race. <br>\n";
  RLang1 = "Common";
  RLang2 = "Gnomish";
  int++;
  int++;
  if (SubRacevalue = "Forest Gnome") {
    dex++;
  }
  if (SubRacevalue = "Rock Gnome") {
    con++;
  }
}
else if (Race == "Halfelf") {
  RaceText = "Your race is " +Race +". <br>\n";
  RLang1 = "Common";
  RLang2 = Lang1;
  cha++
  cha++
  if (IncAtt1 == "str" || IncAtt2 == "str") {
    str++;
      }
  if (IncAtt1 == "dex" || IncAtt2 == "dex") {
    dex++;
      }
  if (IncAtt1 == "con" || IncAtt2 == "con") {
    con++;
      }
  if (IncAtt1 == "int" || IncAtt2 == "int") {
    int++;
      }
  if (IncAtt1 == "wis" || IncAtt2 == "wis") {
    wis++;
      }
  if (IncAtt1 == "cha" || IncAtt2 == "cha") {
    cha++;
      }
}  
else if(Race == "Halforc"){
  RaceText = "Your race is " +Race +". <br>\n";
  RLang1 = "Common";
  RLang2 = "Orc";
  RProf = "Intimidation, "
  str++;
  str++;
  con++;
}
else if(Race == "Tiefling"){
  int++;
  cha++;
  cha++;
  RaceText = "Your race is " +Race +". <br>\n";
  RLang1 = "Common";
  RLang2 = "Infernal";
}
else{}



var  Background = document.getElementById("Background").value;

var BackText = "";

if (Background == "Acolyte") {
    BackText = "Your background is that of a "+Background+". <br>\n";
    DProf1="Insight";
    DProf2="Religion";
    ALang4 = Lang4 + ", ";
    ALang5 = Lang5 + ", ";
    
}  else if (Background == "Charlatan") {
  BackText = "Your background is that of a "+Background+". <br>\n";
    DProf1="Deception";
    DProf2="Sleight of Hand";
} else if (Background == "Criminal") {
  BackText = "Your background is that of a "+Background+". <br>\n";
    DProf1="Deception";
    DProf2="Stealth";
} else if (Background == "Entertainer") {
  BackText = "Your background is that of a "+Background+". <br>\n";
    DProf1="Acrobatics";
    DProf2="Peformance";
} else if (Background == "Folk Hero") {
  BackText = "Your background is that of a "+Background+". <br>\n";
    DProf1="Animal Handling";
    DProf2="Survival";
} else if (Background == "Guild Artisan") {
  BackText = "Your background is that of a "+Background+". <br>\n";
    DProf1="Insight";
    DProf2="Persuasion";
    ALang4 = Lang4 + ", ";
    
} else if (Background == "Hermit") {
  BackText = "Your background is that of a "+Background+". <br>\n";
    DProf1="Medicine";
    DProf2="Religion";
    ALang4 = Lang4 + ", ";
    
} else if (Background == "Noble") {
  BackText = "Your background is that of a "+Background+". <br>\n";
    DProf1="History";
    DProf2="Persuasion";
    ALang4 = Lang4 + ", ";
    
} else if (Background == "Outlander") {
  BackText = "Your background is that of a "+Background+". <br>\n";
    DProf1="Athletics";
    DProf2="Survival";
    ALang4 = Lang4 + ", ";
} else if (Background == "Sage") {
  BackText = "Your background is that of a "+Background+". <br>\n";
    DProf1="Arcana";
    DProf2="History";
    ALang4 = Lang4 + ", ";
    ALang5 = Lang5 + ", ";
} else if (Background == "Sailor") {
  BackText = "Your background is that of a "+Background+". <br>\n";
    DProf1="Athletics";
    DProf2="Perception";
} else if (Background == "Soldier") {
  BackText = "Your background is that of a "+Background+". <br>\n";
    DProf1="Athletics";
    DProf2="Intimidation";
} else if (Background == "Urchin") {
  BackText = "Your background is that of a "+Background+". <br>\n";
    DProf1="Sleight of Hand";
    DProf2="Stealth";
}else{}

var chart= document.getElementById("Chart");

var attribute = [str, dex, con, int, wis, cha];

for (let i = 0; i < 6; i++) {

  var y = attribute.shift();
if (y == "20") {
  attribute.push("5");
} else if (y == "19" || y =="18") {
  attribute.push("4");
}  else if (y == "17" || y =="16") {
  attribute.push("3");
}  else if (y == "15" || y =="14") {
  attribute.push("2");
}  else if (y == "13"|| y =="12") {
  attribute.push("1");
}  else if (y == "11"|| y =="10") {
  attribute.push("0");
}  else if (y == "9"|| y =="8") {
  attribute.push("-1");
}  else if (y == "7"|| y =="6") {
  attribute.push("-2");
}  else if (y == "5"|| y =="4") {
  attribute.push("-3");  
}  else if (y == "3"|| y =="2") {
  attribute.push("-4");
}  else if (y == "1" ) {
  attribute.push("-5");
} else {
  
}
if (i == 0) {
  var x =attribute.pop();
  attribute.push("Strenght Modifier:"+ x);
} else if(i == 1) {
  var x =attribute.pop();
  attribute.push("Dexterity Modifier:"+ x);
} else if(i == 2){
  var x =attribute.pop();
  attribute.push("Constitution Modifier:"+ x);
} else if(i == 3){
  var x =attribute.pop();
  attribute.push("Intelligence Modifier:"+ x);
} else if(i == 4){
  var x =attribute.pop();
  attribute.push("Wisdom Modifier:"+ x);
} else if (i == 5) {
  var x =attribute.pop();
  attribute.push("Charisma Modifier:"+ x);
} else {
  
}
}
chart.style.visibility="visible";
chart.innerHTML = attribute.join("<br>\n");
var AllLang =  ALang1 +ALang2 +ALang3 +ALang4 +ALang5 +RLang1 + " and " + RLang2+". <br>\n";
var ALLProf = AProf1+AProf2+AProf3+AProf4+AProf5+AProf6+DProf1+" and "+DProf2+". <br>\n";

var news = document.getElementById("Conclusion");
news.style.visibility = "visible";
news.innerHTML = "Your name is "+FN + " "+LN+". <br>\n"  +RaceText+ ClassText + AlingmentText +BackText+"You know the languages " +AllLang+"Your proficient in " +ALLProf+ExpertText;






function Reset() { 
    var Source = document.createElement("script");
    Source.src = "Backgroundscript2.js";
    Source.innerHTML = null;
    Source.id = "Source";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").appendChild(Source);
}
var Label1 = document.getElementsByName("Label1");
var PAlingement = document.getElementsByName("PAlingement");
for (let i = 0, length = Label2.length; i < length; i++) {
    Label2[i].style.visibility = "hidden";
}
