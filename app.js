let listaDeNumerosSorteados = []
let numerosSorteadosRecentemente = [] // Armazena os números que foram anteriormente sorteados.

function exibirTextoNaTela(tag, texto) {
    let campo = document.getElementById(tag)
    campo.innerHTML = texto
}

function mensagemInicial() {
    exibirTextoNaTela('resultado', 'Números sorteados:  nenhum até agora')
}

mensagemInicial()

// Sorteia os números
function sortear() {
    let quantidade = document.getElementById('quantidade').value
    let numeroMinimo = document.getElementById('de').value
    let numeroMaximo = document.getElementById('ate').value

    // Validar entrada
    if (isNaN(quantidade) || isNaN(numeroMinimo) || isNaN(numeroMaximo) || quantidade <= 0 || numeroMinimo > numeroMaximo) {
        alert('Por favor, insira valores válidos.')
        return
    }

    // Insere os resultados na lista
    while (listaDeNumerosSorteados.length < quantidade) {
        let resultado = parseInt(Math.random() * numeroMaximo + numeroMinimo)
        if (!listaDeNumerosSorteados.includes(resultado)) {
            listaDeNumerosSorteados.push(resultado)
        }
    }
    numerosSorteadosRecentemente = [...listaDeNumerosSorteados]// Antes de limpar a lista, armazena os valores anteriores para mostrar ao usuário os últimos números sorteados
    let frasePlural = quantidade > 1 ? 'Os números sorteados foram: ' : 'O número sorteado foi '
    exibirTextoNaTela('resultado', `${frasePlural} ${listaDeNumerosSorteados.join(', ')}`)
    listaDeNumerosSorteados = [] // Limpa a lista  
    let botaoReiniciar = document.getElementById('btn-reiniciar')
    botaoReiniciar.removeAttribute('disabled')
    botaoReiniciar.className = 'container__botao'
}
// Faz com que todas as entradas sejam limpas
function limpaCampo() {
    let quantidade = document.getElementById('quantidade')
    let numeroMinimo = document.getElementById('de')
    let numeroMaximo = document.getElementById('ate')
    quantidade.value = ''
    numeroMinimo.value = ''
    numeroMaximo.value = ''
}
// Reinicia a aplicação
function reiniciar() {
    document.getElementById('btn-reiniciar').setAttribute('disabled', true)
    limpaCampo()
    let fraseUltimosNumeros = numerosSorteadosRecentemente.length > 1 ? 'Os últimos números sorteados foram: ' : 'O último número sorteado foi: '
    exibirTextoNaTela('resultado', `${fraseUltimosNumeros}${numerosSorteadosRecentemente.join(', ')}`)
}
