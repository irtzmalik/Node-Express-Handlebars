-- create database and table schema here
CREATE DATABASE burgers_db;
USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers(
	id INTEGER auto_increment not null,
    burger_name VARCHAR(50),
    devoured BOOLEAN DEFAULT false,
    primary key(id)
    );