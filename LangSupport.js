  
var Label2 = document.getElementsByName("Label2");
for (let i = 0, length = Label2.length; i < length; i++) {
    //Label2[i].style.visibility = "hidden";
}
    var Prof1 = document.getElementById("Prof1").value;
    var Prof2 = document.getElementById("Prof2").value;
    var Prof3 = document.getElementById("Prof3").value;
    var Prof4 = document.getElementById("Prof4").value;
    var Prof5 = document.getElementById("Prof5").value;
    var Prof6 = document.getElementById("Prof6").value;

   
var  Lang1 = document.getElementById("Lang1");
var  Lang2 = document.getElementById("Lang2");
var  Lang3 = document.getElementById("Lang3");
var  Lang4 = document.getElementById("Lang4");
var  Lang5 = document.getElementById("Lang5");

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

 if (Race == "Dwarf") {
     RLang1 = "Common";
     RLang2 = "Dwarfish";
     var RaceCom ="You know the Langueges "+RLang1+" and "+RLang2+".";
 }
 else if (Race == "Elf") {
    RLang1 = "Common";
    RLang2 = "Elvish";
    RProf = "Perception";
    var RaceCom ="You know the Langueges "+RLang1+" and "+RLang2+".";
if (SubRaceval = "High Elf") {
    Lang1.style.visibility = "visible";
}
 }  
 else if (Race == "Halfling") {
    RLang1 = "Common";
    RLang2 = "Halfling";
    var RaceCom ="You know the Langueges "+RLang1+" and "+RLang2+".";
 }  
 else if(Race == "Human"){
    RLang1 = "Common";
    Lang1.style.visibility = "visible";
    var RaceCom ="You know the Langueges "+RLang1+".";
 }
 else if (Race == "Dragonborn") {
    RLang1 = "Common";
    RLang2 = "Draconic";
    var RaceCom ="You know the Langueges "+RLang1+" and "+RLang2+".";
 }  
 else if (Race == "Gnome") {
    RLang1 = "Common";
    RLang2 = "Gnomish";
    var RaceCom ="You know the Langueges "+RLang1+" and "+RLang2+".";
 }
 else if (Race == "Halfelf") {
    Prof5.style.visibility = "visible";
    Prof6.style.visibility = "visible";  
    RLang1 = "Common";
    Lang1.style.visibility = "visible";
    var RaceCom ="You know the Languege "+RLang1+".";

 }  
 else if(Race == "Halforc"){
    RLang1 = "Common";
    RLang2 = "Orc";
    RProf = "Intimidation";
    var RaceCom ="You know the Langueges "+RLang1+" and "+RLang2+".";
 }
 else if(Race == "Tiefling"){
    RLang1 = "Common";
    RLang2 = "Infernal";
    var RaceCom ="You know the Langueges "+RLang1+" and "+RLang2+".";
 }
 else{}

var  Background = document.getElementById("Background").value;
var  Lang = document.getElementById("Lang");
if (Race="Halfelf") {
    
} else {
    
}

var Class = document.getElementById("Class").value;
var SubClass = document.getElementById("SubClass");
var SubClassval = document.getElementById("SubClass").value;
var SubClassLabel = document.getElementById("CL");

SubClass.style.visibility = "hidden";
SubClassLabel.style.visibility = "hidden";

if (Class == "Cleric" && SubClassval == "Knowledge") {
    SCB1 = document.getElementById("SubClassBonus1");
    SCB2 = document.getElementById("SubClassBonus2");
    Lang2.style.visibility = "visible";
    Lang3.style.visibility = "visible";
    SCB1.style.visibility = "visible";
    SCB2.style.visibility = "visible";

    
} else if (Class == "Rogue") {
    
} else {
    
}
function Switch() { 

    
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