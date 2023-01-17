SELECT 
     e.nome "Nome do Estado", 
     c.nome "Nome da Cidade",
     Regiao 
FROM estados e, cidades c
WHERE e.id = c.estado_id;

SELECT 
     c.nome Cidade,
     e.nome Estado,
     regiao
FROM estados e
inner join cidades c on e.id = c.estado_id
