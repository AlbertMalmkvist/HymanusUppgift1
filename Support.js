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
var SubClass = document.getElementById("SubClass");
    
SubClass.style.visibility = "visible";
if (Class == "Cleric") {
    var Domain = document.getElementById("Domain");
    SubClass.innerHTML = "Domain";
    Domain.style.visibility = "visible";
}
else if (Class == "Warlock") {
    var Patron = document.getElementById("Patron");
    SubClass.innerHTML = "Patron";
    Patron.style.visibility = "visible";
}
else if (Class == "Sorcerrer") {
    var Origin = document.getElementById("Origin");
    SubClass.innerHTML = "Sorcerous Origin";
    origin.style.visibility = "visible";
}
else if (Class == "Fighter") {
    var Fight = document.getElementById("Fight");
    SubClass.innerHTML = "Fighting Style";
    Fight.style.visibility = "visible";
} else {
}  

var Race = document.getElementById("Race").value;
var SubRace = document.getElementById("SubRace"); var Dwarf = document.getElementById("SubDwarf"); var Elf = document.getElementById("SubElf"); var Dragon = document.getElementById("SubDragon"); var Gnome = document.getElementById("SubGnome");

 