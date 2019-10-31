     var Life="Life"
     var Light="Light" 
     var Nature="Nature"  
     var Tempest="Tempest"   
     var Trickery="Trickery"    
     var War="War"

     var Draconic="Draconic"
     var Wild="Wild"

     var Archfey="Archfey"
     var Fiend="Fiend"
     var Old="Old One"

     var Archery="Archery"   
     var Defense="Defense"   
     var Dueling="Dueling"   
     var Great="Great"
     var Protection="Protection"
     var Weapon="Two-Weapon" 

var opt = document.createElement("option");


var cha = document.getElementById("Charisma").value;
 
var Class = document.getElementById("Class").value;
var SubClass = document.getElementById("SubClass");

if (Class == "Cleric") {
}
else if (Class == "Warlock") {
}
else if (Class == "Sorcerrer") {
}
else if (Class == "Fighter") {
        opt.value = i;
        opt.text = i;
        SubClass.appendChild(opt);
}
      else {
}  
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
