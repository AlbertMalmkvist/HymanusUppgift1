
var Label2 = document.getElementsByName("Label2");
for (let i = 0, length = Label2.length; i < length; i++) {
    Label2[i].style.visibility = "hidden";
}
    var Prof1 = document.getElementById("Prof1").value;
    var Prof2 = document.getElementById("Prof2").value;
    var Prof3 = document.getElementById("Prof3").value;
    var Prof4 = document.getElementById("Prof4").value;
    var Prof5 = document.getElementById("Prof5").value;
    var Prof6 = document.getElementById("Prof6").value;

    function CreOpt(value){
        opt.value = value;
        opt.text = value;
      }

var  Lang1 = document.getElementById("Lang1");
var  Lang2 = document.getElementById("Lang2");
var  Lang3 = document.getElementById("Lang3");
var  Lang4 = document.getElementById("Lang4");
var  Lang5 = document.getElementById("Lang5");

var Race = document.getElementById("Race").value;
var SubRace = document.getElementById("SubRace");
var SubRaceval = document.getElementById("SubRace").value;
var SubRaceLabel = document.getElementById("SRace");

var RLang1 = "";
var RLang2 = "";
var  BRL = document.getElementById("BRL");

 if (Race == "Dwarf") {
     RLang1 = "Common";
     RLang2 = "Dwarfish";
     var RaceCom ="You know the langueges "+RLang1+" and "+RLang2+".";
 }
 else if (Race == "Elf") {
    RLang1 = "Common";
    RLang2 = "Elvish";
    RProf = "Perception";
    var RaceCom ="You know the langueges "+RLang1+" and "+RLang2+".";
if (SubRaceval = "High Elf") {
    Lang1.style.visibility = "visible";
    BRL.style.visibility = "visible";
}
 }
 else if (Race == "Halfling") {
    RLang1 = "Common";
    RLang2 = "Halfling";
    var RaceCom ="You know the langueges "+RLang1+" and "+RLang2+".";
 }
 else if(Race == "Human"){
    RLang1 = "Common";
    Lang1.style.visibility = "visible";
    BRL.style.visibility = "visible";
    var RaceCom ="You know the langueges "+RLang1+".";
 }
 else if (Race == "Dragonborn") {
    RLang1 = "Common";
    RLang2 = "Draconic";
    var RaceCom ="You know the Langueges "+RLang1+" and "+RLang2+".";
 }
 else if (Race == "Gnome") {
    RLang1 = "Common";
    RLang2 = "Gnomish";
    var RaceCom ="You know the langueges "+RLang1+" and "+RLang2+".";
 }
 else if (Race == "Halfelf") {
    RLang1 = "Common";
    Lang1.style.visibility = "visible";
    BRL.style.visibility = "visible";
    var RaceCom ="You know the languege "+RLang1+".";

 }
 else if(Race == "Halforc"){
    RLang1 = "Common";
    RLang2 = "Orc";
    RProf = "Intimidation";
    var RaceCom ="You know the langueges "+RLang1+" and "+RLang2+".";
 }
 else if(Race == "Tiefling"){
    RLang1 = "Common";
    RLang2 = "Infernal";
    var RaceCom ="You know the langueges "+RLang1+" and "+RLang2+".";
 }
 else{}


var DProf1="";
var DProf2="";

var  Background = document.getElementById("Background").value;
var  BackLang = document.getElementById("BackLang");

if (Background == "Acolyte") {
    DProf1="Insight";
    DProf2="Religion";
    Lang4.style.visibility = "visible";
    Lang5.style.visibility = "visible";
    BackLang.style.visibility = "visible";
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
    Lang4.style.visibility = "visible";
    BackLang.style.visibility = "visible";
} else if (Background == "Hermit") {
    DProf1="Medicine";
    DProf2="Religion";
    Lang4.style.visibility = "visible";
    BackLang.style.visibility = "visible";
} else if (Background == "Noble") {
    DProf1="History";
    DProf2="Persuasion";
    Lang4.style.visibility = "visible";
    BackLang.style.visibility = "visible";
} else if (Background == "Outlander") {
    DProf1="Athletics";
    DProf2="Survival";
    Lang4.style.visibility = "visible";
    BackLang.style.visibility = "visible";
} else if (Background == "Sage") {
    DProf1="Arcana";
    DProf2="History";
    Lang4.style.visibility = "visible";
    Lang5.style.visibility = "visible";
    BackLang.style.visibility = "visible";
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

var Class = document.getElementById("Class").value;
var SubClass = document.getElementById("SubClass");
var SubClassval = document.getElementById("SubClass").value;
var SubClassLabel = document.getElementById("CL");

 var   SCB1 = document.getElementById("SubClassBonus1");
  var  SCB2 = document.getElementById("SubClassBonus2");
var SCBL = document.getElementById("SubClassBonuslabel");
var SCLL = document.getElementById("SubClassLanglabel");

if (Class == "Cleric" && SubClassval == "Knowledge") {
    Lang2.style.visibility = "visible";
    Lang3.style.visibility = "visible";
    SCB1.style.visibility = "visible";
    SCB2.style.visibility = "visible";
    SCBL.style.visibility = "visible";
    SCLL.style.visibility = "visible";

    var opt = document.createElement("option");
    CreOpt("Arcana");
    SCB1.add(opt);
    SCB2.add(opt);

    var opt = document.createElement("option");
    CreOpt("History");
    SCB1.add(opt);
    SCB2.add(opt);

    var opt = document.createElement("option");
    CreOpt("Nature");
    SCB1.add(opt);
    SCB2.add(opt);

    var opt = document.createElement("option");
    CreOpt("Religion");
    SCB1.add(opt);
    SCB2.add(opt);


} else if (Class == "Rogue") {
    SCB1.style.visibility = "visible";
    SCBL.style.visibility = "visible";
    var opt = document.createElement("option");
    CreOpt(DProf1);
    SCB1.add(opt);
    var opt = document.createElement("option");
    CreOpt(DProf2);
    SCB1.add(opt);

    if (Race == "Halfelf") {
        var opt = document.createElement("option");
        CreOpt(Prof1);
        SCB1.add(opt);
        var opt = document.createElement("option");
        CreOpt(Prof2);
        SCB1.add(opt);
        var opt = document.createElement("option");
        CreOpt(Prof3);
        SCB1.add(opt);
        var opt = document.createElement("option");
        CreOpt(Prof4);
        SCB1.add(opt);
    var opt = document.createElement("option");
    CreOpt(Prof5);
    SCB1.add(opt);
    var opt = document.createElement("option");
    CreOpt(Prof6);
    SCB1.add(opt);
    } else {
    var opt = document.createElement("option");
    CreOpt(Prof1);
    SCB1.add(opt);
    var opt = document.createElement("option");
    CreOpt(Prof2);
    SCB1.add(opt);
    var opt = document.createElement("option");
    CreOpt(Prof3);
    SCB1.add(opt);
    var opt = document.createElement("option");
    CreOpt(Prof4);
    SCB1.add(opt);
    }
} else {

}
var  Info = document.getElementById("Info");
Info.innerHTML = RaceCom;


Info.style.visibility = "visible";

function Switching(){
    var Source = document.createElement("script");
    Source.src = "Support2.js";
    Source.innerHTML = null;
    Source.id = "Source";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").appendChild(Source);  
}
function Switch() {
    var  Lang1 = document.getElementById("Lang1").value;
    var  Lang2 = document.getElementById("Lang2").value;
    var  Lang3 = document.getElementById("Lang3").value;
    var  Lang4 = document.getElementById("Lang4").value;
    var  Lang5 = document.getElementById("Lang5").value;
    var   SCB1V = document.getElementById("SubClassBonus1").value;
     var  SCB2V = document.getElementById("SubClassBonus2").value;

    if (Race=="Halfelf") {
        if (RLang1 == Lang1) {
        } else {
            if (Class == "Cleric" && SubClassval == "Knowledge") {
            if (RLang1 == Lang2 || RLang1 == Lang3) {
            }
            else{
                if (SCB1V == SCB2V) {

            }
            else{
                if (Background == "Acolyte") {
                    if (RLang1 == Lang4 || RLang1 == Lang5) {
                    }
                    else {
                        if (Lang1 == Lang2 || Lang1 == Lang3 || Lang1 == Lang4 || Lang1 == Lang5 || Lang2 == Lang3 || Lang2 == Lang4 || Lang2 == Lang5 || Lang3 == Lang4 || Lang3 == Lang5 || Lang4 == Lang5) {

                        } else {
                            Switching();
                        }
                    }
                } else if (Background == "Guild Artisan") {
                    if (RLang1 == Lang4) {
                    }
                    else {
                        if (Lang1 == Lang2 || Lang1 == Lang3 || Lang1 == Lang4 || Lang2 == Lang3 || Lang2 == Lang4 || Lang3 == Lang4) {

                        } else {
                            Switching();

                        }
                    }
                } else if (Background == "Hermit") {
                    if (RLang1 == Lang4) {
                    }
                    else {
                        if (Lang1 == Lang2 || Lang1 == Lang3 || Lang1 == Lang4 || Lang2 == Lang3 || Lang2 == Lang4 || Lang3 == Lang4) {

                        } else {
                            Switching();

                        }
                    }
                } else if (Background == "Noble") {
                    if (RLang1 == Lang4) {
                    }
                    else {
                        if (Lang1 == Lang2 || Lang1 == Lang3 || Lang1 == Lang4 || Lang2 == Lang3 || Lang2 == Lang4 || Lang3 == Lang4) {

                        } else {
                            Switching();

                        }
                    }
                } else if (Background == "Outlander") {
                    if (RLang1 == Lang4) {
                    }
                    else {
                        if (Lang1 == Lang2 || Lang1 == Lang3 || Lang1 == Lang4 || Lang2 == Lang3 || Lang2 == Lang4 || Lang3 == Lang4) {

                        } else {
                            Switching();

                        }
                    }
                } else if (Background == "Sage") {
                    if (RLang1 == Lang4 || RLang1 == Lang5) {
                    }
                    else {
                        if (Lang1 == Lang2 || Lang1 == Lang3 || Lang1 == Lang4 || Lang1 == Lang5 || Lang2 == Lang3 || Lang2 == Lang4 || Lang2 == Lang5 || Lang3 == Lang4 || Lang3 == Lang5 || Lang4 == Lang5) {

                        } else {
                            Switching();

                        }
                    }
                } else {
                    if (Lang1 == Lang2 || Lang1 == Lang3 || Lang2 == Lang3 ) {

                    } else {

                    }
                }
            }
           }
            }
            else {
            }
        }
    } else if (Race=="Human") {
        if (RLang1 == Lang1) {
        } else {
            if (Class == "Cleric" && SubClassval == "Knowledge") {
            if (RLang1 == Lang2 || RLang1 == Lang3) {
            }
            else{
                if (SCB1V == SCB2V) {

            }
            else{
                if (Background == "Acolyte") {
                    if (RLang1 == Lang4 || RLang1 == Lang5) {
                    }
                    else {
                        if (Lang1 == Lang2 || Lang1 == Lang3 || Lang1 == Lang4 || Lang1 == Lang5 || Lang2 == Lang3 || Lang2 == Lang4 || Lang2 == Lang5 || Lang3 == Lang4 || Lang3 == Lang5 || Lang4 == Lang5) {

                        } else {
                            Switching();

                        }
                    }
                } else if (Background == "Guild Artisan") {
                    if (RLang1 == Lang4) {
                    }
                    else {
                        if (Lang1 == Lang2 || Lang1 == Lang3 || Lang1 == Lang4 || Lang2 == Lang3 || Lang2 == Lang4 || Lang3 == Lang4) {

                        } else {
                            Switching();

                        }
                    }
                } else if (Background == "Hermit") {
                    if (RLang1 == Lang4) {
                    }
                    else {
                        if (Lang1 == Lang2 || Lang1 == Lang3 || Lang1 == Lang4 || Lang2 == Lang3 || Lang2 == Lang4 || Lang3 == Lang4) {

                        } else {
                            Switching();

                        }
                    }
                } else if (Background == "Noble") {
                    if (RLang1 == Lang4) {
                    }
                    else {
                        if (Lang1 == Lang2 || Lang1 == Lang3 || Lang1 == Lang4 || Lang2 == Lang3 || Lang2 == Lang4 || Lang3 == Lang4) {

                        } else {
                            Switching();

                        }
                    }
                } else if (Background == "Outlander") {
                    if (RLang1 == Lang4) {
                    }
                    else {
                        if (Lang1 == Lang2 || Lang1 == Lang3 || Lang1 == Lang4 || Lang2 == Lang3 || Lang2 == Lang4 || Lang3 == Lang4) {

                        } else {
                            Switching();

                        }
                    }
                } else if (Background == "Sage") {
                    if (RLang1 == Lang4 || RLang1 == Lang5) {
                    }
                    else {
                        if (Lang1 == Lang2 || Lang1 == Lang3 || Lang1 == Lang4 || Lang1 == Lang5 || Lang2 == Lang3 || Lang2 == Lang4 || Lang2 == Lang5 || Lang3 == Lang4 || Lang3 == Lang5 || Lang4 == Lang5) {

                        } else {
                            Switching();

                        }
                    }
                } else {
                    if (Lang1 == Lang2 || Lang1 == Lang3 || Lang2 == Lang3 ) {

                    } else {                            Switching();

                    }
                }
           }
        }
            }
            else {                            Switching();
            }
        }
    } else if (Race=="Elf" && SubRaceval == "High Elf") {
            if (RLang1 == Lang1 || RLang2 == Lang1) {
            } else {
                if (Class == "Cleric" && SubClassval == "Knowledge") {
                if (RLang1 == Lang2 || RLang1 == Lang3||RLang2 == Lang2 || RLang2 == Lang3) {
                }
                else{
                    if (SCB1V == SCB2V) {

                    }
                    else{
                    if (Background == "Acolyte") {
                        if (RLang1 == Lang4 || RLang1 == Lang5||RLang2 == Lang4 || RLang2 == Lang5) {
                        }
                        else {
                            if (Lang1 == Lang2 || Lang1 == Lang3 || Lang1 == Lang4 || Lang1 == Lang5 || Lang2 == Lang3 || Lang2 == Lang4 || Lang2 == Lang5 || Lang3 == Lang4 || Lang3 == Lang5 || Lang4 == Lang5) {

                            } else {
                            Switching();

                            }
                        }
                    } else if (Background == "Guild Artisan") {
                        if (RLang1 == Lang4||RLang2 == Lang4 ) {
                        }
                        else {
                            if (Lang1 == Lang2 || Lang1 == Lang3 || Lang1 == Lang4 || Lang2 == Lang3 || Lang2 == Lang4 || Lang3 == Lang4) {

                            } else {
                            Switching();

                            }
                        }
                    } else if (Background == "Hermit") {
                        if (RLang1 == Lang4||RLang2 == Lang4) {
                        }
                        else {
                            if (Lang1 == Lang2 || Lang1 == Lang3 || Lang1 == Lang4 || Lang2 == Lang3 || Lang2 == Lang4 || Lang3 == Lang4) {

                            } else {
                            Switching();

                            }
                        }
                    } else if (Background == "Noble") {
                        if (RLang1 == Lang4||RLang2 == Lang4) {
                        }
                        else {
                            if (Lang1 == Lang2 || Lang1 == Lang3 || Lang1 == Lang4 || Lang2 == Lang3 || Lang2 == Lang4 || Lang3 == Lang4) {

                            } else {
                            Switching();

                            }
                        }
                    } else if (Background == "Outlander") {
                        if (RLang1 == Lang4||RLang2 == Lang4) {
                        }
                        else {
                            if (Lang1 == Lang2 || Lang1 == Lang3 || Lang1 == Lang4 || Lang2 == Lang3 || Lang2 == Lang4 || Lang3 == Lang4) {

                            } else {
                            Switching();

                            }
                        }
                    } else if (Background == "Sage") {
                        if (RLang1 == Lang4 || RLang1 == Lang5||RLang2 == Lang4 || RLang2 == Lang5) {
                        }
                        else {
                            if (Lang1 == Lang2 || Lang1 == Lang3 || Lang1 == Lang4 || Lang1 == Lang5 || Lang2 == Lang3 || Lang2 == Lang4 || Lang2 == Lang5 || Lang3 == Lang4 || Lang3 == Lang5 || Lang4 == Lang5) {

                            } else {
                            Switching();

                            }
                        }
                    } else {
                        if (Lang1 == Lang2 || Lang1 == Lang3 || Lang2 == Lang3 ) {

                        } else {
                            Switching();

                        }
                    }
                }
               }
                }
                else {
                    if (Background == "Acolyte") {
                        if (RLang1 == Lang4 || RLang1 == Lang5||RLang2 == Lang4||RLang2 == Lang5) {
                        }
                        else {
                            if (Lang1 == Lang4 || Lang1 == Lang5 || Lang4 == Lang5) {

                            } else {
                                Switching();

                            }
                        }
                    } else if (Background == "Guild Artisan") {
                        if (RLang1 == Lang4||RLang2 == Lang4) {
                        }
                        else {
                            if (Lang1 == Lang4 ) {

                            } else {
                                Switching();

                            }
                        }
                    } else if (Background == "Hermit") {
                        if (RLang1 == Lang4||RLang2 == Lang4) {
                        }
                        else {
                            if (Lang1 == Lang4 ) {

                            } else {
                                Switching();

                            }
                        }
                    } else if (Background == "Noble") {
                        if (RLang1 == Lang4||RLang2 == Lang4) {
                        }
                        else {
                            if (Lang1 == Lang4 ) {

                            } else {
                                Switching();
                            }
                        }
                    } else if (Background == "Outlander") {
                        if (RLang1 == Lang4||RLang2 == Lang4) {
                        }
                        else {
                            if (Lang1 == Lang4 ) {

                            } else {
                                Switching();
                            }
                        }
                    } else if (Background == "Sage") {
                        if (RLang1 == Lang4 || RLang1 == Lang5||RLang2 == Lang4||RLang2 == Lang5) {
                        }
                        else {
                            if (Lang1 == Lang4 || Lang1 == Lang5 || Lang4 == Lang5) {

                            } else {
                                Switching();

                            }
                        }
                    } else {
                        Switching();
                    }
                    }
               }
    }
         else {
                if (Class == "Cleric" && SubClassval == "Knowledge") {
                if (RLang1 == Lang2 || RLang1 == Lang3 || RLang2 == Lang2 || RLang2 == Lang3) {
                }
                else{
                    if (SCB1V == SCB2V) {

                } else {
                    if (Background == "Acolyte") {
                        if (RLang1 == Lang4 || RLang1 == Lang5) {
                        }
                        else {
                            if (Lang2 == Lang3 || Lang2 == Lang4 || Lang2 == Lang5 || Lang3 == Lang4 || Lang3 == Lang5 || Lang4 == Lang5) {

                            } else {
                                Switching();

                            }
                        }
                    } else if (Background == "Guild Artisan") {
                        if (RLang1 == Lang4) {
                        }
                        else {
                            if (Lang2 == Lang3 || Lang2 == Lang4 || Lang2 == Lang5 || Lang3 == Lang4 || Lang3 == Lang5 || Lang4 == Lang5) {

                            } else {
                                Switching();

                            }
                        }
                    } else if (Background == "Hermit") {
                        if (RLang1 == Lang4) {
                        }
                        else {
                            if (Lang2 == Lang3 || Lang2 == Lang4 || Lang2 == Lang5 || Lang3 == Lang4 || Lang3 == Lang5 || Lang4 == Lang5) {

                            } else {
                                Switching();

                            }
                        }
                    } else if (Background == "Noble") {
                        if (RLang1 == Lang4) {
                        }
                        else {
                            if (Lang2 == Lang3 || Lang2 == Lang4 || Lang2 == Lang5 || Lang3 == Lang4 || Lang3 == Lang5 || Lang4 == Lang5) {

                            } else {
                                Switching();
                            }
                        }
                    } else if (Background == "Outlander") {
                        if (RLang1 == Lang4) {
                        }
                        else {
                            if (Lang2 == Lang3 || Lang2 == Lang4 || Lang2 == Lang5 || Lang3 == Lang4 || Lang3 == Lang5 || Lang4 == Lang5) {

                            } else {
                                Switching();

                            }
                        }
                    } else if (Background == "Sage") {
                        if (RLang1 == Lang4 || RLang1 == Lang5) {
                        }
                        else {
                            if (Lang2 == Lang3 || Lang2 == Lang4 || Lang2 == Lang5 || Lang3 == Lang4 || Lang3 == Lang5 || Lang4 == Lang5) {

                            } else {
                                Switching();
                            }
                        }
                    } else {
                        if (Lang2 == Lang3 ) {

                        } else {
                            Switching();

                        }
                    }

                }
               }
                }
                else {
                        if (Background == "Acolyte") {
                            if (RLang1 == Lang4 || RLang1 == Lang5||RLang2 == Lang4 || RLang2 == Lang5) {
                            }
                            else {
                                if (Lang4 == Lang5) {

                                } else {

                                }
                            }
                        } else if (Background == "Guild Artisan") {
                            if (RLang1 == Lang4||RLang2 == Lang4 ) {
                            }
                            else {
                                Switching();
                                                        }
                        } else if (Background == "Hermit") {
                            if (RLang1 == Lang4||RLang2 == Lang4 ) {
                            }
                            else {
                                Switching();


                            }

                        } else if (Background == "Noble") {
                            if (RLang1 == Lang4||RLang2 == Lang4 ) {
                            }
                            else {
                                Switching();
                            }
                        } else if (Background == "Outlander") {
                            if (RLang1 == Lang4||RLang2 == Lang4 ) {
                            }
                            else {
                                Switching();


                            }
                        } else if (Background == "Sage") {
                            if (RLang1 == Lang4 || RLang1 == Lang5||RLang2 == Lang4 ||RLang2 == Lang5 ) {
                            }
                            else {
                                if (Lang4 == Lang5) {

                                } else {
                                    Switching();

                                }
                            }
                        } else {
                            Switching();
                            }
                        }
                   }
                    }
