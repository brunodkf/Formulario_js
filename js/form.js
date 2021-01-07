
let botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener('click', function(event){
    
     event.preventDefault(); //prevenir o comportamento padrão
     
     let form= document.querySelector('.form-adiciona');
     // Pega as informações do formulário
     let paciente = pegaInformacoesDoForm(form);
    

     //Monta TR

    let erros = validaPaciente(paciente);
    console.log(erros);

    if(erros.length > 0){
          exibeMensagemDeErro(erros);
          return;
    }
     
    // Adicionando o paciente na Tabela
    adicionaPacienteNaTabela(paciente);


     form.reset(); //Reseta o Formulário sem recarregar a page
     var mensagemErro = document.querySelector('.mensagens-erro');
     mensagemErro.innerHTML = '';



}); //addEventListener = Escuta um Evento (click do mouse, dois clicks e etc..)


function adicionaPacienteNaTabela(paciente){
    let pacienteTr = montaTr(paciente);
    let tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
}


function exibeMensagemDeErro(erros){
    var ul = document.querySelector('.mensagens-erro');

    ul.innerHTML = ''; // InnerHTML permite alterar um conteúdo interno de um HTML, neste caso (as li), apagando o conteúdo pra que um novo possa ser escrito

    erros.forEach(function(erro){   //ForEach é um for que percorre todos os itens de um Array, no caso, fazendo a função declarada
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    })
}


function pegaInformacoesDoForm(form){

    let paciente = {

        nome: form.nome.value,      //dentro de um objeto, usa : pra dar valor às caracteristicas
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)

    }

  return paciente;
}


function montaTr(paciente){
        
    //Cria a TR e as TDs
    let pacienteTr = document.createElement('tr'); //tr
    pacienteTr.classList.add('paciente');
    
    let nomeTd = montaTd(paciente.nome, 'info-nome');
    let pesoTd = montaTd(paciente.peso, 'info-peso');
    let alturaTd = montaTd(paciente.altura, 'info-altura');
    let gorduraTd = montaTd(paciente.gordura, 'info-gordura');
    let imcTd = montaTd(paciente.imc, 'info-imc');

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;


}

function montaTd(dado , classe){

    let td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;

}

function validaPaciente(paciente){

    let erros = [];

    if(!validaPeso(paciente.peso)){
       erros.push('Peso é inválido!');
    }

    if(!validaAltura(paciente.altura)){
        erros.push('Altura é Inválida!');
    }

    if(paciente.nome.length == 0){
        erros.push('O Nome não pode ser em branco');
    }
    if(paciente.gordura.length == 0){
        erros.push('Gordura não pode ser em branco');
    }

    return erros;
}

