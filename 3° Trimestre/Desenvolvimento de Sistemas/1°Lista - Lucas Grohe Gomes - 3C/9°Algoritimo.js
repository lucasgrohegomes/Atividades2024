/*
Carlos está definindo suas metas para a semana. Crie um array inicialmente vazio chamado metasSemana.
Adicione três metas à lista. Verifique se a segunda meta é "exercício físico". Se não for, 
modifique-a para "praticar esportes". Imprima a lista de metas semanais no final.

Dicas: Empurrar em inglês - If
*/

function algoritmo9(){
    metasSemana = []

    meta1 = prompt("adicione a primeira meta:")
    metasSemana.push(meta1)

    meta2 = prompt("adicione a segunda meta:")
    metasSemana.push(meta2)

    meta3 = prompt("adicione a terceira meta:")
    metasSemana.push(meta3)

    alert(metasSemana)

    if(metasSemana[1] !== "exercicio fisico"){
        metasSemana[1] = "praticar esportes"
    }

    alert(metasSemana)
}