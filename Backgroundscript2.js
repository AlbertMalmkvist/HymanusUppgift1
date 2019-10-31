var news = document.getElementById("Conclusion");
news.innerHTML = "";

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
    //var FN = document.getElementById("FN").value; var LN = document.getElementById("LN").value;
    //var Race = document.getElementById("Race").value; var SRace = document.getElementById("SRace").value;
    //var Alignment = document.getElementsByName("Alignment").value;

    //var SubClass = document.getElementById("SubClass").value; var Domain = document.getElementById("Domain").value; var Origin = document.getElementById("Origin").value; var Patron = document.getElementById("Patron").value; var Fight = document.getElementById("Fight").value;
    //var Back = document.getElementById("Back").value; var Background = document.getElementById("Background").value;

    //var Strenght = document.getElementById("Strenght").value;
    //var Dexterity = document.getElementById("Dexterity").value;
    //var Constitution = document.getElementById("Constitution").value;
    //var intelligence = document.getElementById("intelligence").value;
    //var Wisdom = document.getElementById("Wisdom").value;
    //var Charisma = document.getElementById("Charisma").value;

    //document.getElementById("Conclusion").innerHTML = "Your name is "+FN+" "+LN+".<br> Your Class is";
//}
