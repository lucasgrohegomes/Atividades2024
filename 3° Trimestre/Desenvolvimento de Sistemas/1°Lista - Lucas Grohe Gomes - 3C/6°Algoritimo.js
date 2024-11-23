/*
Maria está realizando compras online. Crie um array inicialmente vazio chamado 'carrinho'. Adicione os produtos
"camiseta", "calça" e "sapato" ao carrinho. Remova o primeiro produto da lista e,
em seguida, modifique o segundo produto para "tênis". Imprima o carrinho de compras atualizado no final.
*/

function algoritmo6(){
    let carrinho = []

    carrinho.push("camiseta")
    alert(carrinho)

    carrinho.push("calca")
    alert(carrinho)

    carrinho.push("sapato")
    alert(carrinho)

    carrinho.shift()
    alert(carrinho)

    carrinho[1] = "tenis"
    alert(carrinho)

}