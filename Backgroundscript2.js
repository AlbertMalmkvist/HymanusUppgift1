var news = document.getElementById("Conclusion");
news.style.visibility = "hidden";
news.innerHTML = "";
var chart = document.getElementById("Chart");
chart.style.visibility = "hidden";
chart.innerHTML = "";

var Prof1 = document.getElementById("Prof1");
var Prof2 = document.getElementById("Prof2");
var Prof3 = document.getElementById("Prof3");
var Prof4 = document.getElementById("Prof4");
var Lang1 = document.getElementById("Lang1");
var Lang2 = document.getElementById("Lang2");
var Lang3 = document.getElementById("Lang3");
for (let i = 0; i < 100; i++){
    Prof1.remove(0);
    Prof2.remove(0);
    Prof3.remove(0);
    Prof4.remove(0);
 }        

function Switch() { 
    var FN = document.getElementById("FN").value;
    if (FN == "") {
        
    }
    else{ 
        var LN = document.getElementById("LN").value;
        if (LN == "") {
            
        } else {
    var Source = document.createElement("script");
    Source.src = "Support.js";
    Source.innerHTML = null;
    Source.id = "Source";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").appendChild(Source);
        }
    }
}

var Label2 = document.getElementsByName("Label2");
for (let i = 0, length = Label2.length; i < length; i++) {
    //Label2[i].style.visibility = "hidden";
}
var Label1 = document.getElementsByName("Label1");
var PAlingement = document.getElementsByName("PAlingement");
for (let i = 0, length = Label1.length; i < length; i++) {
    Label1[i].style.visibility = "visible";
}
for (let i = 0, length = PAlingement.length; i < length; i++) {
    PAlingement[i].style.visibility = "visible";
}