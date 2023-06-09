/*! ************************************************************************
DAOC CHARACTER BUILDER - A static website for planning DAoC character specs

This website is based upon the Uthgard Character Builder, designed originally
by genuapp at http://www.genuapp.appspot.com/char/index.html.

It has been modified from its original code to suit the purposes of the
HavenDAoC open source project.

Please note that this is a work-in-progress and available for free distribution
on an "as-is" basis, without warranties or conditions of any kind, expressed
or implied.
************************************************************************* */

/* ************************************************
 * ANIMIST - HIBERNIA
 * Class based upon v1.65 patch level.
************************************************ */

/* ************************************************
 * Race Selection
************************************************ */

/* Placeholder Races */
sSTR[999] = 0;
sCON[999] = 0;
sDEX[999] = 0;
sQUI[999] = 0;
sINT[999] = 0;
sPIE[999] = 0;
sEMP[999] = 0;
sCHA[999] = 0;

sSTR[998] = 0;
sCON[998] = 0;
sDEX[998] = 0;
sQUI[998] = 0;
sINT[998] = 0;
sPIE[998] = 0;
sEMP[998] = 0;
sCHA[998] = 0;

// Base stats for the Celt race.
sSTR[1] = 60;
sCON[1] = 60;
sDEX[1] = 60;
sQUI[1] = 60;
sINT[1] = 60;
sPIE[1] = 60;
sEMP[1] = 60;
sCHA[1] = 60;

// Base stats for the Firbolg race.
sSTR[3] = 90;
sCON[3] = 60;
sDEX[3] = 40;
sQUI[3] = 40;
sINT[3] = 60;
sPIE[3] = 60;
sEMP[3] = 70;
sCHA[3] = 60;

// Base stats for the Sylvan race.
sSTR[14] = 70;
sCON[14] = 60;
sDEX[14] = 55;
sQUI[14] = 45;
sINT[14] = 70;
sPIE[14] = 60;
sEMP[14] = 60;
sCHA[14] = 60;

/* ************************************************
 * Class Skills/Specializations
************************************************ */

Abilities = new Array(8)		
Abilities[1]=new abilityPT("Staff",0,83,5,0,0,0)
Abilities[2]=new abilityPT("Cloth Armor",0,99,7,0,0,0)
Abilities[3]=new abilityPT("Arboreal \r\n\t\t\t\t            Path",0,183,2,1,0,0)
Abilities[4]=new abilityPT("Creeping Path",5,184,2,1,0,0)
Abilities[5]=new abilityPT("Verdant Path",5,185,2,1,0,0)
Abilities[6]=new abilityPT("Arboreal Mastery",5,186,3,0,183,0)
Abilities[7]=new abilityPT("Creeping Mastery",5,187,3,0,184,0)
Abilities[8]=new abilityPT("Verdant Mastery",5,188,3,0,185,0)
	
//Styles = new Array(0);

Spells = new Array()

Lines = new Array();
var idx=1;
Lines[183003]=new linePT('Shield (Self)','Adds to the recipient\'s Armor Factor (AF), resulting in better protection against some forms of attack. It acts in addition to any armor the target is wearing.',183,0) 
Spells[idx++]=new spellPT("Grove's Protection",1,183003,183,"13 AF ",183,"2 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Grove's Buffer",3,183003,183,"22 AF ",183,"3 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Grove's Defense",5,183003,183,"32 AF ",183,"4 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Grove's Guard",9,183003,183,"51 AF ",183,"6 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Grove's Shield",13,183003,183,"71 AF ",183,"8 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Grove's Refuge",18,183003,183,"95 AF ",183,"11 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Grove's Armor",24,183003,183,"124 AF ",183,"15 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Grove's Ward",31,183003,183,"158 AF ",183,"19 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Grove's Sanctuary",40,183003,183,"201 AF ",183,"25 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Grove's Aegis",50,183003,183,"250 AF ",183,"33 PP",'','3.0s','','','20m','') 
Lines[183027]=new linePT('Lifedrain','Target is damaged, and a portion of the damage is used to heal the caster.',183,0) 
Spells[idx++]=new spellPT("Threshing the Chaff",2,183027,183,"9  D 30% ",183,"2 PP",'1500','2.5s','','','','Energy') 
Spells[idx++]=new spellPT("Natural Selection",4,183027,183,"17  D 30% ",183,"3 PP",'1500','2.5s','','','','Energy') 
Spells[idx++]=new spellPT("Culling the Weak",6,183027,183,"25  D 30% ",183,"4 PP",'1500','2.5s','','','','Energy') 
Spells[idx++]=new spellPT("Survival of the Fittest",8,183027,183,"33  D 30% ",183,"5 PP",'1500','2.5s','','','','Energy') 
Spells[idx++]=new spellPT("Strength of the Defender",12,183027,183,"45  D 30% ",183,"8 PP",'1500','2.5s','','','','Energy') 
Spells[idx++]=new spellPT("Right of Life",16,183027,183,"61  D 30% ",183,"10 PP",'1500','2.5s','','','','Energy') 
Spells[idx++]=new spellPT("Enemy's Debt",22,183027,183,"80  D 30% ",183,"13 PP",'1500','2.5s','','','','Energy') 
Spells[idx++]=new spellPT("Force of Nature",28,183027,183,"104  D 40% ",183,"17 PP",'1500','2.5s','','','','Energy') 
Spells[idx++]=new spellPT("Cycle of Life",35,183027,183,"128  D 40% ",183,"22 PP",'1500','2.5s','','','','Energy') 
Spells[idx++]=new spellPT("Cycle of Death",45,183027,183,"164  D 50% ",183,"29 PP",'1500','2.5s','','','','Energy') 
Lines[183006]=new linePT('Damage Shield','Anyone that hits the target with a melee attack is damaged by this protective shield.',183,0) 
Spells[idx++]=new spellPT("Thorns of Retribution",7,183006,183,"1.2 DPS ",183,"5 PP",'1000','4.0s','','','20m','') 
Spells[idx++]=new spellPT("Grove's Anguish",10,183006,183,"1.5 DPS ",183,"6 PP",'1000','4.0s','','','20m','') 
Spells[idx++]=new spellPT("Wood's Vengeance",14,183006,183,"1.9 DPS ",183,"9 PP",'1000','4.0s','','','20m','') 
Spells[idx++]=new spellPT("Forest's Revenge",21,183006,183,"2.5 DPS ",183,"13 PP",'1000','4.0s','','','20m','') 
Spells[idx++]=new spellPT("Earthspirit's Ire",30,183006,183,"3.3 DPS ",183,"19 PP",'1000','4.0s','','','20m','') 
Spells[idx++]=new spellPT("Nature's Retaliation",39,183006,183,"4.1 DPS ",183,"25 PP",'1000','4.0s','','','20m','') 
Spells[idx++]=new spellPT("Nature's Heart of Wrath",48,183006,183,"4.9 DPS ",183,"31 PP",'1000','4.0s','','','20m','') 
Lines[186121]=new linePT('Bomber (Damage)','Spell creates a \"bomber\" which flies to the target and then explodes, causing damage.',186,0) 
Spells[idx++]=new spellPT("Spirit of Anger",1,186121,186,"5  D ",186,"2 PP",'300','3.0s','','','20s','Body') 
Spells[idx++]=new spellPT("Spirit of Ire",3,186121,186,"16  D ",186,"3 PP",'300','3.0s','','','20s','Body') 
Spells[idx++]=new spellPT("Spirit of Outrage",6,186121,186,"31  D ",186,"4 PP",'300','3.0s','','','20s','Body') 
Spells[idx++]=new spellPT("Spirit of Aggravation",8,186121,186,"41  D ",186,"5 PP",'300','3.0s','','','20s','Body') 
Spells[idx++]=new spellPT("Spirit of Enmity",12,186121,186,"56  D ",186,"8 PP",'300','3.0s','','','20s','Body') 
Spells[idx++]=new spellPT("Spirit of Rage",16,186121,186,"77  D ",186,"10 PP",'300','3.0s','','','20s','Body') 
Spells[idx++]=new spellPT("Spirit of Wrath",22,186121,186,"102  D ",186,"13 PP",'300','3.0s','','','20s','Body') 
Spells[idx++]=new spellPT("Spirit of Fury",30,186121,186,"137  D ",186,"19 PP",'300','3.0s','','','20s','Body') 
Spells[idx++]=new spellPT("Spirit of Vengeance",39,186121,186,"183  D ",186,"25 PP",'300','3.0s','','','20s','Body') 
Spells[idx++]=new spellPT("Spirit of Hatred",48,186121,186,"225  D ",186,"31 PP",'300','3.0s','','','20s','Body') 
Lines[186122]=new linePT('Bomber (AOE Damage)','Spell creates a \"bomber\" which flies to the target and then explodes, causing damage over a given area. The damage done diminishes the further away from the bomber\'s target.',186,0) 
Spells[idx++]=new spellPT("Circle of Anger",14,186122,186,"51  D ",186,"9 PP",'300','','350','','20s','Body') 
Spells[idx++]=new spellPT("Circle of Enmity",20,186122,186,"72  D ",186,"12 PP",'300','','350','','20s','Body') 
Spells[idx++]=new spellPT("Circle of Fury",27,186122,186,"99  D ",186,"17 PP",'300','','350','','20s','Body') 
Spells[idx++]=new spellPT("Circle of Wrath",34,186122,186,"123  D ",186,"21 PP",'300','','350','','20s','Body') 
Spells[idx++]=new spellPT("Circle of Rage",42,186122,186,"151  D ",186,"27 PP",'300','','350','','20s','Body') 
Spells[idx++]=new spellPT("Circle of Vengeance",50,186122,186,"178  D ",186,"33 PP",'300','','350','','20s','Body') 
Lines[186124]=new linePT('Controllable Turret (Damage)','Turret which acts as a pet, controllable by the caster. This turret casts spells which do damage.',186,0) 
Spells[idx++]=new spellPT("Forest's Servant",5,186124,186,"26  D ",186,"10 PP",'1000','3.0s','','','Special','Body') 
Spells[idx++]=new spellPT("Forest's Companion",9,186124,186,"46  D ",186,"16 PP",'1000','3.0s','','','Special','Body') 
Spells[idx++]=new spellPT("Forest's Compatriot",11,186124,186,"51  D ",186,"20 PP",'1000','3.0s','','','Special','Body') 
Spells[idx++]=new spellPT("Forest's Aid",18,186124,186,"87  D ",186,"30 PP",'1000','3.0s','','','Special','Body') 
Spells[idx++]=new spellPT("Forest's Sentry",24,186124,186,"112  D ",186,"37 PP",'1000','3.0s','','','Special','Body') 
Spells[idx++]=new spellPT("Forest's Bulwark",35,186124,186,"163  D ",186,"50 PP",'1000','3.0s','','','Special','Body') 
Spells[idx++]=new spellPT("Forest's Protector",44,186124,186,"204  D ",186,"59 PP",'1000','3.0s','','','Special','Body') 
Lines[186123]=new linePT('Fire and Forget Turret (Root)','Turret which, while active, attempts to immobilize all hostile targets within its range.',186,0) 
Spells[idx++]=new spellPT("Tangler Sapling",7,186123,186,"99% 14 sec ",186,"13 PP",'1000','2.5s','','','14s','Body') 
Spells[idx++]=new spellPT("Tangler Youngling",22,186123,186,"99% 34 sec ",186,"35 PP",'1000','2.5s','','','34s','Body') 
Spells[idx++]=new spellPT("Tangler Youth",29,186123,186,"99% 45 sec ",186,"43 PP",'1000','2.5s','','','45s','Body') 
Spells[idx++]=new spellPT("Tangler",36,186123,186,"99% 55 sec ",186,"51 PP",'1000','2.5s','','','55s','Body') 
Spells[idx++]=new spellPT("Aged Tangler",43,186123,186,"99% 65 sec ",186,"58 PP",'1000','2.5s','','','65s','Body') 
Spells[idx++]=new spellPT("Elder Tangler",49,186123,186,"99% 73 sec ",186,"64 PP",'1000','2.5s','','','73s','Body') 
Lines[184125]=new linePT('Bomber (Damage and Debuff)','Spell creates a \"bomber\" which flies to the target and then explodes, causing damage. Target also has its resistance to that spell lowered slightly, which will make subsequent spells do more damage.',184,0) 
Spells[idx++]=new spellPT("Wisp Heat",1,184125,184,"5  D 10% ",184,"2 PP",'300','3.0s','','','60s','Body') 
Spells[idx++]=new spellPT("Wisp Glow",3,184125,184,"13  D 10% ",184,"3 PP",'300','3.0s','','','60s','Body') 
Spells[idx++]=new spellPT("Wisp Spark",7,184125,184,"29  D 10% ",184,"5 PP",'300','3.0s','','','60s','Body') 
Spells[idx++]=new spellPT("Wisp Fire",10,184125,184,"37  D 10% ",184,"6 PP",'300','3.0s','','','60s','Body') 
Spells[idx++]=new spellPT("Wisp Flame",15,184125,184,"57  D 10% ",184,"9 PP",'300','3.0s','','','60s','Body') 
Spells[idx++]=new spellPT("Wisp Blaze",20,184125,184,"73  D 10% ",184,"12 PP",'300','3.0s','','','60s','Body') 
Spells[idx++]=new spellPT("Wisp Flare",27,184125,184,"100  D 10% ",184,"17 PP",'300','3.0s','','','60s','Body') 
Spells[idx++]=new spellPT("Wisp Pyre",34,184125,184,"124  D 10% ",184,"21 PP",'300','3.0s','','','60s','Body') 
Spells[idx++]=new spellPT("Wisp Inferno",44,184125,184,"159  D 10% ",184,"28 PP",'300','3.0s','','','60s','Body') 
Lines[184126]=new linePT('Bomber (Root)','Spell creates a \"bomber\" which flies to the target and then explodes, effectively immobilizing the target (loses 99% of possible movement speed) for the duration of the spell. If any damage is done to the target, the spell will break.',184,0) 
Spells[idx++]=new spellPT("Spreading Vines",8,184126,184,"99% 16 sec ",184,"4 PP",'300','3.0s','','','16s','Body') 
Spells[idx++]=new spellPT("Ripening Vines",13,184126,184,"99% 23 sec ",184,"6 PP",'300','3.0s','','','23s','Body') 
Spells[idx++]=new spellPT("Expanding Vines",19,184126,184,"99% 31 sec ",184,"9 PP",'300','3.0s','','','31s','Body') 
Spells[idx++]=new spellPT("Branching Vines",26,184126,184,"99% 41 sec ",184,"12 PP",'300','3.0s','','','41s','Body') 
Spells[idx++]=new spellPT("Growing Vines",31,184126,184,"99% 48 sec ",184,"15 PP",'300','3.0s','','','48s','Body') 
Spells[idx++]=new spellPT("Shooting Vines",40,184126,184,"99% 61 sec ",184,"20 PP",'300','3.0s','','','61s','Body') 
Spells[idx++]=new spellPT("Rampant Vines",49,184126,184,"99% 73 sec ",184,"25 PP",'300','3.0s','','','73s','Body') 
Lines[184127]=new linePT('Fire and Forget Turret (Damage)','Turret which, while active, casts damage spells at all hostile targets within its range.',184,0) 
Spells[idx++]=new spellPT("Forest's Advocate",5,184127,184,"21  D ",184,"10 PP",'1000','3.0s','','','120s','Body') 
Spells[idx++]=new spellPT("Forest's Emissary",9,184127,184,"37  D ",184,"16 PP",'1000','3.0s','','','120s','Body') 
Spells[idx++]=new spellPT("Forest's Essence",16,184127,184,"61  D ",184,"27 PP",'1000','3.0s','','','120s','Body') 
Spells[idx++]=new spellPT("Forest's Spirit",21,184127,184,"76  D ",184,"34 PP",'1000','3.0s','','','120s','Body') 
Spells[idx++]=new spellPT("Forest's Heart",28,184127,184,"104  D ",184,"42 PP",'1000','3.0s','','','120s','Body') 
Spells[idx++]=new spellPT("Forest's Soul",35,184127,184,"128  D ",184,"50 PP",'1000','3.0s','','','120s','Body') 
Spells[idx++]=new spellPT("Forest's Incarnation",43,184127,184,"155  D ",184,"58 PP",'1000','3.0s','','','120s','Body') 
Spells[idx++]=new spellPT("Forest's Core",50,184127,184,"179  D ",184,"65 PP",'1000','3.0s','','','120s','Body') 
Lines[184107]=new linePT('Debuff (Constitution)','Target\'s Constitution is lowered, which lowers their total available hit points.',184,0) 
Spells[idx++]=new spellPT("Sap Strength",12,184107,184,"-19 CON ",184,"6 PP",'1500','','','5s','30s','') 
Spells[idx++]=new spellPT("Bleed Strength",18,184107,184,"-24 CON ",184,"9 PP",'1500','','','5s','30s','') 
Spells[idx++]=new spellPT("Subvert Strength",23,184107,184,"-28 CON ",184,"11 PP",'1500','','','5s','30s','') 
Spells[idx++]=new spellPT("Exhaust Strength",30,184107,184,"-34 CON ",184,"14 PP",'1500','','','5s','30s','') 
Spells[idx++]=new spellPT("Sap Might",37,184107,184,"-39 CON ",184,"18 PP",'1500','','','5s','30s','') 
Spells[idx++]=new spellPT("Bleed Might",46,184107,184,"-46 CON ",184,"22 PP",'1500','','','5s','30s','') 
Lines[187130]=new linePT('Fire and Forget Turret (Debuff Damage)','Turret which, while active, casts spells that reduce the target\'s melee damage (DPS) at all hostile targets within its range.',187,0) 
Spells[idx++]=new spellPT("Spore Spewer",1,187130,187,"-5% PEN ",187,"3  & 1/P",'1000','3.0s','','','60s','Body') 
Spells[idx++]=new spellPT("Spore Secreter",4,187130,187,"-7% PEN ",187,"8  & 2/P",'1000','3.0s','','','60s','Body') 
Spells[idx++]=new spellPT("Spore Ejector",9,187130,187,"-9% PEN ",187,"16  & 4/P",'1000','3.0s','','','60s','Body') 
Spells[idx++]=new spellPT("Spore Emitter",14,187130,187,"-11% PEN ",187,"24  & 5/P",'1000','3.0s','','','60s','Body') 
Spells[idx++]=new spellPT("Spore Vent",19,187130,187,"-13% PEN ",187,"31  & 7/P",'1000','3.0s','','','60s','Body') 
Spells[idx++]=new spellPT("Spore Jet",28,187130,187,"-15% PEN ",187,"42  & 10/P",'1000','3.0s','','','60s','Body') 
Spells[idx++]=new spellPT("Spore Erupter",37,187130,187,"-17% PEN ",187,"52  & 13/P",'1000','3.0s','','','60s','Body') 
Spells[idx++]=new spellPT("Spore Cannon",46,187130,187,"-20% PEN ",187,"61  & 16/P",'1000','3.0s','','','60s','Body') 
Lines[187131]=new linePT('Fire and Forget Turret (Pulsing PBAOE Damage Debuff)','Turret which, while active, casts a pulsing AOE spell around it which debuffs the melee damage (DPS) of all hostile targets within its range.',187,0) 
Spells[idx++]=new spellPT("Sporespawn Seedling",3,187131,187,"-5% PEN ",187,"7  & 2/P",'1000','2.0s','350','','15s (pulse)','Body') 
Spells[idx++]=new spellPT("Sporespawn Sapling",8,187131,187,"-7% PEN ",187,"15  & 3/P",'1000','2.0s','350','','15s (pulse)','Body') 
Spells[idx++]=new spellPT("Sporespawn Youngling",15,187131,187,"-9% PEN ",187,"25  & 6/P",'1000','2.0s','350','','15s (pulse)','Body') 
Spells[idx++]=new spellPT("Sporespawn Youth",25,187131,187,"-11% PEN ",187,"39  & 9/P",'1000','2.0s','350','','15s (pulse)','Body') 
Spells[idx++]=new spellPT("Sporespawn",35,187131,187,"-13% PEN ",187,"50  & 12/P",'1000','2.0s','350','','15s (pulse)','Body') 
Spells[idx++]=new spellPT("Aged Sporespawn",41,187131,187,"-15% PEN ",187,"56  & 14/P",'1000','2.0s','350','','15s (pulse)','Body') 
Spells[idx++]=new spellPT("Elder Sporespawn",50,187131,187,"-17% PEN ",187,"65  & 17/P",'1000','2.0s','350','','15s (pulse)','Body') 
Lines[187132]=new linePT('Controllable Turret (Damage and Snare)','Turret which acts as a pet, controllable by the caster. This turret casts spells which do damage.  Target\'s movement speed is also slowed by the given percentage, which gives the caster more time before the target closes to melee range.',187,0) 
Spells[idx++]=new spellPT("Grove's Assailant",2,187132,187,"9  D 40% ",187,"5 PP",'1000','2.5s','','','30s','Body') 
Spells[idx++]=new spellPT("Grove's Hunter",6,187132,187,"25  D 40% ",187,"12 PP",'1000','2.5s','','','30s','Body') 
Spells[idx++]=new spellPT("Grove's Eliminator",11,187132,187,"40  D 40% ",187,"20 PP",'1000','2.5s','','','30s','Body') 
Spells[idx++]=new spellPT("Grove's Enforcer",17,187132,187,"64  D 40% ",187,"28 PP",'1000','2.5s','','','30s','Body') 
Spells[idx++]=new spellPT("Grove's Agent",22,187132,187,"80  D 40% ",187,"35 PP",'1000','2.5s','','','30s','Body') 
Spells[idx++]=new spellPT("Grove's Inquisitor",29,187132,187,"108  D 40% ",187,"43 PP",'1000','2.5s','','','30s','Body') 
Spells[idx++]=new spellPT("Grove's Executioner",36,187132,187,"131  D 40% ",187,"51 PP",'1000','2.5s','','','30s','Body') 
Spells[idx++]=new spellPT("Grove's Assassin",45,187132,187,"164  D 40% ",187,"60 PP",'1000','2.5s','','','30s','Body') 
Lines[187128]=new linePT('Bomber (AOE Armor Debuff)','Spell creates a \"bomber\" which flies to the target and then explodes, debuffing the armor absorption (ABS) of all hostile targets over a given area.',187,0) 
Spells[idx++]=new spellPT("Dancing Spark",5,187128,187,"-5% ABS ",187,"4",'300','','350','','60s','Body') 
Spells[idx++]=new spellPT("Dancing Gleam",10,187128,187,"-7% ABS ",187,"6",'300','','350','','60s','Body') 
Spells[idx++]=new spellPT("Dancing Glint",16,187128,187,"-9% ABS ",187,"10",'300','','350','','60s','Body') 
Spells[idx++]=new spellPT("Dancing Flame",24,187128,187,"-11% ABS ",187,"15",'300','','350','','60s','Body') 
Spells[idx++]=new spellPT("Dancing Light",33,187128,187,"-13% ABS ",187,"21",'300','','350','','60s','Body') 
Spells[idx++]=new spellPT("Dancing Flare",43,187128,187,"-15% ABS ",187,"27",'300','','350','','60s','Body') 
Lines[187129]=new linePT('Bomber (AOE Root)','Spell creates a \"bomber\" which flies to the target and then explodes, effectively immobilizing all targets (loses 99% of possible movement speed) within the spell\'s radius for the duration of the spell. If any damage is done to the target, the spell will break.',187,0) 
Spells[idx++]=new spellPT("Constraining Spirit",12,187129,187,"99% 32 sec ",187,"8 PP",'300','','350','','32s','Body') 
Spells[idx++]=new spellPT("Entangling Spirit",18,187129,187,"99% 41 sec ",187,"11 PP",'300','','350','','41s','Body') 
Spells[idx++]=new spellPT("Grasping Spirit",26,187129,187,"99% 52 sec ",187,"16 PP",'300','','350','','52s','Body') 
Spells[idx++]=new spellPT("Constricting Spirit",34,187129,187,"99% 63 sec ",187,"21 PP",'300','','350','','63s','Body') 
Spells[idx++]=new spellPT("Binding Spirit",44,187129,187,"99% 75 sec ",187,"28 PP",'300','','350','','75s','Body') 
Lines[185133]=new linePT('Bomber (Heal Turret)','Spell creates a \"bomber\" which flies to the target turret and casts a healing spell.',185,0) 
Spells[idx++]=new spellPT("Healing Spirit",1,185133,185,"11 HP ",185,"2 PP",'300','3.0s','','','20s','') 
Spells[idx++]=new spellPT("Mending Spirit",3,185133,185,"21 HP ",185,"3 PP",'300','3.0s','','','20s','') 
Spells[idx++]=new spellPT("Reviving Spirit",7,185133,185,"41 HP ",185,"5 PP",'300','3.0s','','','20s','') 
Spells[idx++]=new spellPT("Soothing Spirit",12,185133,185,"66 HP ",185,"8 PP",'300','3.0s','','','20s','') 
Spells[idx++]=new spellPT("Meliorating Spirit",18,185133,185,"96 HP ",185,"11 PP",'300','3.0s','','','20s','') 
Spells[idx++]=new spellPT("Restorative Spirit",25,185133,185,"131 HP ",185,"15 PP",'300','3.0s','','','20s','') 
Spells[idx++]=new spellPT("Ministering Spirit",33,185133,185,"171 HP ",185,"21 PP",'300','3.0s','','','20s','') 
Spells[idx++]=new spellPT("Rejuvenating Spirit",43,185133,185,"221 HP ",185,"27 PP",'300','3.0s','','','20s','') 
Lines[185134]=new linePT('Bomber (Regen)','Spell creates a \"bomber\" which flies to the target and casts a regeneration spell that causes it and others around it to heal faster.',185,0) 
Spells[idx++]=new spellPT("Spirit of Remedy",4,185134,185,"5 HP Regen ",185,"3 PP",'300','3.0s','350','','60s','') 
Spells[idx++]=new spellPT("Spirit of Betterment",9,185134,185,"6 HP Regen ",185,"6 PP",'300','3.0s','350','','60s','') 
Spells[idx++]=new spellPT("Spirit of Relief",16,185134,185,"7 HP Regen ",185,"10 PP",'300','3.0s','350','','60s','') 
Spells[idx++]=new spellPT("Spirit of Regeneration",28,185134,185,"8 HP Regen ",185,"17 PP",'300','3.0s','350','','60s','') 
Spells[idx++]=new spellPT("Spirit of Replenishing",37,185134,185,"9 HP Regen ",185,"23 PP",'300','3.0s','350','','60s','') 
Spells[idx++]=new spellPT("Spirit of Nourishing",47,185134,185,"10 HP Regen ",185,"30 PP",'300','3.0s','350','','60s','') 
Lines[185136]=new linePT('Fire and Forget Turret (Buff Elemental Resistances)','Turret which, while active, casts spells that improve resistance to Cold, Matter and Heat magic at all friendly targets within its range.',185,0) 
Spells[idx++]=new spellPT("Vent of Elemental Resistance",2,185136,185,"+3 ELEMENTAL ",185,"5 PP",'1500','','350','','15s','') 
Spells[idx++]=new spellPT("Vent of Elemental Protection",10,185136,185,"+6 ELEMENTAL ",185,"18 PP",'1500','','350','','15s','') 
Spells[idx++]=new spellPT("Vent of Elemental Guarding",24,185136,185,"+9 ELEMENTAL ",185,"37 PP",'1500','','350','','15s','') 
Spells[idx++]=new spellPT("Vent of Elemental Shielding",42,185136,185,"+12 ELEMENTAL ",185,"57 PP",'1500','','350','','15s','') 
Lines[185135]=new linePT('Fire and Forget Turret (Buff Physical Resistances)','Turret which, while active, casts spells that improve resistance to Spirit, Energy and Body magic at all friendly targets within its range.',185,0) 
Spells[idx++]=new spellPT("Vent of Physical Resistance",5,185135,185,"+3 PHYSICAL ",185,"10 PP",'1500','','350','','15s','') 
Spells[idx++]=new spellPT("Vent of Physical Protection",17,185135,185,"+6 PHYSICAL ",185,"28 PP",'1500','','350','','15s','') 
Spells[idx++]=new spellPT("Vent of Physical Guarding",32,185135,185,"+9 PHYSICAL ",185,"47 PP",'1500','','350','','15s','') 
Spells[idx++]=new spellPT("Vent of Physical Shielding",50,185135,185,"+12 PHYSICAL ",185,"65 PP",'1500','','350','','15s','') 
Lines[185010]=new linePT('Bladeturn (Self)','A \"bubble\" that absorbs the damage of a single melee hit. Assassin critical strikes and attacks by very high level creatures will ignore a bladeturn bubble.',185,0) 
Spells[idx++]=new spellPT("Shield of Wood",19,185010,185,"",185,"8% ",'','4.0s','','','Special','') 
Lines[185005]=new linePT('Absorb (Self)','Adds to the target\'s absorption (ABS) factor, resulting in better protection against melee attacks.',185,0) 
Spells[idx++]=new spellPT("Protecting Spirit",30,185005,185,"5% ",185,"19 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Guardian Spirit",41,185005,185,"10% ",185,"26 PP",'','3.0s','','','20m','') 
Lines[188112]=new linePT('Damage (Pet PBAOE)','Target takes damage. Damage done is of the spell\'s given damage type. Spell affects everyone in the immediate radius of the caster\'s pet, and does less damage the further away they are from the caster\'s pet.',188,0) 
Spells[idx++]=new spellPT("Briar Burst",1,188112,188,"5  D ",188,"2 PP",'1000','','350','','','Matter') 
Spells[idx++]=new spellPT("Briar Salvo",3,188112,188,"16  D ",188,"3 PP",'1000','','350','','','Matter') 
Spells[idx++]=new spellPT("Briar Shower",6,188112,188,"31  D ",188,"4 PP",'1000','','350','','','Matter') 
Spells[idx++]=new spellPT("Briar Cloud",9,188112,188,"46  D ",188,"6 PP",'1000','','350','','','Matter') 
Spells[idx++]=new spellPT("Briar Discharge",13,188112,188,"62  D ",188,"8 PP",'1000','','350','','','Matter') 
Spells[idx++]=new spellPT("Briar Eruption",17,188112,188,"81  D ",188,"10 PP",'1000','','350','','','Matter') 
Spells[idx++]=new spellPT("Briar Barrage",22,188112,188,"102  D ",188,"13 PP",'1000','','350','','','Matter') 
Spells[idx++]=new spellPT("Briar Explosion",29,188112,188,"137  D ",188,"18 PP",'1000','','350','','','Matter') 
Spells[idx++]=new spellPT("Briar Detonation",39,188112,188,"183  D ",188,"25 PP",'1000','','350','','','Matter') 
Spells[idx++]=new spellPT("Briar Storm",48,188112,188,"225  D ",188,"31 PP",'1000','','350','','','Matter') 
Lines[188140]=new linePT('Controllable Turret (Tank)','Turret which acts as a pet, controllable by the caster. This turret casts spells which attempt to \"taunt\" creatures to it, where it will then engage them in melee.',188,0) 
Spells[idx++]=new spellPT("Battle Messenger",5,188140,188,"5.2 ",188,"10 PP",'1000','3.0s','','','Special','') 
Spells[idx++]=new spellPT("Battle Crier",10,188140,188,"10.9 ",188,"18 PP",'1000','3.0s','','','Special','') 
Spells[idx++]=new spellPT("Battle Herald",16,188140,188,"18.4 ",188,"27 PP",'1000','3.0s','','','Special','') 
Spells[idx++]=new spellPT("Battle Harbinger",23,188140,188,"28 ",188,"36 PP",'1000','3.0s','','','Special','') 
Spells[idx++]=new spellPT("War Messenger",30,188140,188,"38.7 ",188,"45 PP",'1000','3.0s','','','Special','') 
Spells[idx++]=new spellPT("War Crier",37,188140,188,"50.3 ",188,"52 PP",'1000','3.0s','','','Special','') 
Spells[idx++]=new spellPT("War Herald",49,188140,188,"72.5 ",188,"64 PP",'1000','3.0s','','','Special','') 
Lines[188138]=new linePT('Bomber (Bladeturn)','Spell creates a \"bomber\" which flies to the target and then casts a spell of short duration which will block the next melee attack. Higher levels of this spell can affect more targets.',188,0) 
Spells[idx++]=new spellPT("Woodspirit Sheath",7,188138,188,"",188,"5 PP",'300','3.0s','350','','30s','') 
Spells[idx++]=new spellPT("Woodspirit Shield",14,188138,188,"",188,"9 PP",'300','3.0s','350','','30s','') 
Spells[idx++]=new spellPT("Woodspirit Barrier",21,188138,188,"",188,"13 PP",'300','3.0s','350','','30s','') 
Spells[idx++]=new spellPT("Woodspirit Guard",28,188138,188,"",188,"17 PP",'300','3.0s','350','','30s','') 
Spells[idx++]=new spellPT("Woodspirit Wall",36,188138,188,"",188,"23 PP",'300','3.0s','350','','30s','') 
Spells[idx++]=new spellPT("Woodspirit Seal",42,188138,188,"",188,"27 PP",'300','3.0s','350','','30s','') 
Lines[188021]=new linePT('Bomber (Buff Armor, Short Duration)','Spell creates a \"bomber\" which flies to the target and then casts a spell improving the target\'s armor absorption (ABS).',188,0) 
Spells[idx++]=new spellPT("Guardian Emissary",15,188021,188,"5% ",188,"9 PP",'300','','','','15s','') 
Spells[idx++]=new spellPT("Protector Emissary",20,188021,188,"9% ",188,"12 PP",'300','','','','15s','') 
Spells[idx++]=new spellPT("Shielding Emissary",26,188021,188,"13% ",188,"16 PP",'300','','','','15s','') 
Spells[idx++]=new spellPT("Buffering Emissary",35,188021,188,"17% ",188,"22 PP",'300','','','','15s','') 
Spells[idx++]=new spellPT("Defending Emissary",40,188021,188,"21% ",188,"25 PP",'300','','','','15s','') 
Spells[idx++]=new spellPT("Fortifying Emissary",45,188021,188,"25% ",188,"29 PP",'300','','','','15s','') 
Lines[188137]=new linePT('Bomber (Buff Armor, Long Duration)','Spell creates a \"bomber\" which flies to the target and then casts a spell improving the target\'s armor absorption (ABS).',188,0) 
Spells[idx++]=new spellPT("Essence of the Tree",32,188137,188,"3% ",188,"20 PP",'300','3.0s','','','10m','') 
Spells[idx++]=new spellPT("Essence of the Grove",38,188137,188,"6% ",188,"24 PP",'300','3.0s','','','10m','') 
Spells[idx++]=new spellPT("Essence of the Forest",46,188137,188,"9% ",188,"30 PP",'300','3.0s','','','10m','') 
Lines[188139]=new linePT('Fire and Forget Turret (Ablative Armor)','Turret which, while active, casts spells that add to the target\'s hit points temporarily (which are used to absorb damage, up to 25% of each individual hit) at all friendly targets within its range.',188,0) 
Spells[idx++]=new spellPT("Ligneous Sheath",12,188139,188,"10 HP ",188,"21 PP",'1000','5.0s','','','60s','') 
Spells[idx++]=new spellPT("Ligneous Shield",18,188139,188,"20 HP ",188,"30 PP",'1000','5.0s','','','60s','') 
Spells[idx++]=new spellPT("Ligneous Barrier",25,188139,188,"30 HP ",188,"39 PP",'1000','5.0s','','','60s','') 
Spells[idx++]=new spellPT("Ligneous Guard",34,188139,188,"40 HP ",188,"49 PP",'1000','5.0s','','','60s','') 
Spells[idx++]=new spellPT("Ligneous Wall",43,188139,188,"50 HP ",188,"58 PP",'1000','5.0s','','','60s','') 
Spells[idx++]=new spellPT("Ligneous Seal",50,188139,188,"60 HP ",188,"65 PP",'1000','5.0s','','','60s','') 
