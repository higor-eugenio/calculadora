function acionar(valor) {
  const conteudo = document.getElementById('display').innerHTML;
  if (conteudo.length >=106)
  return;
 document.getElementById('display').innerHTML += valor;
}
 


function limparTela() {
  document.getElementById('display').innerHTML = '';
}

function apagar() {
  const expression = document.getElementById('display').innerHTML;
  document.getElementById('display').innerHTML = expression.substring(0, expression.length - 1);
}

function calcular() {
  let expressao = document.getElementById('display').innerHTML;
  if (expressao.trim() === '') {
    return;
  }
  if (expressao.includes('%')) {
    const metade = expressao.split('%');
    const percentagem = parseFloat(metade[0]);
    const num = parseFloat(metade[1]);
    const resultado = (percentagem / 100) * num;
    expressao = resultado
  }
  if (expressao.includes('/')) {
    const metade = expressao.split('/');
    const divisao = parseFloat(metade[0]);
    const num = parseFloat(metade[1]);
    const resultado = divisao / num;
    expressao = resultado.toFixed(8)
    
  }
  const resultado = eval(expressao);
  document.getElementById('display').innerHTML = resultado;
}
