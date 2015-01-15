var times2;
$(document).ready(function(){
	
	//setRules($("#rules").text());
	
	$("#1step").click(function(){
		
		
		nextStep();
		
		
		});
	$("#setTape").click(function(){
		
		
		$("#machine").text($("#tapeChanger").val());
		
		
	});
	$("#set").click(function(){
		
		
		setRules($("textarea").val());
		
		
		});
		
	$("#autoStep").click(function(){
		
		
		times2 = setInterval(function () {nextStep()}, 100);
		
		
	});
	$("#stopStep").click(function(){
		
		
	clearInterval(times2);
		
		
	});
	
	});
var rules = [];
var currentState = 0;
var currentPosition = 0;
var counter = 0;
//var tape = $("textarea").text();
//var len = tape.length;

function nextStep(){
	
	//var tape1 = $("#machine").text();
	//console.log(tape1.length);
	//console.log(currentPosition);
	
	for(var i = 0;i < rules.length;i++){
		if(rules[i][0] == currentState && rules[i][0] != "h" && rules[i][1] == getCurrentPositionNumber() ){
			
			setCurrentPositionNumber(rules[i][2]);
			if(rules[i][3] == "r"){
				var tape1 = $("#machine").text();
				if(currentPosition == (tape1.length-1)){
					
					////alert("UGUALE");
					$("#machine").text(tape1+"B");
					////currentPosition++;
					//console.log("tape+1");
				}
				currentPosition++;
				counter++
				//$("#machine").text(tape1+"0");
				//currentPosition++;
				
			}else{
				console.log(currentPosition);
				var tape1 = $("#machine").text();
				if(currentPosition == 0){
						
						////alert("UGUALE");
						$("#machine").text("B"+tape1);
						currentPosition++;
						//console.log("tape-1");
					}
				currentPosition--;
				counter++;
				
			}
			
			currentState = rules[i][4];
			$("#counter").text(counter);
			
			return;
			
		}
		
	}
}
function setRules(textRules){
	/*
	var rule = [0,0,1,"r",0];
	var rule2 = [0,3,5,"l",0];
	var rule3 = [0,1,6,"l",1];
	var rule4 = [1,1,7,"l",0];
	//rules.push(rule);
	//rules.push(rule2);
	//rules.push(rule3);
	//rules.push(rule4);
	*/
	rules = [];
	var splitted = textRules.split("\n");
	for(var i = 0; i < splitted.length; i++){
		var splitArray = splitted[i].split(" ");
		rules.push(splitArray);
	}
	console.log(rules);
	alert("Rules Set")
	
	
	
}
function getCurrentPositionNumber(){
	var tape1 = $("#machine").text();
	var strChars = tape1.split("");
	//console.log(strChars);
	return strChars[currentPosition];
}
function setCurrentPositionNumber(num){
	var tape2 = $("#machine").text();
	var strChars = tape2.split("");
	strChars[currentPosition] = ""+num;
	var finalString = strChars.join("");
	//console.log(finalString);
	$("#machine").text(finalString);
	//console.log(strChars);
	//return strChars[currentPosition];
}

