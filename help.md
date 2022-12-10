<h2> Informações Importantes </h2>

1 a 15 - Obrigatórios.
16 a 18 - Bonus.

Aprovação: 12 requisitos.
Aprovação em recuperação: 17 requisitos(16.2).

Ultimo dia de projeto: 05/12/22
Data Limite: 13/12/22
Data limite da recuperação: ??/12/22

##

<h2>Comandos locais:</h2>

npm run prestart - Cria o banco de dados e sobe as migrations.
npm run start:test - Cria uma outra instancia do App na porta 3030.
npm run drop - Deleta o Banco de Dados.
npm run seed - Injeta os dados contidos nos seeders.
npm run debug - Executa o servidor com nodemon.

npx sequelize-cli db:drop - Deleta o Banco de Dados
npx sequelize-cli db:create && npx sequelize-cli db:migrate - Gera DB e cria tabelas
npx sequelize-cli db:seed:all - Insere dados e popula a tabela

##

<h2>Testando a aplicação:</h2>

npm run test:dev 01  (vai esperar um servidor na porta 3000.)
    ou
npm run start:test 01 (cria outra instância da API na porta 3030)

* Caso ocorra algum problema, encerre o teste com [CTRL] + [C] e utilize o script npm run kill:test

* Para executar os testes locais utilize: npm test ou npm test 01


##

<h2>Linter:</h2>

npm run lint

##

<h2>Códigos de status de respostas HTTP:</h2>

* 200 OK
* 201 Created
* 204
* 400 Bad Request
* 401 Unauthorized
* 402 Payment Required 
* 403 Forbidden
* 404 Not Found
* 500 Internal Server Error

<h2>Sequelizer</h2>

* Gerar de Migration:
$ npx sequelize migration:generate --name migrationName

* Gerar Migration e model:
$ npx sequelize model:generate --name NomeDoModel --attributes nomeDoAtributo:string

* Executar Migrations:
$ npx sequelize db:migrate

* Desfazer Mirations(down):
$ npx sequelize db:migrate:undo

* Executar seeds
$ npx sequelize db:seed:all

* Desfazer seeds
$ npx sequelize db:seed:undo:all