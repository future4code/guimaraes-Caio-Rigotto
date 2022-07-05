# 1.a.
Foreign key é uma coluna em uma tabela que se conecta com outra coluna em outra tabela, fazendo um link entre os dados. Ela permite ter um controle e organização maior dos dados e é crucial para a melhora da performance.

# 1.b. 
CREATE TABLE rating(
id INT AUTO_INCREMENT PRIMARY KEY,
comment TEXT NOT NULL, 
rate FLOAT NOT NULL, 
movie_id INT,
FOREIGN KEY (movie_id) REFERENCES movie(id)
);

INSERT INTO rating(comment, rate, movie_id)
VALUES(
"Um dos melhores filmes que eu já vi. Só não dou mais estrelas porque não dá",
10,
1
);

INSERT INTO rating(comment, rate, movie_id)
VALUES(
"Odiei",
1,
2
);

INSERT INTO rating(comment, rate, movie_id)
VALUES(
"Simplesmente indescritível",
9,
4
);

# 1.c.
INSERT INTO rating(comment, rate, movie_id)
VALUES(
"Esse filme é tão louco que nem existe",
10,
3
);

"Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`guimaraes-4211162-caio-rigotto`.`rating`, CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`))"

O erro diz que não pode adicionar ou atualizar a fileira, pois há uma falha na foreign key. Neste caso, ela não existe.

# 1.d.
ALTER TABLE movie
DROP COLUMN rating;

# 1.e.
DELETE FROM movie
WHERE id = 1;

"Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`guimaraes-4211162-caio-rigotto`.`rating`, CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`))"

O erro diz que não pode deletar ou atualizar a fileira, pois há uma falha na foreign key. Neste caso, a foreign key está sendo usada em outra tabela.

# 2.a.
CREATE TABLE movieCast(
movie_id INT,
actor_id INT, 
FOREIGN KEY (movie_id) REFERENCES movie(id),
FOREIGN KEY (actor_id) REFERENCES actor(id)
);

Esta tabela conecta o id de cada filme com o id de seus respectivos astores.

# a.b.
INSERT INTO movieCast(movie_id,actor_id)
VALUES(
	2,
    1
);

# 2.c.
INSERT INTO movieCast(movie_id,actor_id)
VALUES(
	2,
    15
);

"Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`guimaraes-4211162-caio-rigotto`.`movieCast`, CONSTRAINT `movieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `actor` (`id`))"

O erro diz que não pode adicionar ou atualizar a fileira, pois há uma falha na foreign key. Neste caso, ela não existe.

# 2.d. 
DELETE FROM actor
WHERE id=1;

"Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`guimaraes-4211162-caio-rigotto`.`movieCast`, CONSTRAINT `movieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `actor` (`id`))"

O erro diz que não pode deletar ou atualizar a fileira, pois há uma falha na foreign key. Neste caso, a foreign key está sendo usada em outra tabela.

# 3.a.
O operador ON funciona com o WHERE, sendo um parâmetro de busca.

# 3.b.
SELECT m.name as name, m.id as movie_id, r.rate as rating FROM movie m
INNER JOIN rating r ON m.id = r.movie_id;