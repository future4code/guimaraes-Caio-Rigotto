# APROFUNDAMENTO DE SQL

ALTER TABLE actor ADD type VARCHAR(255) DEFAULT "NotDirector";

# 1.a.
## ALTER TABLE actor DROP COLUMN salary;
## Este comando deletaria a coluna 'salary' da tabela de atores.

# 1.b.
## ALTER TABLE actor MODIFY gender VARCHAR(6);
## Este comando tiraria a propriedade NOT NULL da coluna 'gender'.

# 1.c. 
ALTER TABLE actor MODIFY gender VARCHAR(100) NOT NULL;

# 2.a.
UPDATE actor
SET name = "Alice Braga", birth_date = "1983-04-15"
WHERE id = "003";

# 2.b.
UPDATE actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

# 2.c.
UPDATE actor 
SET name = "Camila Mendes", salary = "500000", birth_date = "1994-06-29", gender = "female", type = "NotDirector"
WHERE id = "005";

# 2.d.
UPDATE actor
SET name = "Testonildo da Silve"
WHERE id = "1200";
## O comando é executado sem nenhum erro, porem na mensagem aparece que nenhuma linha foi mudada, pois não houve nenhuma correspondencia
## na hora da pesquisa do id.

UPDATE actor
SET id = "002"
WHERE id = "003";
## O comando retorna um erro, pois alterando o id '003' para '002' criaria uma duplicata. O que não pode ocorrer, pois o id é uma PK.

# 3.a.
DELETE FROM actor WHERE name = "Fernanda Montenegro";

# 3.b.
DELETE FROM actor 
WHERE salary >= "1000000" AND gender = "male";

# 4.a.
SELECT MAX(salary) FROM actor;

# 4.b.
SELECT MIN(salary) FROM actor;

# 4.c.
SELECT COUNT(*) FROM actor WHERE gender = "female";

# 4.d.
SELECT SUM(salary) FROM actor;

# 5.a.
SELECT COUNT(*), gender
FROM actor
GROUP BY gender;
## Esta query agrupa as informações de acordo com o 'gender' e retorna a quantidade de cada fator separadamente.

# 5.b.
SELECT id, name FROM actor
ORDER BY name DESC;

# 5.c.
SELECT * FROM actor
ORDER BY salary DESC;

# 5.d.
SELECT name, salary FROM actor
ORDER BY salary DESC
LIMIT 3;

# 5.e. 
SELECT AVG(salary), gender FROM actor
GROUP BY gender;

# 6.a.
ALTER TABLE movie ADD playing_limit_date DATE;

# 6.b.
ALTER TABLE movie MODIFY rating FLOAT NOT NULL;

# 6.c.
UPDATE movie
SET playing_limit_date = "2006-01-12"
WHERE id = "001";

UPDATE movie
SET playing_limit_date = "2021-07-12"
WHERE id = "004";

# 6.d.
DELETE FROM movie WHERE id = "003";

UPDATE movie
SET synopsis = "Teste..."
WHERE id = "003";
## Ele não demonstra nenhum erro, porém não muda nenhuma informação na tabela. Isto ocorre porque não ocorre nenhuma correspondencia
## na pesquisa do id.

# DESAFIOS

# 7.a.
SELECT name FROM movie 
WHERE rating >= 7.5;

# 7.b.
SELECT AVG(rating) FROM movie;

#7.c.
SELECT name, playing_limit_date FROM movie
WHERE NOW() <= playing_limit_date;

# 7.d.
DESCRIBE movie;
SELECT COUNT(*), name FROM movie
WHERE NOW() <= launch_date
GROUP BY name; 

# 7.e.
SELECT MAX(rating) FROM movie;

# 7.f.
SELECT MIN(rating) FROM movie;

# 8.a.
SELECT name FROM movie
ORDER BY name ASC;

# 8.b.
SELECT name FROM movie
ORDER BY name ASC
LIMIT 5;

# 8.c.
SELECT name, launch_date FROM movie
ORDER BY launch_date DESC
LIMIT 3;

# 8.d.
SELECT name, rating FROM movie
ORDER BY rating DESC
LIMIT 3;