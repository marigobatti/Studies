botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function(){
	
var xhr = new XMLHttpRequest();

	xhr.open("GET", "http://api-pacientes.herokuapp.com/pacie1ntes");
	
	xhr.addEventListener("load", function(){
		
		if(xhr.status == 200){
		
		var	resposta = xhr.responseText;
		var pacientes = JSON.parse(resposta);
		
		pacientes.forEach(function(paciente){
			
			adicionaPacienteTabela(paciente)
			
		});
		
		}else {
		var erroAjax = document.querySelector("#erroAjax");
		erroAjax.classList.remove("invisivel");
		}
		
	
	});
	
	xhr.send();
	
});