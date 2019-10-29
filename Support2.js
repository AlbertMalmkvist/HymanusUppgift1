
function Switch() { 
    var Source = document.createElement("script");
    Source.src = "Backgroundscript2.js";
    Source.innerHTML = null;
    Source.id = "Source";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").appendChild(Source);
}
var Label1 = document.getElementsByName("Label1");
var PAlingement = document.getElementsByName("PAlingement");
for (let i = 0, length = Label2.length; i < length; i++) {
    Label2[i].style.visibility = "hidden";
}
function Steep3() {
    for (let i = 0, length = Label1.length; i < length; i++) {
        Label1[i].style.visibility = "visible";
    }
    //document.getElementByid("Conclusion").innerHTML = "";
}
