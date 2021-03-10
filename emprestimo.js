function solucao(ganhos, serasaScore, mesesParaPagar){
    //seu código aqui
    let juros = 0 
    if(serasaScore < 300){
      juros = 3
    } else if (serasaScore < 700){
      juros = 9
    } else {
      juros = 15
    }
  
    const salario = ganhos * 3
    const salarioJuros = ganhos * (juros/100)
    const divisao = (salario + salarioJuros) / mesesParaPagar
  
    console.log(divisao)
  }