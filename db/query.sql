-- Add your code below and execute file in MySQL Shell --
SELECT *
FROM movies
JOIN reviews ON movies.id = reviews.movie_id;
