/*
Uma loja precisa atualizar seu sistema de controle de estoque.
Crie um vetor chamado 'estoqueProdutos' com os produtos "camiseta", "calça" e "sapato". 
Adicione o produto "meia" ao final da lista. Remova o primeiro produto da lista e mude
o segundo produto para "bermuda". Imprima o estoque atualizado no final.
*/

function algoritmo1() {
    let estoqueProdutos = ["camiseta", "calca", "sapato"]
    alert(estoqueProdutos)

    estoqueProdutos.push("meia")
    alert(estoqueProdutos)

    estoqueProdutos.shift()
    alert(estoqueProdutos)

    estoqueProdutos[1] = "bermuda"
    alert(estoqueProdutos)
}

