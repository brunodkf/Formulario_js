let pacientes =  document.querySelectorAll('.paciente');
 

let tabela = document.querySelector('table');

tabela.addEventListener('dblclick', function(event){
    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode;
     event.target.parentNode.classList.add('fadeOut');

     setTimeout(function(){         //setTimeOut = Espera um pouquinho pra executar o código que eu to te dando
         event.target.parentNode.remove();
     }, 500); //setTimeOut recebe tempo em milesegundos, 1s = 1000ms
     
   
});

// pacientes.forEach(function(paciente){
//     paciente.addEventListener('dblclick', function(){     //dblclick = double click
//         this.remove();     // Duas anotações: ( this. ) está relacionado com o elemento que vai sofrer a ação, ou seja, nesse paciente específico que estamos trabalhando
//                             // remove() remove um elemento do DOM; paciente.remove(), por exemplo
//     });
// })
// console.log(pacientes)