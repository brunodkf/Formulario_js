let botaoAdd = document.querySelector('#buscar-paciente');

botaoAdd.addEventListener('click', function(){
    console.log('buscando...')
    
    var xhr =  new XMLHttpRequest(); //objeto javascript responsável por fazer requisicoes http

    xhr.open('get','https://api-pacientes.herokuapp.com/pacientes'); //xhr.open('Metodo', 'http:// endereco') Envia o pedido pro servidor especificado e diz qual o metodo que vai usar
   
    xhr.addEventListener('load', function(){

        let erroAjax = document.querySelector('#erro-ajax');

        if(xhr.status == 200){
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            console.log(pacientes);

            pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);
            });

            erroAjax.classList.add('invisivel');
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);

            
            erroAjax.classList.remove('invisivel');
        }
       
    });

    xhr.send();
    
});