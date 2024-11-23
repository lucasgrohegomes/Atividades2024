/*
Ana está organizando suas tarefas diárias. 
Crie um array inicialmente vazio chamado 'tarefas'. Solicite a Ana para adicionar três tarefas à lista.
Remova a segunda tarefa da lista e, em seguida, adicione "ligar para o médico" ao final da lista. 
Imprima a lista de tarefas atualizada no final.
*/

function algoritmo4(){
    let tarefas = []

    tar1 = prompt("Insira a primeira tarefa:")
    tarefas.push(tar1)

    tar2 = prompt("Insira a segunda tarefa:")
    tarefas.push(tar2)

    tar3 = prompt("Insira a terceira tarefa:")
    tarefas.push(tar3)
    
    alert(tarefas)
 
    tarefas.splice(1,1)
    alert(tarefas)

    tarefas.push("ligar para o médico")
    alert(tarefas)
}
