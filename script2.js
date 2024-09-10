const numero1 = document.getElementById('numero1')
const numero2 = document.getElementById('numero2')
const operacao = document.getElementById('operacao')
const botao = document.getElementById('botao')
const resultado = document.getElementById('resultado')

botao.addEventListener('click', function(){
    const num1 = numero1.value
    const num2 = numero2.value
    const op = operacao.value

    switch(op) {
        case 'soma': 
        resultado.textContent = parseFloat(num1) + parseFloat(num2)
        break
    
        case 'diminui': 
        resultado.textContent = parseFloat(num1) - parseFloat(num2)
        break

        case 'multiplica': 
        resultado.textContent = parseFloat(num1) * parseFloat(num2)
        break

        case 'divide': 
        resultado.textContent = parseFloat(num1) / parseFloat(num2)
        break

        default:
        resultado.textContent = "insira numeros e selecione uma opção de operação"
    
        
    }
})