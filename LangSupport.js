
   
function Switch() { 
    var Prof1 = document.getElementById("Prof1").value;
    var Prof2 = document.getElementById("Prof2").value;
    var Prof3 = document.getElementById("Prof3").value;
    var Prof4 = document.getElementById("Prof4").value;
    if (Class=="Rogue") {
        if (Prof1 == Prof2 || Prof1 == Prof3 || Prof2 == Prof3 || Prof1 == Prof4 || Prof2 == Prof4 || Prof3 == Prof4) {
            
        } 
        else {
            
        var Source = document.createElement("script");
        Source.src = "Support2.js";
        Source.innerHTML = null;
        Source.id = "Source";
        document.getElementById("output").innerHTML = "";
        document.getElementById("output").appendChild(Source);        
        }
    } else {
        if (Prof1 == Prof2 || Prof1 ==Prof3 || Prof2 == Prof3) {
            
        } 
        else {
            
        var Source = document.createElement("script");
        Source.src = "Support2.js";
        Source.innerHTML = null;
        Source.id = "Source";
        document.getElementById("output").innerHTML = "";
        document.getElementById("output").appendChild(Source);        
        }
    }
        
    }

    var Prof1 = document.getElementById("Prof1");
    var Prof2 = document.getElementById("Prof2");
    var Prof3 = document.getElementById("Prof3");
    var Prof4 = document.getElementById("Prof4");
    var Prof5 = document.getElementById("Prof5");
    var Prof6 = document.getElementById("Prof6");

    var ExtraProf = 0;
    if (Class=="Barbarian") {
        ExtraProf ++;
        ExtraProf ++;
    }
    else if(Class=="bard"){
        ExtraProf ++;
        ExtraProf ++;
        ExtraProf ++;
    }
else if (Class == "Cleric") {
    ExtraProf ++;
    ExtraProf ++;
}
else if(Class=="Druid"){
    ExtraProf ++;
    ExtraProf ++;
}
else if(Class == "Fighter") {
    ExtraProf ++;
    ExtraProf ++;
}
else if(Class=="Monk"){
    ExtraProf ++;
    ExtraProf ++;
}
else if(Class=="Paladin"){
    ExtraProf ++;
    ExtraProf ++;
}
else if(Class=="Ranger"){
    ExtraProf ++;
    ExtraProf ++;
    ExtraProf ++;
}
else if(Class == "Rogue"){
    ExtraProf ++;
    ExtraProf ++;
    ExtraProf ++;
    ExtraProf ++;
}
else if (Class == "Sorcerrer") {
    ExtraProf ++;
    ExtraProf ++;
}
else if (Class == "Warlock") {
    ExtraProf ++;
    ExtraProf ++;
}
else if(Class=="Wizard"){
    ExtraProf ++;
    ExtraProf ++;
}
          else {
    }  
var Race = document.getElementById("Race").value;
var SubRace = document.getElementById("SubRace");
var SubRaceval = document.getElementById("SubRace").value;
var SubRaceLabel = document.getElementById("SRace"); 

SubRace.style.visibility = "hidden";
SubRaceLabel.style.visibility = "hidden";

var RLang1 = "";
var RLang2 = "";
var RProf1 = "";
var RProf2 = "";
var TLang = "";
var TProf = "";
var ExtraLang= 0;

 if (Race == "Dwarf") {
     RLang1 = "Common";
     RLang2 = "Dwarfish";
     var RaceCom =". You know the Langueges "+RLang1+" and "+RLang2+"."
 }
 else if (Race == "Elf") {
    RLang1 = "Common";
    RLang2 = "Elvish";
    var RaceCom =". You know the Langueges "+RLang1+" and "+RLang2+"."
if (SubRaceval = "High Elf") {
    ExtraLang ++;
}
 }  
 else if (Race == "Halfling") {
    RLang1 = "Common";
    RLang2 = "Halfling";
    var RaceCom =". You know the Langueges "+RLang1+" and "+RLang2+"."
 }  
 else if(Race == "Human"){
    RLang1 = "Common";
    ExtraLang ++;
    var RaceCom =". You know the Langueges "+RLang1+"."
 }
 else if (Race == "Dragonborn") {
    RLang1 = "Common";
    RLang2 = "Draconic";
    var RaceCom =". You know the Langueges "+RLang1+" and "+RLang2+"."
 }  
 else if (Race == "Gnome") {
    RLang1 = "Common";
    RLang2 = "Gnomish";
    var RaceCom =". You know the Langueges "+RLang1+" and "+RLang2+"."
 }
 else if (Race == "Halfelf") {
    RLang1 = "Common";
    ExtraLang ++;
    ExtraProf ++;
    ExtraProf ++;
    var RaceCom =". You know the Languege "+RLang1+".";

 }  
 else if(Race == "Halforc"){
    RLang1 = "Common";
    RLang2 = "Orc";
    RProf = "Intimidation";
    var RaceCom =" and "+RProf+" from your race. You know the Langueges "+RLang1+" and "+RLang2+"."
 }
 else if(Race == "Tiefling"){
    RLang1 = "Common";
    RLang2 = "Infernal";
    var RaceCom =". You know the Langueges "+RLang1+" and "+RLang2+"."
 }
 else{}

var  Background = document.getElementById("Background").value;
var  Lang1 = document.getElementById("Lang1");
var  Lang2 = document.getElementById("Lang2");
var  Lang3 = document.getElementById("Lang3");
var  Lang4 = document.getElementById("Lang4");
var  Lang5 = document.getElementById("Lang5");
var  Lang = document.getElementById("Lang");
var  Info = document.getElementById("Info");

var DProf1="";
var DProf2="";

if (ExtraProf=6) {
    
} else if (condition) {
    
} else if (condition) {
    
}else if (condition) {
    
}else if (condition) {
    
}else if (condition) {
    
}
Info.innerHTML = "You got proficiencies in "+DProf1+" and "+DProf2+" from your background"+RaceCom;
