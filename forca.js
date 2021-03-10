
function solucao(palpite, palavra) {
    // seu código aqui
  let quantidade = 0
  for(i=0; i < palavra.length; i++){
    if(palpite === palavra[i]){
      quantidade +=1
    }
  }   console.log(quantidade)

}