var news = document.getElementById("Conclusion");
news.innerHTML = "";

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