function solucao(velocidade, aceleracao, distanciaObjeto) {
    //seu código aqui
       const velo = (velocidade * velocidade)*-1;
      const acele = 2 * aceleracao;
      const derrapagem = velo/acele;
      if(distanciaObjeto > derrapagem){
        console.log('CAMINHO SEGURO')
      } else if (distanciaObjeto === derrapagem){
        console.log('NAO ACELERE')
      }else {
        console.log('COLISAO A FRENTE')
        }
  }