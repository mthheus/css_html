//const { createElement } = require("react")

//const { createElement } = require("react")

/* MINHA FORMA
let texto = document.getElementById('texto')
let lista = []
function add() {
    let tabela = document.getElementById('tabela')
    let escolha = document.getElementById('escolha').value
    if ( escolha.length == 0 ) {
        window.alert('Preencha com algum valor.') 
    }   
     else if ( Number(escolha) > 100 || Number(escolha) < 1 ) {
        window.alert('Valor Inválido')
    } 
    else {
        document.getElementById('escolha').value = ''
        let choisenumber = Number(escolha)
        lista.push(choisenumber)
        let item = document.createElement('option')
        item.text = `Valor escolhido: ${choisenumber}`
        tabela.appendChild(item)
        texto.innerHTML = ''
    }
}
function calcular() {
    if ( lista.length == 0 ) { 
        window.alert('Preencha com algum valor.')
    } else {
    let sort = lista.sort(function(a,b) { return a-b })
    let soma = 0
    for( let pos in lista ) {
        soma += lista[pos]
    } 
    texto.innerHTML = `Ao todo, temos ${lista.length} cadastros.<br>A soma de todos os valores é ${soma}
    <br>O maior valor informado foi ${lista[lista.length-1]}
    <br>O menor número é ${lista[0]}
    <br>A média desses números é ${soma/(lista.length)}`
}   
} */
let escolha = document.getElementById('escolha')
let tabela = document.getElementById('tabela')
let texto = document.getElementById('texto')
let lista = [] 

function isNumero(n) {
        if (Number(n) >= 1 && Number(n) <= 100 ) {
            return true 
        } else {
            return false
                }
            }
    
function inLista(n, l) {
        if(l.indexOf(Number(n)) != -1 ) {
            return true 
        } else {
             return false 
            }
        }

function add() {
        if(isNumero(escolha.value) && !inLista(escolha.value, lista)) {
            
            lista.push(Number(escolha.value))
            let item = document.createElement('option')
            item.text = `Valor adicionado: ${escolha.value}.`
            tabela.appendChild(item)
            escolha.value = ''
            texto.innerHTML = ''
        }   else {
            window.alert('Valor inválido ou já preenchido.')
                    }
            }          

function calcular() {
     let s =  0
    for( let pos in lista ) { 
    s += lista[pos]
}
    let sort = lista.sort(function(a, b) {return a - b })  
    let NumCad = lista.length
    let MaiorNumero = lista[lista.length - 1]
    let MenorNumero = lista[0]
    let soma = s
    let Div = soma/lista.length
    texto.innerHTML = ''
    texto.innerHTML += `<p>Ao todo, temos ${NumCad} cadastros.</p>` 
    texto.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
    texto.innerHTML += `<p>O maior valor informado foi ${MaiorNumero}</p>`
    texto.innerHTML += `<p>O menor número é ${MenorNumero}</p>`
    texto.innerHTML += `<p>A média desses números é ${Div}</p>`
}