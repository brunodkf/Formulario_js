let paciente = document.querySelectorAll('.paciente'); //querySelectorAll cria um array com todos os elementos dentro da class escolhida, ex: Dentro de Ul ele cria um array com todos os LI



for(var i = 0; i < paciente.length; i++ ){

    let pacientes =  paciente[i];

    let tdnome = pacientes.querySelector('.info-nome');
    let tdpeso = pacientes.querySelector('.info-peso');
    let tdaltura = pacientes.querySelector('.info-altura');
    let tdimc = pacientes.querySelector('.info-imc');

        
    let peso = tdpeso.textContent;
    let altura = tdaltura.textContent; //textContent pega o texto dentro do que foi referenciado.
    let alturaValida = validaAltura(altura);
    let pesoValido = validaPeso(peso);

    if(!pesoValido){

        console.log('Peso inválido!');
        pesoValido = false;
        tdimc.textContent = 'Peso inválido!';

        pacientes.classList.add('paciente-invalido'); // classList.add deixa eu adicionar mais uma class pra paciente  e posso modifica-la no css
        
    }

    if(!alturaValida){
        
        console.log('Altura inválida!');
        alturaValida = false;
        tdimc.textContent = 'Altura Inválida!';
        pacientes.style.backgroundColor = 'orange';
    }

    if(alturaValida && pesoValido){
        
        let imc = calculaImc(peso, altura);
            tdimc.textContent = imc;

    }

    
}



///////////////////////////////////////////////////////
    function calculaImc(peso, altura){

        let imc = 0;

        imc = peso / (altura * altura);

        return imc.toFixed(2); // toFixed = quantidade de casas decimais 
    }


    function validaPeso(peso){

        if(peso > 0 && peso < 1000){
            
            return true;
          
        }else{

            return false;
        }
    }

    function validaAltura(altura){

        if(altura > 0 && altura < 3.00){
            return true;
        }else{
            return false;
        }
    }