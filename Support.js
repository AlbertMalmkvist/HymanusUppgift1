

function Switch() { 
    var Source = document.createElement("script");
    Source.src = "LangSupport.js";
    Source.innerHTML = null;
    Source.id = "Source";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").appendChild(Source);        
    }


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

SubClass.style.visibility = "hidden";
SubClassLabel.style.visibility = "hidden";

var Prof1 = document.getElementById("Prof1");
var Prof2 = document.getElementById("Prof2");
var Prof3 = document.getElementById("Prof3");
var Prof4 = document.getElementById("Prof4");

        var opt = document.createElement("option");
    
SubClass.style.visibility = "visible";
SubClassLabel.style.visibility = "visible";
    var numbersC = SubClass.length;

    if (Class=="Barbarian") {
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

var Race = document.getElementById("Race").value;
var SubRace = document.getElementById("SubRace");
var SubRaceLabel = document.getElementById("SRace"); 

SubRace.style.visibility = "hidden";
SubRaceLabel.style.visibility = "hidden";

var RLang1 = "";
var RLang2 = "";
var RProf1 = "";
var RProf2 = "";
var TLang = "";
var TProf = "";
var ExtraLang= 0;
 if (Race == "Dwarf") {
     RLang1 = "Common";
     RLang1 = "Dwarfish";

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

 }
 else if(Race == "Tiefling"){

 }
 else{}
 