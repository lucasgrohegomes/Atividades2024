/*
Ana está organizando suas tarefas de limpeza semanal. Crie um array inicialmente vazio chamado tarefasLimpeza. 
Solicite a Ana para adicionar quatro tarefas à lista. Remova a terceira tarefa da lista e, em seguida,
mude a segunda tarefa para "limpar banheiro". Imprima a lista de tarefas de limpeza atualizada no final.
*/

function algoritmo8(){
    let tarefasLimpeza = []

    tar1 = prompt("Insira a primeira tarefa")
    tarefasLimpeza.push(tar1)

    tar2 = prompt("Insira a segunda tarefa")
    tarefasLimpeza.push(tar2)

    tar3 = prompt("Insira a terceira tarefa")
    tarefasLimpeza.push(tar3)

    tar4 = prompt("Insira a quarta tarefa")
    tarefasLimpeza.push(tar4)
    
    alert(tarefasLimpeza)

    tarefasLimpeza.splice(2,1)
    alert(tarefasLimpeza)

    tarefasLimpeza[1] = "limpar banheiro"
    alert(tarefasLimpeza)
}
