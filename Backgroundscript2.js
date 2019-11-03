var news = document.getElementById("Conclusion");
news.style.visibility = "hidden";
news.innerHTML = "";
var chart = document.getElementById("Chart");
chart.style.visibility = "hidden";
chart.innerHTML = "";

var P1= document.getElementById("P1");
var P2= document.getElementById("P2");
P2.style.visibility = "visible";
P1.style.visibility = "hidden";

var Class = document.getElementById("Class").value;
var SubClass = document.getElementById("SubClass");
var SubClassvalue = document.getElementById("SubClass").value;
var Race = document.getElementById("Race").value;
var SubRace = document.getElementById("SubRace");
var SubRacevalue = document.getElementById("SubRace").value;

var Prof1 = document.getElementById("Prof1");
var Prof2 = document.getElementById("Prof2");
var Prof3 = document.getElementById("Prof3");
var Prof4 = document.getElementById("Prof4");
var Prof5 = document.getElementById("Prof5");
var Prof6 = document.getElementById("Prof6");


for (let i = 0; i < 100; i++){
    Prof1.remove(0);
    Prof2.remove(0);
    Prof3.remove(0);
    Prof4.remove(0);
    Prof5.remove(0);
    Prof6.remove(0);
    
 SubClass.remove(0);

 SubRace.remove(0);
}        
     
var opt = document.createElement("option");
var value="Knowledge";
opt.value = value;
opt.text = value;
SubClass.add(opt);
    
var opt = document.createElement("option");
var      value="Life";
  opt.value = value;
  opt.text = value;
  SubClass.add(opt);
    
var opt = document.createElement("option");
var      value="Light";
   opt.value = value;
   opt.text = value;
   SubClass.add(opt);

var opt = document.createElement("option");
var       value="Nature";
   opt.value = value;
   opt.text = value;
   SubClass.add(opt);

var opt = document.createElement("option");
var      value="Tempest";
   opt.value = value;
   opt.text = value;
   SubClass.add(opt);

var opt = document.createElement("option");
var      value="Trickery";   
   opt.value = value;
   opt.text = value;
   SubClass.add(opt);

var opt = document.createElement("option");
var      value="War";
   opt.value = value;
   opt.text = value;
   SubClass.add(opt);
   
    
var opt = document.createElement("option");
var       value="Draconic Bloodline";
   opt.value = value;
   opt.text = value;
   SubClass.add(opt);

var opt = document.createElement("option");
var      value="Wild Magic";
   opt.value = value;
   opt.text = value;
   SubClass.add(opt);
   
    
var opt = document.createElement("option");
var        value="The Archfey";
   opt.value = value;
   opt.text = value;
   SubClass.add(opt);

var opt = document.createElement("option");
var      value="The Fiend";
   opt.value = value;
   opt.text = value;
   SubClass.add(opt);

var opt = document.createElement("option");
var      value="The Great Old One";
   opt.value = value;
   opt.text = value;
   SubClass.add(opt);
   
    
var opt = document.createElement("option");
var       value="Archery";  
   opt.value = value;
   opt.text = value;
   SubClass.add(opt);

var opt = document.createElement("option");
var      value="Defense";  
   opt.value = value;
   opt.text = value;
   SubClass.add(opt);

var opt = document.createElement("option");
var      value="Dueling";
   opt.value = value;
   opt.text = value;
   SubClass.add(opt);

var opt = document.createElement("option");
var      value="Great Weapon Fighting";
   opt.value = value;
   opt.text = value;
   SubClass.add(opt);

var opt = document.createElement("option");
var      value="Protection";
   opt.value = value;
   opt.text = value;
   SubClass.add(opt);

var opt = document.createElement("option");
var      value="Two-Weapon Fighting"; 
     opt.value = value;
     opt.text = value;
 SubClass.add(opt);

 
        
var opt = document.createElement("option");
var    value="Hill Dwarf";
   opt.value = value;
   opt.text = value;
   SubRace.add(opt);

var opt = document.createElement("option");
var      value="Mountain Dwarf";
  opt.value = value;
  opt.text = value;
  SubRace.add(opt);


var opt = document.createElement("option");
var     value="High Elf" ;
  opt.value = value;
  opt.text = value;
  SubRace.add(opt);

var opt = document.createElement("option");
var     value="Wood Elf";
  opt.value = value;
  opt.text = value;
  SubRace.add(opt);

var opt = document.createElement("option");
var     value="Dark Elf";
  opt.value = value;
  opt.text = value;
  SubRace.add(opt);


var opt = document.createElement("option");
var     value="Lightfoot";
  opt.value = value;
  opt.text = value;
  SubRace.add(opt);

var opt = document.createElement("option");
var     value="Stout";
  opt.value = value;
  opt.text = value;
  SubRace.add(opt);


var opt = document.createElement("option");
var     value="Black";
  opt.value = value;
  opt.text = value;
  SubRace.add(opt);

var opt = document.createElement("option");
var     value="Blue";
  opt.value = value;
  opt.text = value;
  SubRace.add(opt);

var opt = document.createElement("option");
var     value="Brass";
  opt.value = value;
  opt.text = value;
  SubRace.add(opt);

var opt = document.createElement("option");
var     value="Bronze";
  opt.value = value;
  opt.text = value;
  SubRace.add(opt);

var opt = document.createElement("option");
var     value="Copper";
  opt.value = value;
  opt.text = value;
  SubRace.add(opt);

var opt = document.createElement("option");
var     value="Gold";
  opt.value = value;
  opt.text = value;
  SubRace.add(opt);

var opt = document.createElement("option");
var     value="Green";
  opt.value = value;
  opt.text = value;
  SubRace.add(opt);

var opt = document.createElement("option");
var     value="Red";
  opt.value = value;
  opt.text = value;
  SubRace.add(opt);

var opt = document.createElement("option");
var     value="Silver";
  opt.value = value;
  opt.text = value;
  SubRace.add(opt);

var opt = document.createElement("option");
var     value="White";
  opt.value = value;
  opt.text = value;
  SubRace.add(opt);


var opt = document.createElement("option");
var     value="Rock Gnome";
  opt.value = value;
  opt.text = value;
  SubRace.add(opt);

var opt = document.createElement("option");
var     value="Forest Gnome";
  opt.value = value;
  opt.text = value;
  SubRace.add(opt);

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