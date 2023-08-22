-- movie.movie_tb definition

CREATE TABLE `movie_tb` (
  `id` int AUTO_INCREMENT primary key NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `description` char(255) DEFAULT NULL,
  `rating` float DEFAULT NULL,
  `image` char(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;