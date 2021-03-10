function solucao(stringCorrompida) {
    // seu código aqui
  let dadoPurificado = stringCorrompida
  dadoPurificado = dadoPurificado.replace('!','')
  dadoPurificado = dadoPurificado.replace('@','')
  dadoPurificado = dadoPurificado.replace('#','')
  dadoPurificado = dadoPurificado.replace('$','')
  dadoPurificado = dadoPurificado.replace('%','')
  dadoPurificado = dadoPurificado.replace('&','')
  dadoPurificado = dadoPurificado.replace('*','')
  dadoPurificado = dadoPurificado.replace('(','')
  dadoPurificado = dadoPurificado.replace(')','')
  dadoPurificado = dadoPurificado.replace('.','')
  console.log(dadoPurificado);
  
}
