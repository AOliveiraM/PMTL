CREATE DATABASE IF NOT EXISTS Persons;

USE Persons;

CREATE TABLE Persons(
	personID INT auto_increment PRIMARY KEY,
	personName varchar(300) NOT NULL,
	personRole varchar(200) DEFAULT NULL,
	CPF varchar(12) NOT NULL,
	responsible varchar(300) DEFAULT NULL
);

INSERT INTO Persons(personName, personRole, CPF, responsible)
VALUES('Rafael Ortiz Nunes', 'TI', '99812012', 'Eu mesmo');

select * from Persons
