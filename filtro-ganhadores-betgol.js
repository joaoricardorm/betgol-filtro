/*
### Script desenvolvido por João Ricardo
### 📞 (69) 9 9968-6727
### 📧 joaoricardo.rm@gmail.com
### 👍 https://www.facebook.com/JoaoRicardoDesignerProgramador
*/

$(document).ready(function(){

	filtro = {};

	filtro.tipo = 'ganhadores';
	filtro.coluna = 8; 

	function removeFiltro(){
		$('#resultado table tr').show();
	}
	
	function filtrar(){
	
		removeFiltro();
	
		filtro.tipo = $('#selFiltro').val();
		filtro.coluna = $('#edColuna').val();
		
		console.log(filtro);
		
		if(filtro.tipo == 'todas'){
			return;
		} else if(filtro.tipo == 'ganhadores'){
			tipo = '.btn-default, .btn-danger';
		} else if(filtro.tipo == 'perdedores'){
			tipo = '.btn-default, .btn-success';
		} else if(filtro.tipo == 'empate'){
			tipo = '.btn-success, .btn-danger';
		} 

		$('#resultado table td:nth-child('+filtro.coluna+')').find(tipo).parent().parent().hide();
	
	}
	
	$('body').on('click', '#btnFiltrar', function(){
		filtrar();
	});
	
	filtroHTML = '<div id="filtro" class="pull-right"> \
					  &nbsp;&nbsp;&nbsp; Coluna: &nbsp;&nbsp; \
					  <input type="text" id="edColuna" value="8" class="form-control mr-2 mb-2" style="width:50px; display:inline;" /> \
					  &nbsp;&nbsp;&nbsp; Filtro: &nbsp;&nbsp; \
					  <select id="selFiltro" class="btn btn-default mr-2 mb-2"> \
						<option value="todas">Todas as apostas</option> \
						<option value="ganhadores">Ganhadores</option> \
						<option value="perdedores">Perdedores</option> \
						<option value="empate">Empate</option> \
					  </select> \
					  &nbsp;&nbsp;&nbsp; \
					  <button id="btnFiltrar" class="btn btn-primary"><i class="fa fa-filter" aria-hidden="true"></i>&nbsp; Filtrar</button> \
				  </div>';
	
	$('a[data-target="#modalPesquisa"]').after(filtroHTML);
	
	

});


	