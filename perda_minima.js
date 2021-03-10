function solucao(precos) {
    // seu código aqui
    let menorPrejuizo = 0;
    for(i=0; i < precos.length - 1; i++) {
      for (l=i+1; l < precos.length; l++) {
        const prejuizo = precos[i] - precos[l];
  
        if (prejuizo > 0 && menorPrejuizo === 0 || prejuizo > 0 && prejuizo < menorPrejuizo) {
          menorPrejuizo = prejuizo;
        }
      }
    }
  
    console.log(menorPrejuizo)
  }