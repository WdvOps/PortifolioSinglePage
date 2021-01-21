 

document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

/*esta função recebe a quantidade ("qtde") e printa no console
Toda vez que ouver um "click" no input "qtde" ele atualiza os valores no console
function atualizarPreco(){
const qtde = document.querySelector("qtde").value
console.log(qtde)
 Alterado o evento de "click" para "change"
 */
//Calculadora

document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)

document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo").innerHTML = `Prazo: ${prazo} semanas `
    atualizarPreco()
})


/*document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    documento.querySelector("label [for=prazo").innerHTML = prazo 
    atualizarPreco() "Este trecho imprime na tela do usuário a quantidade escolhida de prazo
    de urgência, e atualiza o valor final do orçamento*/




function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value
    const temJs = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value
    let preco = qtde * 100; //multiplica quantidade pelo valor inicial
     if (temJs) preco *= 1.1 
     if (incluiLayout) preco += 500 
     let taxaUrgencia = 1 - prazo*0.1;
     preco *= 1 + taxaUrgencia //preco + (preco*taxaUrgencia)
     
     

   
    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
    console.log(qtde)
    
    }/*Atualiza o valor na tela do usuário com casas decimais fixadas em 2 */

    /*<- if (temJs) {
          preco *= 1.1 
          O trecho do código acima foi substituido por um operador de atribuição que equivale a 
          "preco + (preco * 10/100)"" ou "preco + (preco * 0.1)" e ainda "preco * 1.1" */

