

let inksForTagsDiv = []

/* ======================- Criação da cor ======================- */
function char() {
  let chars = 'abcdef'
  let numbers = '0123456789'
  let hexadecimal = []
  
  /*
  RESULTADO: [a, b, c, d, e, f, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  1) Se feito manualmente, ao salvar, o array formata uma string por
  linha (não desejado)
  */
  for (let index of chars) {
    hexadecimal.push(index)
  }
  
  for (let index of numbers) {
    hexadecimal.push(index)
  }

  return hexadecimal[Math.floor(Math.random() * (hexadecimal.length - 0) + 0)]
}

function rgbHexa() {
  return `#${char()}${char()}${char()}${char()}${char()}${char()}`
}
/* ============================================================== */

// tag que receberá as tags p
const sectionTag = document.querySelector('.section-colors')

// Criação dos elementos via loop e indexação
for (i = 1; i < 21; i++) {
  let newTagDiv = document.createElement('div')
  newTagDiv.className = 'color-code'
  sectionTag.appendChild(newTagDiv)
}

// Captura dos elementos p criados
let tagsDiv = document.querySelectorAll('.color-code')

// Inserindo num array uma cor hexadecimal p/ uso abaixo
for (i = 0; i < tagsDiv.length; i++) {
  inksForTagsDiv.push(rgbHexa())
}

// Atribuindo propriedades a todos os elementos "p" de forma dinâmica
tagsDiv.forEach(function (eachDiv, index) {
  eachDiv.innerHTML = inksForTagsDiv[index]
  eachDiv.style.backgroundColor = inksForTagsDiv[index]
})

tagsDiv.forEach(index => {
  console.log(index.innerHTML)
})