'use strict';
document.addEventListener('DOMContentLoaded', fn, false);

function fn(){
	var botones = document.getElementsByTagName('button');
	botones[0].addEventListener('click', parar_seguir, false);
	botones[1].addEventListener('click', reiniciar, false);
}

var idSI = null;

function parar_seguir(evt){
	if(idSI){
		this.firstChild.nodeValue = 'Iniciar';
		paro();
	}
	else{
		this.firstChild.nodeValue = 'Parar';
		marcha();
	}
}

function reiniciar(evt){
	var info = document.getElementById('crono');
	info.firstChild.nodeValue = '0,0';
	info.dataset.valor = '0.0';
}

function marcha(){
	if(!idSI){
		idSI = setInterval(actualizar, 1000/10)
	}
}

function paro(){
	if(idSI){
		idSI = clearInterval(idSI);
		idSI = null;
	}
}

function actualizar(){
	var info = document.getElementById('crono');
	var valor = +info.dataset.valor;/*+info.firstChild.nodeValue;*/
	valor += 0.1;
	/*info.firstChild.nodeValue = valor.toFixed(1);*/
	info.dataset.valor = valor.toFixed(1);
	info.firstChild.nodeValue = (+info.dataset.valor).toLocaleString('es-ES', {minimumFractionDigits:1});
}