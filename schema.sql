DROP DATABASE IF EXISTS banking_system;

CREATE DATABASE banking_system;

USE banking_system;

CREATE TABLE clients (
  id int NOT NULL AUTO_INCREMENT,
  balance decimal(10, 2) NOT NULL,
  name varchar(50) NOT NULL,
  password varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

/* For the record, these numbers were generated with Math.random,
 * please don't read into them. :) */

INSERT INTO clients ( name, balance,password) VALUES  ("ali", 1950.96,"abc");
INSERT INTO clients ( name, balance,password) VALUES  ("houssem", 1450.92,"abc");
INSERT INTO clients ( name, balance,password) VALUES  ("mahmoud", 1812.7,"abc");
INSERT INTO clients ( name, balance,password) VALUES  ("samir", 205.80,"abc");
INSERT INTO clients ( name, balance,password) VALUES  ("slimen", 1920.6,"abc");
INSERT INTO clients ( name, balance,password) VALUES ("zeinab", 213.38,"abc");
INSERT INTO clients ( name, balance,password) VALUES  ("sboui", 1022.30,"abc");
INSERT INTO clients ( name, balance,password) VALUES  ("dalanda", 900.53,"abc");
INSERT INTO clients ( name, balance,password) VALUES  ("azza", 873.15,"abc");
INSERT INTO clients ( name, balance,password) VALUES ( "jannet", 50000.94,"abc");
INSERT INTO clients ( name, balance,password) VALUES ( "fouchika", 564.82,"abc");
INSERT INTO clients ( name, balance,password) VALUES ( "beji", 411.56,"abc");
INSERT INTO clients ( name, balance,password) VALUES ( "fadhila", 1030.87,"abc");
INSERT INTO clients ( name, balance,password) VALUES ( "douja", 138.47,"abc");
INSERT INTO clients ( name, balance,password) VALUES ( "foufa", 380.33,"abc");
INSERT INTO clients ( name, balance,password) VALUES ( "houssi", 523.27,"abc");
INSERT INTO clients ( name, balance,password) VALUES ( "ossema abdlwahed", 921.30,"abc");
INSERT INTO clients ( name, balance,password) VALUES ( "habib", 200.30,"abc");