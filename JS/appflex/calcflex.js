/**
* js - aula 5: calculadora flex
*@autor professor jose de assis
*/

var etanol,gasolina;

function calcular(){
	etanol = parseFloat(frmFlex.txtEtanol.value.replace(",",".")); 
	gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",",".")); 
	if (etanol< 0.7 * gasolina){
		document.getElementById("status").src="etanol.jpg";
	
	}else{
		document.getElementById("status").src="gasolina.jpg";
	}
	
	
}

function resetar (){
	
document.getElementById("status").src="neutro.png";	
}
	
	
	
