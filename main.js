'use strict'
//variables
let somaXBurguer = 0
let somaXSalada = 0
let somaXBacon = 0
let vendaXBurguer = 0.0
let vendaXSalada = 0.0
let vendaXBacon = 0.0

let btnVendas = document.getElementById('vendas')
let btnEstorno = document.getElementById('estorno')
let btnPlanilha = document.getElementById('export')

//events
btnVendas.addEventListener('click', venda, false)
btnEstorno.addEventListener('click', estorno, false)
btnPlanilha.addEventListener('click', planilha, false)

//functions
function venda(e) {
  if (document.getElementById('XBurguer').checked) {
    somaXBurguer = somaXBurguer + 1
    vendaXBurguer = vendaXBurguer + 20.0
    document.getElementById('resultadoXBurguer').innerHTML = somaXBurguer
    document.getElementById('vendaXBurguer').innerHTML =
      vendaXBurguer.toFixed(2)
  } else if (document.getElementById('XSalada').checked) {
    somaXSalada = somaXSalada + 1
    vendaXSalada = vendaXSalada + 22.5
    document.getElementById('resultadoXSalada').innerHTML = somaXSalada
    document.getElementById('vendaXSalada').innerHTML = vendaXSalada.toFixed(2)
  } else if (document.getElementById('XBacon').checked) {
    somaXBacon = somaXBacon + 1
    vendaXBacon = vendaXBacon + 25.0
    document.getElementById('resultadoXBacon').innerHTML = somaXBacon
    document.getElementById('vendaXBacon').innerHTML = vendaXBacon.toFixed(2)
  }
}

function estorno(e) {
  if (document.getElementById('XBurguer').checked) {
    somaXBurguer = somaXBurguer - 1
    vendaXBurguer = vendaXBurguer - 20.0
    if (somaXBurguer < 0) {
      somaXBurguer = 0
      vendaXBurguer = 0.0
    }
    document.getElementById('resultadoXBurguer').innerHTML = somaXBurguer
    document.getElementById('vendaXBurguer').innerHTML =
      vendaXBurguer.toFixed(2)
  } else if (document.getElementById('XSalada').checked) {
    somaXSalada = somaXSalada - 1
    vendaXSalada = vendaXSalada - 22.5
    if (somaXSalada < 0) {
      somaXSalada = 0
      vendaXSalada = 0.0
    }
    document.getElementById('resultadoXSalada').innerHTML = somaXSalada
    document.getElementById('vendaXSalada').innerHTML = vendaXSalada.toFixed(2)
  } else if (document.getElementById('XBacon').checked) {
    somaXBacon = somaXBacon - 1
    vendaXBacon = vendaXBacon - 25.0
    if (somaXBacon < 0) {
      somaXBacon = 0
      vendaXBacon = 0.0
    }
    document.getElementById('resultadoXBacon').innerHTML = somaXBacon
    document.getElementById('vendaXBacon').innerHTML = vendaXBacon.toFixed(2)
  }
}

function planilha(e) {
  TableToExcel.convert(document.getElementById('table'))
}
