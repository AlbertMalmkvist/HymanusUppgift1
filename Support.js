var Label1 = document.getElementsByName("Label1");
var PAlingement = document.getElementsByName("PAlingement");
for (let i = 0, length = Label1.length; i < length; i++) {
    Label1[i].style.visibility = "hidden";
}
for (let i = 0, length = PAlingement.length; i < length; i++) {
    PAlingement[i].style.visibility = "hidden";
}

var Class = document.getElementById("Class").value;
var SubClassLabel = document.getElementById("SubClassLabel");
var SubClass = document.getElementById("SubClass");

        var opt = document.createElement("option");
    
SubClass.style.visibility = "hidden";
SubClassLabel.style.visibility = "hidden";
    var numbersC = SubClass.length;


    var Prof1 = document.getElementById("Prof1");
    var Prof2 = document.getElementById("Prof2");
    var Prof3 = document.getElementById("Prof3");
    var Prof4 = document.getElementById("Prof4");

    if (Class=="Barbarian") {
        Prof1.style.visibility="visible";
        Prof2.style.visibility="visible";

    var opt = document.createElement("option");
    var value="Animal Handling";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
    var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt); 
    
        var opt = document.createElement("option");
     value="Athletics";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);  

        var opt = document.createElement("option");
    value="Intimidation";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
     value="Nature";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
     value="Perception";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
     value="Survival";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);     
    }
    else if(Class=="bard"){
        Prof1.style.visibility="visible";
        Prof2.style.visibility="visible";
        Prof3.style.visibility="visible";

        var opt = document.createElement("option");
        var value="Acrobatics";
        opt.value = value;
        opt.text = value;
        Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof3.add(opt);

        var opt = document.createElement("option");
        var value="Animal Handling";
        opt.value = value;
        opt.text = value;
        Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof3.add(opt);

        var opt = document.createElement("option");
        var value="Arcana";
        opt.value = value;
        opt.text = value;
        Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof3.add(opt);
    
        var opt = document.createElement("option");
        var value="Athletics";
        opt.value = value;
        opt.text = value;
        Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof2.add(opt);  
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof3.add(opt);
        
        var opt = document.createElement("option");
        var value="Deception";
        opt.value = value;
        opt.text = value;
        Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof3.add(opt);
        
        var opt = document.createElement("option");
        var value="History";
        opt.value = value;
        opt.text = value;
        Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof3.add(opt);
        
        var opt = document.createElement("option");
        var value="Insight";
        opt.value = value;
        opt.text = value;
        Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof3.add(opt);
    
        var opt = document.createElement("option");
        var value="Intimidation";
        opt.value = value;
        opt.text = value;
        Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof3.add(opt);
        
        var opt = document.createElement("option");
        var value="Investigation";
        opt.value = value;
        opt.text = value;
        Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof3.add(opt);
        
        var opt = document.createElement("option");
        var value="Medicine";
        opt.value = value;
        opt.text = value;
        Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof3.add(opt);
        
        var opt = document.createElement("option");
        var value="Nature";
        opt.value = value;
        opt.text = value;
        Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof3.add(opt);
        
        var opt = document.createElement("option");
        var value="Perception";
        opt.value = value;
        opt.text = value;
        Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof3.add(opt);
        
        var opt = document.createElement("option");
        var value="Peformance";
        opt.value = value;
        opt.text = value;
        Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof3.add(opt);
        
        var opt = document.createElement("option");
        var value="Persuasion";
        opt.value = value;
        opt.text = value;
        Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof3.add(opt);
        
        var opt = document.createElement("option");
        var value="Religion";
        opt.value = value;
        opt.text = value;
        Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof3.add(opt);
        
        var opt = document.createElement("option");
        var value="Sleight of Hand";
        opt.value = value;
        opt.text = value;
        Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof3.add(opt);
        
        var opt = document.createElement("option");
        var value="Stealth";
        opt.value = value;
        opt.text = value;
        Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof3.add(opt);
        
        var opt = document.createElement("option");
        var value="Survival";
        opt.value = value;
        opt.text = value;
        Prof1.add(opt);

        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof2.add(opt);

        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
        Prof3.add(opt);
    }
else if (Class == "Cleric") {
    SubClass.style.visibility = "visible";
    SubClassLabel.style.visibility = "visible";
    
    Prof1.style.visibility="visible";
    Prof2.style.visibility="visible";
    
        var opt = document.createElement("option");
    var value="History";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Insight";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Medicine";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Persuasion";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Religion";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
    SubClassLabel.innerHTML = "Domain";
    for (let i = 0; i < numbersC; i++) {
        if (i >= 6) {
    SubClass.remove(7);         
        }
    }
}
else if(Class=="Druid"){
    Prof1.style.visibility="visible";
    Prof2.style.visibility="visible";

        var opt = document.createElement("option");
    var value="Animal Handling";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);

        var opt = document.createElement("option");
    var value="Arcana";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);

        var opt = document.createElement("option");
    var value="Insight";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Medicine";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Nature";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Perception";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Religion";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Survival";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt); 
}
else if(Class == "Fighter") {
    SubClass.style.visibility = "visible";
    SubClassLabel.style.visibility = "visible";

    Prof1.style.visibility="visible";
    Prof2.style.visibility="visible";

        var opt = document.createElement("option"); 
    var value="Acrobatics";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);

        var opt = document.createElement("option");
    var value="Animal Handling";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);

        var opt = document.createElement("option");
    var value="Athletics";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);  
    
        var opt = document.createElement("option");
    var value="History";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Insight";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);

        var opt = document.createElement("option");
    var value="Intimidation";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Perception";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Survival";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt); 

    SubClassLabel.innerHTML = "Fighting Style";
    for (let i = 0; i < numbersC; i++) {
        if (i <= 11) {
    SubClass.remove(0);         
        }
    }
}
else if(Class=="Monk"){
    Prof1.style.visibility="visible";
    Prof2.style.visibility="visible";
    
        var opt = document.createElement("option");
    var value="Acrobatics";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);

        var opt = document.createElement("option");
    var value="Athletics";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);  
    
        var opt = document.createElement("option");
    var value="History";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Insight";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Religion";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Stealth";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
}
else if(Class=="Paladin"){
    Prof1.style.visibility="visible";
    Prof2.style.visibility="visible";

        var opt = document.createElement("option");
    var value="Athletics";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);  
    
        var opt = document.createElement("option");
    var value="Insight";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);

        var opt = document.createElement("option");
    var value="Intimidation";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Medicine";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Persuasion";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Religion";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
}
else if(Class=="Ranger"){
    Prof1.style.visibility="visible";
    Prof2.style.visibility="visible";
    Prof3.style.visibility="visible";

        var opt = document.createElement("option");
    var value="Animal Handling";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof3.add(opt);

        var opt = document.createElement("option");
    var value="Athletics";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);  
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof3.add(opt);
    
        var opt = document.createElement("option");
    var value="Insight";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof3.add(opt);
    
        var opt = document.createElement("option");
    var value="Investigation";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof3.add(opt);
    
        var opt = document.createElement("option");
    var value="Nature";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof3.add(opt);
    
        var opt = document.createElement("option");
    var value="Perception";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof3.add(opt);
    
        var opt = document.createElement("option");
    var value="Stealth";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof3.add(opt);
    
        var opt = document.createElement("option");
    var value="Survival";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt); 
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof3.add(opt);
}
else if(Class == "Rogue"){
    Prof1.style.visibility = "visible";
    Prof2.style.visibility = "visible";
    Prof3.style.visibility = "visible";
    Prof4.style.visibility = "visible";

        var opt = document.createElement("option");
    var value="Acrobatics";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof3.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof4.add(opt);

        var opt = document.createElement("option");
    var value="Athletics";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);  
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof3.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof4.add(opt);
    
        var opt = document.createElement("option");
    var value="Deception";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof3.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof4.add(opt);
    
        var opt = document.createElement("option");
    var value="Insight";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof3.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof4.add(opt);

        var opt = document.createElement("option");
    var value="Intimidation";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof3.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof4.add(opt);
    
        var opt = document.createElement("option");
    var value="Investigation";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof3.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof4.add(opt);
    
        var opt = document.createElement("option");
    var value="Perception";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof3.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof4.add(opt);
    
        var opt = document.createElement("option");
    var value="Peformance";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof3.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof4.add(opt);
    
        var opt = document.createElement("option");
    var value="Persuasion";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof3.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof4.add(opt);
    
        var opt = document.createElement("option");
    var value="Sleight of Hand";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof3.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof4.add(opt);
    
        var opt = document.createElement("option");
    var value="Stealth";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof3.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof4.add(opt);
}
else if (Class == "Sorcerrer") {
    SubClass.style.visibility = "visible";
    SubClassLabel.style.visibility = "visible";

    Prof1.style.visibility="visible";
    Prof2.style.visibility="visible";

        var opt = document.createElement("option");
    var value="Arcana";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Deception";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Insight";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);

        var opt = document.createElement("option");
    var value="Intimidation";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Persuasion";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Religion";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);

    SubClassLabel.innerHTML = "Sorcerous Origin";
    for (let i = 0; i < numbersC; i++) {
        if (i <= 6) {
    SubClass.remove(0);         
        }
        else if (i >= 8) {   
    SubClass.remove(2);  
        }
    }
}
else if (Class == "Warlock") {
    SubClass.style.visibility = "visible";
    SubClassLabel.style.visibility = "visible";
    
    Prof1.style.visibility="visible";
    Prof2.style.visibility="visible";

        var opt = document.createElement("option");
    var value="Arcana";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Deception";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="History";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);

        var opt = document.createElement("option");
    var value="Intimidation";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Investigation";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);

        var opt = document.createElement("option");
    var value="Nature";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Religion";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);

    SubClassLabel.innerHTML = "Patron";
    for (let i = 0; i < numbersC; i++) {
        if (i <= 8) {
    SubClass.remove(0);         
        }
        else if (i >= 11) {   
    SubClass.remove(3);  
        }
    }
}
else if(Class=="Wizard"){
    Prof1.style.visibility = "visible";
    Prof2.style.visibility = "visible";

        var opt = document.createElement("option");
    var value="Arcana";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="History";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Insight";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Investigation";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Medicine";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
    
        var opt = document.createElement("option");
    var value="Religion";
    opt.value = value;
    opt.text = value;
    Prof1.add(opt);
        var opt = document.createElement("option");
    opt.value = value;
    opt.text = value;
    Prof2.add(opt);
}
      else {
}  
var DProf1="";
var DProf2="";

var  Background = document.getElementById("Background").value;

if (Background == "Acolyte") {
    DProf1="Insight";
    DProf2="Religion";
}  else if (Background == "Charlatan") {
    DProf1="Deception";
    DProf2="Sleight of Hand";    
} else if (Background == "Criminal") {
    DProf1="Deception";
    DProf2="Stealth";    
} else if (Background == "Entertainer") {
    DProf1="Acrobatics";
    DProf2="Peformance";
} else if (Background == "Folk Hero") {
    DProf1="Animal Handling";
    DProf2="Survival";
} else if (Background == "Guild Artisan") {
    DProf1="Insight";
    DProf2="Persuasion";
} else if (Background == "Hermit") {
    DProf1="Medicine";
    DProf2="Religion";
} else if (Background == "Noble") {
    DProf1="History";
    DProf2="Persuasion";
} else if (Background == "Outlander") {
    DProf1="Athletics";
    DProf2="Survival";
} else if (Background == "Sage") {
    DProf1="Arcana";
    DProf2="History";
} else if (Background == "Sailor") {
    DProf1="Athletics";
    DProf2="Perception";
} else if (Background == "Soldier") {
    DProf1="Athletics";
    DProf2="Intimidation";
} else if (Background == "Urchin") {
    DProf1="Sleight of Hand";
    DProf2="Stealth";
}else{
    
}

var Race = document.getElementById("Race").value;
var SubRace = document.getElementById("SubRace");
var SubRaceLabel = document.getElementById("SRace"); 
var RaceCom = ".";
var RProf = "None";
SubRace.style.visibility = "hidden";
SubRaceLabel.style.visibility = "hidden";
 if (Race == "Dwarf") {
    SubRaceLabel.style.visibility = "visible";
     SubRace.style.visibility = "visible";
     var numbersR = SubRace.length;
     for (let i = 0; i < numbersR; i++) {
         if (i => 2) {
     SubRace.remove(2);         
         }
     }
 }  
 else if (Race == "Elf") {
    SubRaceLabel.style.visibility = "visible";
     SubRace.style.visibility = "visible";
     var numbersR = SubRace.length;
     for (let i = 0; i < numbersR; i++) {
         if (i < 2) {
     SubRace.remove(0);         
         }
         if (i > 4) {
     SubRace.remove(3); 
         }
     }
     RProf = "Perception";
     RaceCom =" and "+RProf+" from your race."
 }  
 else if (Race == "Halfling") {
    SubRaceLabel.style.visibility = "visible";
     SubRace.style.visibility = "visible";
     var numbersR = SubRace.length;
     for (let i = 0; i < numbersR; i++) {
         if (i < 5) {
     SubRace.remove(0);         
         }
         if (i > 6) {
     SubRace.remove(2); 
         }
     }
 }  
 else if(Race == "Human"){

 }
 else if (Race == "Dragonborn") {
    SubRaceLabel.style.visibility = "visible";
     SubRace.style.visibility = "visible";
     var numbersR = SubRace.length;
     for (let i = 0; i < numbersR; i++) {
         if (i < 7) {
     SubRace.remove(0);         
         }
         if (i > 16) {
     SubRace.remove(10); 
         }
     }
 }  
 else if (Race == "Gnome") {
    SubRaceLabel.style.visibility = "visible";
     SubRace.style.visibility = "visible";
     var numbersR = SubRace.length;
     for (let i = 0; i < numbersR; i++) {
         if (i < 17) {
     SubRace.remove(0);         
         }
     }
 } 
 else if(Race == "Halfelf"){

 }
 else if(Race == "Halforc"){
    RProf = "Intimidation";
    RaceCom =" and "+RProf+" from your race."

 }
 else if(Race == "Tiefling"){

 }
 else{}

 var  Info = document.getElementById("Info");
Info.innerHTML = "You got proficiencies in "+DProf1+" and "+DProf2+" from your background"+RaceCom;

function Switch() { 

    var Prof1 = document.getElementById("Prof1").value;
    var Prof2 = document.getElementById("Prof2").value;
    var Prof3 = document.getElementById("Prof3").value;
    var Prof4 = document.getElementById("Prof4").value;

    if (Class == "Rogue") {
        if (Prof1 == Prof2 || Prof1 == Prof3 || Prof2 == Prof3 || Prof1 == Prof4 || Prof2 == Prof4 || Prof3 == Prof4) {
            
        } 
        else {
            
        if (DProf1 == Prof1 || DProf1 ==Prof2 || DProf1 == Prof3 || DProf1 == Prof4) {
            
        } 
        else {
            
        if (DProf2 == DProf2 || DProf2 ==Prof2 || DProf2 == Prof3 || DProf2 == Prof4) {
            
        } 
        else {
            if (Race == "Elf" || Race == "Halforc") {
                
            if (RProf == DProf2 || RProf ==Prof2 || RProf == Prof3 || RProf == Prof4) {
                
            } 
            else {
            
        var Source = document.createElement("script");
        Source.src = "LangSupport.js";
        Source.innerHTML = null;
        Source.id = "Source";
        document.getElementById("output").innerHTML = "";
        document.getElementById("output").appendChild(Source);
            }     
        }
            else {
            
        var Source = document.createElement("script");
        Source.src = "LangSupport.js";
        Source.innerHTML = null;
        Source.id = "Source";
        document.getElementById("output").innerHTML = "";
        document.getElementById("output").appendChild(Source);
            }        
        }        
        }        
        }
    } else {
        if (Prof1 == Prof2 || Prof1 == Prof3 || Prof2 == Prof3) {
            
        } 
        else {
            
        if (DProf1 == Prof1 || DProf1 == Prof2 || DProf1 == Prof3) {
            
        } 
        else {
            
        if (DProf2 == DProf2 || DProf2 == Prof2 || DProf2 == Prof3) {
            
        } 
        else {
            if (Race == "Elf" || Race == "Halforc") {
                
            if (RProf == DProf2 || RProf ==Prof2 || RProf == Prof3) {
                
            } 
            else {
            
        var Source = document.createElement("script");
        Source.src = "LangSupport.js";
        Source.innerHTML = null;
        Source.id = "Source";
        document.getElementById("output").innerHTML = "";
        document.getElementById("output").appendChild(Source);
            }     
        }
            else {
            
        var Source = document.createElement("script");
        Source.src = "LangSupport.js";
        Source.innerHTML = null;
        Source.id = "Source";
        document.getElementById("output").innerHTML = "";
        document.getElementById("output").appendChild(Source);
            }        
        }      
        }        
        }
    }
        
    }