


var cha = document.getElementById("Charisma").value;
 
var Class = document.getElementById("Class").value;
var SubClass = document.getElementById("SubClass");

if (Class == "Cleric") {
    for (let i = 0; i < 10; i++) {
    SubClass.remove(0);         
        
}}
else if (Class == "Warlock") {
    for (let i = 0; i < 10; i++) {
    SubClass.remove(0);         
        
}}
else if (Class == "Sorcerrer") {
    for (let i = 0; i < 10; i++) {
    SubClass.remove(0);         
        
}}
else if (Class == "Fighter") {
    for (let i = 0; i < 10; i++) {
    SubClass.remove(0);         
        
}}
      else {
}  
     var opt = document.createElement("option");
     var Life="Life";
     opt.value = Life;
     opt.text = Life;
     SubClass.add(opt);
     var opt = document.createElement("option");
     var Light="Light";
      opt.value = Light;
      opt.text = Light;
      SubClass.add(opt);
      var opt = document.createElement("option");
      var Nature="Nature";
      opt.value = Nature;
      opt.text = Nature;
      SubClass.add(opt);
      var opt = document.createElement("option");
      var Tempest="Tempest";
      opt.value = Tempest;
      opt.text = Tempest;
      SubClass.add(opt);
      var opt = document.createElement("option");
      var Trickery="Trickery";   
      opt.value = Trickery;
      opt.text = Trickery;
      SubClass.add(opt);
      var opt = document.createElement("option");
      var  War="War";
      opt.value = War;
      opt.text = War;
      SubClass.add(opt);
      var opt = document.createElement("option");

      var Draconic="Draconic Bloodline";
      opt.value = Draconic;
      opt.text = Draconic;
      SubClass.add(opt);
      var opt = document.createElement("option");
      var  Wild="Wild Magic";
      opt.value = Wild;
      opt.text = Wild;
      SubClass.add(opt);
      var opt = document.createElement("option");

      var  Archfey="The Archfey";
      opt.value = Archfey;
      opt.text = Archfey;
      SubClass.add(opt);
      var opt = document.createElement("option");
      var Fiend="The Fiend";
      opt.value = Fiend;
      opt.text = Fiend;
      SubClass.add(opt);
      var opt = document.createElement("option");
      var Old="The Great Old One";
      opt.value = Old;
      opt.text = Old;
      SubClass.add(opt);
      var opt = document.createElement("option");

      var Archery="Archery";  
      opt.value = Archery;
      opt.text = Archery;
      SubClass.add(opt);
      var opt = document.createElement("option");
      var  Defense="Defense";  
      opt.value = Defense;
      opt.text = Defense;
      SubClass.add(opt);
      var opt = document.createElement("option");
      var  Dueling="Dueling";
      opt.value = Dueling;
      opt.text = Dueling;
      SubClass.add(opt);
      var opt = document.createElement("option");
      var  Great="Great Weapon Fighting";
      opt.value = Great;
      opt.text = Great;
      SubClass.add(opt);
      var opt = document.createElement("option");
      var Protection="Protection";
      opt.value = Protection;
      opt.text = Protection;
      SubClass.add(opt);
      var opt = document.createElement("option");
      var TwoWeapon="Two-Weapon Fighting"; 
        opt.value = TwoWeapon;
        opt.text = TwoWeapon;
    SubClass.add(opt);
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
