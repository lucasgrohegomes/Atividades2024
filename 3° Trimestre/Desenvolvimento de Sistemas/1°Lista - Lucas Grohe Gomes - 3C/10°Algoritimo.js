/*
 Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. 
 Caso exista, o programa deve mostrar todos os índices que ele se encontra.

 Dicas: Use dois vetores - Use um laços de repetição
*/

function algoritmo10() {
    let numeros = [6, 2, 3, 4, 5, 6, 7, 8, 6, 10]
    alert(numeros)

    while (true) {
        let ver = prompt("Você gostaria de verificar")
        if (numeros.includes(parseInt(ver))) {
            let indices = []
            for (i = 0; i < numeros.length; i++) {
                if (numeros[i] === parseInt(ver)) {
                    indices.push(i)
                }
            }
            alert(indices)
            break;
        }

        alert("O número não existe neste array...")

        let perg = prompt("Você gostaria de digitar mais um número? [S/N]")
        if (perg === "N") {
            break
        }
        else if (perg !== "S") {
            break
        }

    } 

}