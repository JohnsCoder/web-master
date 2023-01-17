SELECT * FROM cidades c 
inner join prefeitos p on c.id = p.cidade_id;

SELECT * FROM cidades;

SELECT * FROM cidades c 
left join prefeitos p on c.id = p.cidade_id;

SELECT * FROM cidades c
right join prefeitos p on c.id = p.cidade_id;

-- SELECT * FROM cidades c
-- full join prefeitos p on c.id = p.cidade_id;

SELECT * FROM cidades c 
left join prefeitos p on c.id = p.cidade_id
UNION
SELECT * FROM cidades c
right join prefeitos p on c.id = p.cidade_id;