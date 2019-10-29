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
if (ChClass = "Cleric") {
    var Domain = document.getElementByid("Domain");
    SubClass.innerHTML = "Domain";
    Domain.style.visibility = "visible";
}
else if (ChClass = "Warlock") {
    var Patron = document.getElementByid("Patron");
    SubClass.innerHTML = "Patron";
    Patron.style.visibility = "visible";
}
else if (ChClass = "Sorcerrer") {
    var Origin = document.getElementByid("Origin");
    SubClass.innerHTML = "Sorcerous Origin";
    origin.style.visibility = "visible";
}
else if (ChClass = "Fighter") {
    var Fight = document.getElementByid("Fight");
    SubClass.innerHTML = "Fighting Style";
    Fight.style.visibility = "visible";
} else {
}   