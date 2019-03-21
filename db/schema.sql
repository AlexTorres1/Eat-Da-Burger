CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN NULL,
  PRIMARY KEY (id)
);

