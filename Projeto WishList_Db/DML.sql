USE WishList;

INSERT INTO Usuario(Nome, Email, Senha)
VALUES				('Guilherme André', 'guilherme@email.com', '123456'),
					('Christian Dantas', 'chris@email.com', '123457'),
					('Joao Vitor', 'joao@email.com', '123458'),
					('Lucas Carvalho', 'lucas@email.com', '123459');

INSERT INTO Desejos(IdUsuario, Descricao)
VALUES				(1, 'Estudar na Australia'),
					(1, 'e ser reconhecido pelo que eu faço'),
					(2, 'Viajar para Alemanha'),
					(3, 'Trabalhar no Canada, ganhando em dolar'),
					(4, 'Trabalhar Fora');

		
