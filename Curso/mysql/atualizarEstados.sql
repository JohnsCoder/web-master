UPDATE estados
SET nome = 'Maranhão'
WHERE sigla = "MA";

SELECT est.nome from estados est where sigla = "MA";

UPDATE estados
SET nome = 'Parana', populacao = 11.32

WHERE sigla = 'PR'

SELECT est.nome, est.populacao, est.sigla FROM estados est WHERE sigla = 'PR'