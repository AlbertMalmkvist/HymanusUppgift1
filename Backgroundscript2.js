var Label2 = document.getElementsByName("Label2");
for (let i = 0, length = Label2.length; i < length; i++) {
    Label2[i].style.visibility = "hidden";
}
function Switch() {
    for (let i = 0, length = Label1.length; i < length; i++) {
        Label1[i].style.visibility = "hidden";
    }
    for (let i = 0, length = PAlingement.length; i < length; i++) {
        PAlingement[i].style.visibility = "hidden";
    }
    for (let i = 0, length = Label2.length; i < length; i++) {
        Label2[i].style.visibility = "visible";
    }
    var SubClass = document.getElementByid("SubClass"); var Domain = document.getElementByid("Domain"); var Origin = document.getElementByid("Origin"); var Patron = document.getElementByid("Patron"); var Fight = document.getElementByid("Fight");
    var SubRace = document.getElementByid("SubRace"); var Dwarf = document.getElementByid("SubDwarf"); var Elf = document.getElementByid("SubElf"); var Dragon = document.getElementByid("SubDragon"); var Gnome = document.getElementByid("SubGnome");

    var Class = document.getElementByid("Class").value;
    if (ChClass = "Cleric") {
        SubClass.innerHTML = "Domain";
        Patron.style.visibility = "hidden";
        origin.style.visibility = "hidden";
        Fight.style.visibility = "hidden";
    }
    else if (ChClass = "Warlock") {
        SubClass.innerHTML = "Patron";
        Fight.style.visibility = "hidden";
        origin.style.visibility = "hidden";
        Domain.style.visibility = "hidden";
    }
    else if (ChClass = "Sorcerrer") {
        SubClass.innerHTML = "Sorcerous Origin";
        Domain.style.visibility = "hidden";
        Fight.style.visibility = "hidden";
        Patron.style.visibility = "hidden";
    }
    else if (ChClass = "Fighter") {
        SubClass.innerHTML = "Fighting Style";
        Domain.style.visibility = "hidden";
        Patron.style.visibility = "hidden";
        origin.style.visibility = "hidden";
    } else {
        origin.style.visibility = "hidden";
        Domain.style.visibility = "hidden";
        Fight.style.visibility = "hidden";
        Patron.style.visibility = "hidden";
        SubClass.style.visibility = "hidden";
    }

}
function Steep2() {
    for (let i = 0, length = Label2.length; i < length; i++) {
        Label2[i].style.visibility = "hidden";
    }
    //var FN = document.getElementByid("FN").value; var LN = document.getElementByid("LN").value;
    //var Race = document.getElementByid("Race").value; var SRace = document.getElementByid("SRace").value;
    //var Alignment = document.getElementsByName("Alignment").value;

    //var SubClass = document.getElementByid("SubClass").value; var Domain = document.getElementByid("Domain").value; var Origin = document.getElementByid("Origin").value; var Patron = document.getElementByid("Patron").value; var Fight = document.getElementByid("Fight").value;
    //var Back = document.getElementByid("Back").value; var Background = document.getElementByid("Background").value;

    //var Strenght = document.getElementByid("Strenght").value;
    //var Dexterity = document.getElementByid("Dexterity").value;
    //var Constitution = document.getElementByid("Constitution").value;
    //var intelligence = document.getElementByid("intelligence").value;
    //var Wisdom = document.getElementByid("Wisdom").value;
    //var Charisma = document.getElementByid("Charisma").value;

    //document.getElementByid("Conclusion").innerHTML = "Your name is "+FN+" "+LN+".<br> Your Class is";
}
function Steep3() {
    for (let i = 0, length = Label1.length; i < length; i++) {
        Label1[i].style.visibility = "visible";
    }
    //document.getElementByid("Conclusion").innerHTML = "";
}
