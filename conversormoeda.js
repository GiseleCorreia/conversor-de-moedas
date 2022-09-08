function converterDolar() {
  var valorElemento = document.getElementById('valor')
  var valor = valorElemento.value
  var valorReal = parseFloat(valor)

  var valorDolar = valorReal / 5.25
  var valorDolartoFixed = valorDolar.toFixed(2)

  var elementoConvertido = document.getElementById('valorConvertido')
  var valorConvertido = 'O seu dindin vale US$ ' + valorDolartoFixed
  elementoConvertido.innerHTML = valorConvertido
}

function converterEuro() {
  var valorElemento = document.getElementById('valor')
  var valor = valorElemento.value
  var valorReal = parseFloat(valor)

  var valorEuro = valorReal / 5.25
  var valorEurotoFixed = valorEuro.toFixed(2)

  var elementoConvertido = document.getElementById('valorConvertido')
  var valorConvertido = 'O seu dindin vale € ' + valorEurotoFixed
  elementoConvertido.innerHTML = valorConvertido
}

function converterBiticoin() {
  var valorElemento = document.getElementById('valor')
  var valor = valorElemento.value
  var valorReal = parseFloat(valor)

  valorBiticoin = valorReal / 101392.51
  valorBiticointoFixed = valorBiticoin.toFixed(2)

  var elementoConvertido = document.getElementById('valorConvertido')
  var valorConvertido = 'O seu dindin vale ' + valorBiticointoFixed + ' BTC'
  elementoConvertido.innerHTML = valorConvertido
}
