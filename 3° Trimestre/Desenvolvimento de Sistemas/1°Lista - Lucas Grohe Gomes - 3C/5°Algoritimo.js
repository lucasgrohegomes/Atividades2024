/*
Pedro está organizando seus filmes favoritos. Crie um array chamado filmesFavoritos com três filmes de sua escolha. 
Modifique o primeiro filme para um novo título. Verifique se o último filme da lista é "Harry Potter". 
Se não for, adicione "Harry Potter" ao final da lista. Imprima a lista de filmes favoritos no final.
*/

function algoritmo5(){
    let filmesFavoritos = ["O Exterminador do Futuro", "John Wick", "Dora e a Cidade Perdida"]
    alert(filmesFavoritos)

    filmesFavoritos[0] = "O Exterminador do Futuro 2"
    alert(filmesFavoritos)
    
    if(filmesFavoritos[2] !== "Harry Potter") {
        filmesFavoritos.push("Harry Potter")
    }
    alert(filmesFavoritos)
}