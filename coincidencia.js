function solucao(jogadas) {
    //seu código aqui
    let quant1 = 0
    let quant0 = 0
    for(i=0; i < jogadas.length; i++){
      if(jogadas[i] === 1){
        quant1 +=1
      } else {
        quant0 +=1
      }
    }
    console.log(quant1 === quant0)
  }