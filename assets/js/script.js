let original = document.getElementById("original");
let selecionarOpcoes = document.getElementById("efeito");
let copiar = document.getElementById("copiar");



let contador;
let opcao;
let convertido;
Converter();

original.addEventListener("keyup", function(){
	Converter();
});

selecionarOpcoes.addEventListener("click", function(){
	Converter();
});

copiar.addEventListener("click", function(){
	Copiar();
});


function Converter(){
	contador = parseInt(original.value.length);
	document.getElementById("telao").innerHTML = contador;

	opcao = selecionarOpcoes.options[selecionarOpcoes.selectedIndex].text;
	if(opcao == 'Maiúsculas'){
		convertido = original.value.toUpperCase();
		document.getElementById("modificado").innerHTML = convertido;
	}else{
		convertido = original.value.toLowerCase();
		document.getElementById("modificado").innerHTML = convertido;
	}
};


function Copiar(){
	let Modificado = document.querySelector('#modificado');
    navigator.clipboard.writeText(Modificado.textContent);  
}

