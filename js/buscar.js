let campoDeFiltro = document.querySelector('.filtrarTabela');
console.log(campoDeFiltro)


campoDeFiltro.addEventListener('input', function(){
    console.log(this.value);

    let pacientes = document.querySelectorAll('.paciente');

    if(this.value.length > 0){
        for(var i = 0; i < pacientes.length; i++){

        var paciente =  pacientes[i];
        var tdnome = paciente.querySelector('.info-nome');
        var nome = tdnome.textContent;
        var expressao = new RegExp(this.value, 'i') // Expressao regular, primeiro você passa o que ela vai buscar (this.value) e depois a config dela 'i' //ps: mecanismo de busca

        if(!expressao.test(nome)){  //expressao.test() chama a expressao regular e coloquei ! pra inverter o valor dela pra lógica fazer sentido
            paciente.classList.add('invisivel');
        }else{
            paciente.classList.remove('invisivel');
        }
    } 
    }else{
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove('invisivel');
        }
    }
    
   
        
    
})