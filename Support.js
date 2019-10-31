var i = 0;
function Switch() { 
    var Source = document.createElement("script");
    Source.src = "Support2.js";
    Source.innerHTML = null;
    Source.id = "Source";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").appendChild(Source);
}
var Label1 = document.getElementsByName("Label1");
var PAlingement = document.getElementsByName("PAlingement");
for (let i = 0, length = Label1.length; i < length; i++) {
    Label1[i].style.visibility = "hidden";
}
for (let i = 0, length = PAlingement.length; i < length; i++) {
    PAlingement[i].style.visibility = "hidden";
}

var Class = document.getElementById("Class").value;
var SubClassLabel = document.getElementById("SubClassLabel");
var SubClass = document.getElementById("SubClass");
    
SubClass.style.visibility = "visible";
SubClassLabel.style.visibility = "visible";
    var numbersC = SubClass.length;
if (Class == "Cleric") {
    SubClassLabel.innerHTML = "Domain";
    for (let i = 0; i < numbersC; i++) {
        if (i >= 6) {
    SubClass.remove(7);         
        }
    }
}
else if (Class == "Warlock") {
    SubClassLabel.innerHTML = "Patron";
    for (let i = 0; i < numbersC; i++) {
        if (i <= 8) {
    SubClass.remove(0);         
        }
        else if (i >= 11) {   
    SubClass.remove(3);  
        }
    }
}
else if (Class == "Sorcerrer") {
    SubClassLabel.innerHTML = "Sorcerous Origin";
    for (let i = 0; i < numbersC; i++) {
        if (i <= 6) {
    SubClass.remove(0);         
        }
        else if (i >= 8) {   
    SubClass.remove(2);  
        }
    }
}
else if (Class == "Fighter") {
    SubClassLabel.innerHTML = "Fighting Style";
    for (let i = 0; i < numbersC; i++) {
        if (i <= 11) {
    SubClass.remove(0);         
        }
    }
}
      else {
}  

var Race = document.getElementById("Race").value;
var SubRace = document.getElementById("SubRace");
var SubRaceLabel = document.getElementById("SubDwarf"); 
 if (Race == "Dwarf") {
     SubRace.style.visibility = "visible";
     var numbersR = SubRace.length;
     for (let i = 0; i < numbersR; i++) {
         if (i => 2) {
     SubRace.remove(2);         
         }
     }
 }  else{

 }
 