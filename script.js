const textinput = document.getElementById('input') //salvando input do usuario

const botao = document.getElementById('botao') //pegando id do botao

const mensagem = document.getElementsByTagName('p') //pegando tag P

botao.addEventListener("click", function(){
    const valorTexto = textinput.value;
    if(valorTexto==""){
        mensagem[0].textContent = 'escreva alguma coisa'
    } else {
        mensagem[0].textContent = `voce escreveu ${valorTexto}`
        
    }
})