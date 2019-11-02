var  Info = document.getElementById("Info");
Info.innerHTML = "";

var FN = document.getElementById("FN").value; 
var LN = document.getElementById("LN").value; 

var str = document.getElementById("Strenght").value; 
var dex = document.getElementById("Dexterity").value; 
var con = document.getElementById("Constitution").value; 
var int = document.getElementById("Intelligence").value; 
var wis = document.getElementById("Wisdom").value; 
var cha = document.getElementById("Charisma").value; 

if (Race == "Dwarf") {
}
else if (Race == "Elf") {
}  
else if (Race == "Halfling") {
}  
else if(Race == "Human"){
}
else if (Race == "Dragonborn") {
}  
else if (Race == "Gnome") {
}
else if (Race == "Halfelf") {
}  
else if(Race == "Halforc"){
}
else if(Race == "Tiefling"){
}
else{}

var chart= document.getElementById("Chart");

var attribute = [str, dex, con, int, wis, cha];

for (let i = 0; i < 6; i++) {

  var y = attribute.shift();
if (y == "20") {
  attribute.push("5");
} else if (y == "19" || y =="18") {
  attribute.push("4");
}  else if (y == "17" || y =="16") {
  attribute.push("3");
}  else if (y == "15" || y =="14") {
  attribute.push("2");
}  else if (y == "13"|| y =="12") {
  attribute.push("1");
}  else if (y == "11"|| y =="10") {
  attribute.push("0");
}  else if (y == "9"|| y =="8") {
  attribute.push("-1");
}  else if (y == "7"|| y =="6") {
  attribute.push("-2");
}  else if (y == "5"|| y =="4") {
  attribute.push("-3");  
}  else if (y == "3"|| y =="2") {
  attribute.push("-2");
}  else if (y == "1" ) {
  attribute.push("-5");
} else {
  
}
if (i == 0) {
  var x =attribute.pop();
  attribute.push("Strenght Modifier:"+ x);
} else if(i == 1) {
  var x =attribute.pop();
  attribute.push("Dexterity Modifier:"+ x);
} else if(i == 2){
  var x =attribute.pop();
  attribute.push("Constitution Modifier:"+ x);
} else if(i == 3){
  var x =attribute.pop();
  attribute.push("Intelligence Modifier:"+ x);
} else if(i == 4){
  var x =attribute.pop();
  attribute.push("Wisdom Modifier:"+ x);
} else if (i == 5) {
  var x =attribute.pop();
  attribute.push("Charisma Modifier:"+ x);
} else {
  
}
}
chart.style.visibility="visible";

chart.innerHTML = attribute.join("<br>\n")

var Class = document.getElementById("Class").value;
var SubClass = document.getElementById("SubClass");
var SubClassvalue = document.getElementById("SubClass").value;
var Race = document.getElementById("Race").value;
var SubRace = document.getElementById("SubRace");
var SubRacevalue = document.getElementById("SubRace").value;





var news = document.getElementById("Conclusion");
news.style.visibility = "visible";
news.innerHTML = "Your name is "+FN + " "+LN+". <br>\n"  ;





    for (let i = 0; i < 100; i++){
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
    //Label2[i.style.visibility = "hidden";
}
