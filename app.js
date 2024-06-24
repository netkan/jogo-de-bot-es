let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do desafio!'

function consolemensagem(){
    console.log ('o botão foi clicado!')
}

function alerta(){
    alert('Eu amo JS 😁')
}

function cidade(){
  let suacidade = prompt('Diga o nome de uma cidade')
  alert(`Estive em ${suacidade} e lembrei de você 👄`)
}

function soma(){
    let n1 = Number(prompt('Diga um número'))
    let n2 = Number(prompt('Diga outro número'))
    resultado = n1 + n2
    alert(`O resultado da soma de ${n1}  e de ${n2} é ${resultado}`)
  }
 
  function sim(){
    alert(`Fico feliz!!!!!!`)
  }

  function nao(){
    prompt(`Tem alguma dica para melhorar`)
  }