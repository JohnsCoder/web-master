INSERT INTO empresas
      (nome, cnpj)
VALUES
     ('Bradesco', 58336774000178),
     ('Vale', 16395971000118),
     ('Cielo', 66646611000110);

desc empresas;
desc prefeitos;

SELECT * FROM empresas; 
SELECT * FROM cidades; 

INSERT INTO empresas_unidades
     (empresa_id, cidade_id, sede)
VALUES
(1,1,1),
(1,2,0),
(2,1,0),
(2,2,1);