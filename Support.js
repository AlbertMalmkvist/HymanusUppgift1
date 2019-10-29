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

var Class = document.getElementByid("Class").value;
var SubClass = document.getElementByid("SubClass");
for (let index = 0; index < array.length; index++) {
    
if (Class == "Cleric") {
    var Domain = document.getElementByid("Domain");
    SubClass.innerHTML = "Domain";
    Domain.style.visibility = "visible";
}
else if (Class == "Warlock") {
    var Patron = document.getElementByid("Patron");
    SubClass.innerHTML = "Patron";
    Patron.style.visibility = "visible";
}
else if (Class == "Sorcerrer") {
    var Origin = document.getElementByid("Origin");
    SubClass.innerHTML = "Sorcerous Origin";
    origin.style.visibility = "visible";
}
else if (Class == "Fighter") {
    var Fight = document.getElementByid("Fight");
    SubClass.innerHTML = "Fighting Style";
    Fight.style.visibility = "visible";
} else {
}  

var Race = document.getElementByid("Race").value;
var SubRace = document.getElementByid("SubRace"); var Dwarf = document.getElementByid("SubDwarf"); var Elf = document.getElementByid("SubElf"); var Dragon = document.getElementByid("SubDragon"); var Gnome = document.getElementByid("SubGnome");

} 