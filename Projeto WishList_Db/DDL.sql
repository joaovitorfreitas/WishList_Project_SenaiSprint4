CREATE DATABASE WishList;

Use WishList;

CREATE TABLE Usuario
(
	IdUsuario INT IDENTITY PRIMARY KEY NOT NULL,
	Nome	  VARCHAR(200) NOT NULL,
	Email	  VARCHAR(200) UNIQUE NOT NULL, 
	Senha	  VARCHAR(200) NOT NULL
);

CREATE TABLE Desejos
(
	IdDesejo   INT IDENTITY PRIMARY KEY NOT NULL,
	IdUsuario  INT FOREIGN KEY REFERENCES Usuario(IdUsuario) NOT NULL,
	Descricao  VARCHAR(200) NOT NULL,
);

