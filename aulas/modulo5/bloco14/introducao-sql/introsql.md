CREATE TABLE actor(
id VARCHAR (255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

# 1.a. VARCHAR(255) siginifica que o componente será uma string de até 255 caracteres e PRIMARY KEY significa que é
# uma chave única. DATE simboliza uma data, sem hora. VARCHAR(6) significa que será uma string de até 6 caracteres.
# b. O comando SHOW DATABASES mostra o nome de todas as databases em que estamos trabalhando e SHOW TABLES mostra
# todas as tabelas dentro destas databases.
# c. O comando DESCRIBE mostra a propriedade de cada coluna na tabela, se ela é única, se pode ser null e qual seu 
# valor padrão.

SHOW DATABASES;
SHOW TABLES;
DESCRIBE actor;

INSERT INTO actor(id, name, salary, birth_date,gender)
VALUES(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);

# 2.a.
INSERT INTO actor(id, name, salary, birth_date,gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

# 2.b. "Duplicate entry '002' for key 'PRIMARY'." Ele diz que existe uma duplicata para uma chave primária. Esse erro ocorre porque
# a chave primária deve ser única.
INSERT INTO actor(id, name, salary, birth_date,gender)
VALUES(
"002",
"Rodrigo Santoro",
300000,
"1975-08-22",
"male"
);

# 2.c. "Column count doesn't match value count at row 1." A coluna não corresponde com a quantidade de valores na fileira 1. Este
# erro ocorre porque faltam informações na fileira na hora de inseri-la na tabela.
INSERT INTO actor (id, name, salary)
VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);

INSERT INTO actor (id, name, salary,birth_date,gender)
VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);

# 2.d. "Field 'name' doesn't have a default value." A informação 'name' não tem um valor padrão. Esse erro se dá porque, ao criar
# a tabela, como não definimos um valor padrão ao campo 'name', não podemos deixar este campo vazio na hora de inseri-lo na tabela.
INSERT INTO actor(id,salary,birth_date,gender)
VALUES(
"004",
400000,
"1949-04-18",
"male"
);

INSERT INTO actor(id,name,salary,birth_date,gender)
VALUES(
"004",
"Antonio Fagundes",
400000,
"1949-04-18",
"male"
);

# 2.e. "Incorrect date value: '1950' for column 'birth_date' at row 1." Valor incorreto para a coluna 'birth_date'. Esse erro acontece
# porque o tipo date deve estar no formato "yyyy-mm-dd" com as aspas "".
INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

# 2.f.
INSERT INTO actor(id,name,salary,birth_date,gender)
VALUES(
"006",
"Sônia Braga",
500000,
"1950-06-08",
"female"
);

# 3.a.
SELECT * FROM actor WHERE gender = "female";
# 3.b.
SELECT salary FROM actor WHERE name = "Tony Ramos";
# 3.c. Ele restorna uma tabela de pesquisa vazia, pois a tabela não possui nenhuma propriedade gender com este valor.
SELECT * FROM actor WHERE gender = "invalid";
# 3.d.
SELECT id,name,salary FROM actor WHERE salary <= 500000;
# 3.e. "Unknown column 'nome' in 'field list'." Coluna 'nome' desconhecida na lista. Esse erro ocorre porque não existe a informação
# 'nome' na tabela e sim 'name'.
SELECT id, nome from actor WHERE id = "002";
SELECT id, name from actor WHERE id = "002";

# DESAFIOS
# 5. a. SELECT * FROM actor indica que a grade de resultado terá todas as informações da fileira encontrada. 
# WHERE(name LIKE "A%" OR "J%") indica que vai procurar por informações na coluna name de acordo com os parâmetros citados. Começando
# com A OU J. 
# AND salary > 300000 indica que além dos parâmetros indicados anteriormente, também será pesquisado na coluna salary de acordo com
# o parâmetro indicado. Maior que R$ 300.000
SELECT * FROM actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

# 5.b.
SELECT * FROM actor
WHERE name NOT LIKE "A%" AND salary > 350000;

# 5.c.
SELECT * FROM actor
WHERE name LIKE "%G%" OR name LIKE "%g%";

# 5.d.
SELECT * FROM actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;

# 6.a. Id coloquei como PK para que ele seja único e como rating tem como número inteiro máximo 10, coloquei INT.

CREATE TABLE movie(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
synopsis TEXT NOT NULL,
launch_date DATE NOT NULL,
rating INT NOT NULL
);

# 6.b.
INSERT INTO movie(id, name, synopsis, launch_date, rating)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
"2006-01-06",
"7"
);

# 6.c.
INSERT INTO movie(id, name, synopsis, launch_date, rating)
VALUES(
"002",
"Doce de Mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
"2012-12-27",
"10"
);

# 6.d.
INSERT INTO movie(id, name, synopsis, launch_date, rating)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
"8"
);

# 6.e.
INSERT INTO movie(id, name, synopsis, launch_date, rating)
VALUES(
"004",
"O Auto da Compadecida",
"As aventuras dos nordestinos João Grilo (Matheus Natchergaele), um sertanejo pobre e mentiroso, e Chicó (Selton Mello), o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno vilarejo de Taperoá, no sertão da Paraíba.",
"2000-09-10",
"10"
);

# 7.a.
SELECT id, name, rating FROM movie WHERE id = 004;

# 7.b.
SELECT * FROM movie WHERE name = "O Auto da Compadecida";

# 7.c.
SELECT id, name, synopsis FROM movie WHERE rating >= 7;

# 8.a.
SELECT * FROM movie WHERE name LIKE "%vida%";

# 8.b.
SELECT name FROM movie WHERE name LIKE "%Dona%" OR synopsis LIKE "%Dona%";

# 8.c.
SELECT * FROM movie WHERE launch_date <= "2022-06-14";

# 8.d.
SELECT * FROM movie WHERE launch_date <= "2022-06-14" AND (name LIKE "%Dona%" OR synopsis LIKE "%Dona%") AND rating >= 7;
SELECT * FROM movie WHERE launch_date <= CURDATE() AND (name LIKE "%Dona%" OR synopsis LIKE "%Dona%") AND rating >= 7;