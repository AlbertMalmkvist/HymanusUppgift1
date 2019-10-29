function Switch() { 
    var Source = document.createElement("script");
    Source.src = "Support.js";
    Source.innerHTML = null;
    Source.id = "Source";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").appendChild(Source);
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
//function Steep2() {
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
//}
