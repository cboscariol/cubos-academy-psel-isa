function solucao(produtos, distanciaRestaurante, cupomDesconto, ehPrimeiraCompra) {
    // seu código aqui
    let valorFrete = distanciaRestaurante * 120
    let valor = 0
      for(const produto of produtos){
        if(produto.categoria === 'SALGADO'){
          valor += (produto.valor * 0.9) * produto.quantidade
        } else if (produto.categoria === 'BEBIDA'){
          valor += (produto.valor * 0.7) * produto.quantidade
        } else if (produto.categoria === 'DOCE'){
          valor += (produto.valor * 0.85) * produto.quantidade
        }
            } 
          
      if(ehPrimeiraCompra){
        if(cupomDesconto === 'NATALSUPREMO' && valor > 8000 ) {
          valor = valor * 0.7
          valorFrete = 0
        } else if (cupomDesconto === 'NATAL30' && valor > 6000) {
            valor = valor * 0.7
        } else if (cupomDesconto === 'NATAL20' && valor > 4500) {
          valor = valor * 0.8
        } else if (cupomDesconto === 'NATAL10' && valor > 3000) {
            valor = valor * 0.9
        }
      }
      console.log(valor + valorFrete)
  }
  