function solucao(produtos, valorMaximo, avaliacaoMinima) {
    // seu código aqui
        const lista = [];
        for(let item of produtos){
          if(item.valor <= valorMaximo && item.avaliacao >= avaliacaoMinima){
            lista.push(item)
          }
        } console.log(lista)
      
    }