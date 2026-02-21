// 1. Selecionar os elementos que vamos usar
const botaoModoNoturno = document.getElementById('botao-modo-noturno');
const corpoDaPagina = document.body;

// 2. Adicionar um "ouvinte de evento" para o clique no botão
botaoModoNoturno.addEventListener('click', function() {
    
    // 3. Ação a ser executada quando o botão for clicado:
    //    A função toggle faz o trabalho pesado:
    //    - Se a classe 'modo-noturno' NÃO existe no body, ela adiciona.
    //    - Se a classe 'modo-noturno' JÁ existe no body, ela remove.
    corpoDaPagina.classList.toggle('modo-noturno');

});
