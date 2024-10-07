// const btnGreat = document.querySelector('#btnGreat')

// btnGreat.addEventListener('click', great)

// function great () {
  //   alert(username.value)
  // }
  
  const username = document.getElementById('nombre')
  const data1 = document.getElementById('nota1')
  const data2 = document.getElementById('nota2')
  const data3 = document.getElementById('nota3')
  const btnCalculate = document.getElementById('btn-calculate')
  const response = document.getElementById('resultado')
  const menor = document.getElementById('menor')
  
  btnCalculate.addEventListener('click', calculateNote )
  
  function calculateNote(event) {
    event.preventDefault()

    let note1 = Number(data1.value)        
    let note2 = Number(data2.value)        
    let note3 = Number(data3.value)
    
    let result = ((note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4)).toFixed(2)
    response.style.color = 'green'
    response.textContent = `SR/SRA/SRE ${username.value} su nota definitiva es: ${result}` 
    response.style.color = 'black'
    response.textContent =  `Este usuario perdio la materia ${username.value} su nota definitiva es: ${result}`
    if (result < 3.5){
      response.style.color = 'black'
      response.textContent =  `Este usuario perdio la materia ${username.value} su nota definitiva es: ${result}`}
    else if (result >= 3.5 && result <= 4.5 ){
        response.style.color = 'orange'
        response.textContent =  `Este usuario gano la materia ${username.value} su nota definitiva es: ${result}`
  }
  else if (result > 4.5){
    response.style.color = 'green'
        response.textContent =  `Este usuario es sobresaliente ${username.value} su nota definitiva es: ${result}`
  }

  btnPredecir.addEventListener('click', calcularPrediccion)

  function calcularPrediccion() {
      let note1 = Number(data1.value)
      let note2 = Number(data2.value)
      let notaDefinitivaDeseada = ((3.5 - (note1 * 0.3 + note2 * 0.3)) / 0.4).toFixed(2)

    
     if (notaDefinitivaDeseada > 5) {
      response.textContent = `para obetener la nota minima (3.5) debe de sacar mas de 5, lo cual es imposible`
      response.style.color='red'
     }else{
      response.textContent= `para obtener la nota minima(3.5) debe de sacar al menos ${notaDefinitivaDeseada}`
      response.style.color = 'green'
     }

  }
  }

