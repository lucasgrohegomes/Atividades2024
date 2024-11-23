/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/

function algoritmo2(){
    let listaCompras = []
    
    item1 = prompt("Insira o valor para o primeiro item.")
    listaCompras.push(item1)

    item2 = prompt("Insira o valor para o segundo item.")
    listaCompras.push(item2)

    item3 = prompt("Insira o valor para o terceiro item.")
    listaCompras.push(item3)

    if(item3 !== "leite"){
        listaCompras.push("leite")
    }

    alert(listaCompras)
}
