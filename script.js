function calcularResultado(numeroMaos, bbPor100, porcentagemRecebida, valorConversao) {
    const resultadoBB = (numeroMaos / 100) * bbPor100;
    const resultadoDolar = resultadoBB * valorConversao;
    const resultadoFinal = resultadoDolar * (Math.min(porcentagemRecebida, 100) / 100);
    return resultadoFinal;
  }

  function formatarDinheiro(valor) {
    return `$${valor.toFixed(2)}`;
  }

  function limitarPorcentagem(element) {
    const valor = parseFloat(element.value);
    if (!isNaN(valor) && valor > 100) {
      element.value = 100;
    }
  }

  function calcularResultadoFinal() {
    const numeroMaos = parseFloat(document.getElementById('numeroMaosInput').value);
    const bbPor100 = parseFloat(document.getElementById('bbInput').value);
    const porcentagemRecebida = parseFloat(document.getElementById('porcentagemInput').value);
    const valorConversao = parseFloat(document.getElementById('conversaoInput').value);

    if (isNaN(numeroMaos) || isNaN(bbPor100) || isNaN(porcentagemRecebida) || isNaN(valorConversao)) {
      alert('Por favor, insira valores válidos.');
      return;
    }

    if (porcentagemRecebida > 100) {
      alert('Porcentagem recebida não pode ser maior que 100%.');
      return;
    }

    const resultadoFinal = calcularResultado(numeroMaos, bbPor100, porcentagemRecebida, valorConversao);
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Valor a receber: ${formatarDinheiro(resultadoFinal)}`;
  }