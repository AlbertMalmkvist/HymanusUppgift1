var Label2 = document.getElementsByName("Label2");
for (let i = 0, length = Label2.length; i < length; i++) {
    Label2[i].style.visibility = "hidden";
}
function Switch() { 
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
    var Race = document.getElementByid("Race").value;
    var SubRace = document.getElementByid("SubRace"); var Dwarf = document.getElementByid("SubDwarf"); var Elf = document.getElementByid("SubElf"); var Dragon = document.getElementByid("SubDragon"); var Gnome = document.getElementByid("SubGnome");


}
function Steep2() {
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
