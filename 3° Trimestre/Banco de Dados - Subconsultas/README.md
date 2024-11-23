Segue aqui um dos principais exercícios sobre sql no postgresql, envolvendo consultas e subconsultas.

Exercícios - 1 - 23
Exercícios consultas simples

1. Somente o nome de todos os vendedores em ordem alfabética.
2. Os produtos que o preço seja maior que R$200,00, em ordem crescente pelo preço.
3. O nome do produto, o preço e o preço reajustado em 10%, ordenado pelo nome do produto.
4. Os municípios do Rio Grande do Sul.
5. Os pedidos feitos entre 10/04/2008 e 25/04/2008 ordenado pelo valor.
6. Os pedidos que o valor esteja entre R$1.000,00 e R$1.500,00.
7. Os pedidos que o valor não esteja entre R$100,00 e R$500,00.
8. Os pedidos do vendedor André ordenado pelo valor em ordem decrescente.
9. Os pedidos do cliente Manoel ordenado pelo valor em ordem crescente.
10. Os pedidos da cliente Jéssica que foram feitos pelo vendedor André.
11. Os pedidos que foram transportados pela transportadora União Transportes.
12. Os pedidos feitos pela vendedora Maria ou pela vendedora Aline.
13. Os clientes que moram em União da Vitória ou Porto União.
14. Os clientes que não moram em União da Vitória e nem em Porto União.
15. Os clientes que não informaram o logradouro.
16. Os clientes que moram em avenidas.
17. Os vendedores que o nome começa com a letra S.
18. Os vendedores que o nome termina com a letra A.
19. Os vendedores que o nome não começa com a letra A.
20. Os municípios que começam com a letra P e são de Santa Catarina.
21. Os fornecedores que informaram o endereço.
22. Os itens do pedido 01.
23. Os itens do pedido 06 ou do pedido 10.

Exercícios - 1 - 6
Exercícios - subconsultas
1. O nome dos clientes que moram na mesma cidade do Manoel. Não deve ser mostrado o Manoel.
2. A data e o valor dos pedidos que o valor do pedido seja menor que a média de todos os pedidos.
3. A data, o valor, o cliente e o vendedor dos pedidos que possuem 2 ou mais produtos.
4. O nome dos clientes que moram na mesma cidade da transportadora BSTransportes.
5. O nome do cliente e o município dos clientes que estão localizados no mesmo município de qualquer uma das transportadoras.
6. Atualizar o valor do pedido em 5% para os pedidos que o somatório do valor total dos produtos daquele pedido seja maior que a média do valor total de todos os produtos de todos os pedidos.
7. O nome do cliente e a quantidade de pedidos feitos pelo cliente.
8. Para revisar, refaça o exercício anterior (número 07) utilizando group by e mostrando somente os clientes que fizeram pelo menos um pedido.