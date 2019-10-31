


var cha = document.getElementById("Charisma").value;
 
var Class = document.getElementById("Class").value;
var SubClass = document.getElementById("SubClass");
var Race = document.getElementById("Race").value;
var SubRace = document.getElementById("SubRace");


    for (let i = 0; i < 100; i++){
    SubClass.remove(0);
    SubRace.remove(0);
 }        
        
var opt = document.createElement("option");
var Knowledge="Knowledge";
opt.value = Knowledge;
opt.text = Knowledge;
SubClass.add(opt);
     var opt = document.createElement("option");
     var value="Life";
     opt.value = value;
     opt.text = value;
     SubClass.add(opt);
     var opt = document.createElement("option");
      value="Light";
      opt.value = value;
      opt.text = value;
      SubClass.add(opt);
      var opt = document.createElement("option");
       value="Nature";
      opt.value = value;
      opt.text = value;
      SubClass.add(opt);
      var opt = document.createElement("option");
       value="Tempest";
      opt.value = value;
      opt.text = value;
      SubClass.add(opt);
      var opt = document.createElement("option");
       value="Trickery";   
      opt.value = value;
      opt.text = value;
      SubClass.add(opt);
      var opt = document.createElement("option");
        value="War";
      opt.value = value;
      opt.text = value;
      SubClass.add(opt);
      var opt = document.createElement("option");

       value="Draconic Bloodline";
      opt.value = value;
      opt.text = value;
      SubClass.add(opt);
      var opt = document.createElement("option");
       value="Wild Magic";
      opt.value = value;
      opt.text = value;
      SubClass.add(opt);
      var opt = document.createElement("option");

        value="The Archfey";
      opt.value = value;
      opt.text = value;
      SubClass.add(opt);
      var opt = document.createElement("option");
       value="The Fiend";
      opt.value = value;
      opt.text = value;
      SubClass.add(opt);
      var opt = document.createElement("option");
       value="The Great Old One";
      opt.value = value;
      opt.text = value;
      SubClass.add(opt);
      var opt = document.createElement("option");

       value="Archery";  
      opt.value = value;
      opt.text = value;
      SubClass.add(opt);
      var opt = document.createElement("option");
        value="Defense";  
      opt.value = value;
      opt.text = value;
      SubClass.add(opt);
      var opt = document.createElement("option");
        value="Dueling";
      opt.value = value;
      opt.text = value;
      SubClass.add(opt);
      var opt = document.createElement("option");
        value="Great Weapon Fighting";
      opt.value = value;
      opt.text = value;
      SubClass.add(opt);
      var opt = document.createElement("option");
       value="Protection";
      opt.value = value;
      opt.text = value;
      SubClass.add(opt);
      var opt = document.createElement("option");
       value="Two-Weapon Fighting"; 
        opt.value = value;
        opt.text = value;
    SubClass.add(opt);

    
    var opt = document.createElement("option");
      value="Hill Dwarf";
      opt.value = value;
      opt.text = value;
      SubRace.add(opt);
      var opt = document.createElement("option");
      value="Mountain Dwarf";
     opt.value = value;
     opt.text = value;
     SubRace.add(opt);
     
     var opt = document.createElement("option");
     value="High Elf" ;
     opt.value = value;
     opt.text = value;
     SubRace.add(opt);
     var opt = document.createElement("option");
     value="Wood Elf";
     opt.value = value;
     opt.text = value;
     SubRace.add(opt);
     var opt = document.createElement("option");
     value="Dark Elf";
     opt.value = value;
     opt.text = value;
     SubRace.add(opt);

     var opt = document.createElement("option");
     value="Lightfoot";
     opt.value = value;
     opt.text = value;
     SubRace.add(opt);
     var opt = document.createElement("option");
     value="Stout";
     opt.value = value;
     opt.text = value;
     SubRace.add(opt);

     var opt = document.createElement("option");
     value="Black";
     opt.value = value;
     opt.text = value;
     SubRace.add(opt);
     var opt = document.createElement("option");
      value="Blue";
     opt.value = value;
     opt.text = value;
     SubRace.add(opt);
     var opt = document.createElement("option");
      value="Brass";
     opt.value = value;
     opt.text = value;
     SubRace.add(opt);
     var opt = document.createElement("option");
      value="Bronze";
     opt.value = value;
     opt.text = value;
     SubRace.add(opt);
     var opt = document.createElement("option");
      value="Copper";
     opt.value = value;
     opt.text = value;
     SubRace.add(opt);
     var opt = document.createElement("option");
      value="Gold";
     opt.value = value;
     opt.text = value;
     SubRace.add(opt);
     var opt = document.createElement("option");
      value="Green";
     opt.value = value;
     opt.text = value;
     SubRace.add(opt);
     var opt = document.createElement("option");
      value="Red";
     opt.value = value;
     opt.text = value;
     SubRace.add(opt);
     var opt = document.createElement("option");
      value="Silver";
     opt.value = value;
     opt.text = value;
     SubRace.add(opt);
     var opt = document.createElement("option");
      value="White";
     opt.value = value;
     opt.text = value;
     SubRace.add(opt);

     var opt = document.createElement("option");
      value="Rock Gnome";
     opt.value = value;
     opt.text = value;
     SubRace.add(opt);
     var opt = document.createElement("option");
      value="Forest Gnome";
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
    //Label2[i].style.visibility = "hidden";
}
