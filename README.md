# EstudioTattooAPI
Projeto de fim do módulo 4 da Resilia Educação.
O projeto consiste na criação deuma API REST que retorna informações do portifólio de um estúdio de tatuagem.

---

## Informações Gerais
O projeto foi feito através [Node.js](https://nodejs.org/en/) com o framework [Express](https://expressjs.com/pt-br/) e utilizando a ORM [Sequelize](https://sequelize.org/).

### Bibliotecas externas
Outras bibliotecas utilizadas nesse projeto foram:
* [Nodemon](https://nodemon.io/) - para recarregar automaticamente o servidor durante o desenvolvimento.
* [Supertest](https://github.com/visionmedia/supertest#readme) - para rodar testes de rota.


### Banco de dados
A estrutura de banco de dados utilizada foi o [Sqlite3](https://www.npmjs.com/package/sqlite3). As configurações do banco de dados podem ser encontradas no arquivo /src/sequelize.js.

---

## Iniciando o projeto
Abra o terminal (Linux/Mac) ou o PowerShell (Windows) e siga os passos abaixo.
* Clone o repositório em sua máquina

    `git clone https://github.com/cinmcantu/EstudioTattooAPI.git`

* Acesse a pasta criada 

    `cd EstudioTattooAPI`

* Instale os pacotes

    `npm install`

* Para iniciar os projetos use o comando abaixo

    `npm run start`

    A porta padrão é a __3003__. Caso queira alterá-la, procure a linha `const port = process.env.PORT || 3003` no arquivo /server.js e altere o número 3003 para sua porta de preferência.

---

## Populando o banco de dados
Caso queira, foi disponibilizado um arquivo que popula o banco de dados criado com quadro instâncias.
Para rodá-lo, em uma nova janela no terminal/Powershell, ainda dentro do diretório do projeto, rode o seguinte comando:

`npm run seed`


---

## Estrutura da API
A API é do tipo Restful, contendo assim, os quatro verbos HTTP: GET, POST, PUT e DELETE.
Ao iniciar o arquivo em sua máquina, a url base será <http://localhost:{porta}>, onde `{porta}` deve ser substituido pela porta escolhida, por padrão será a 3003. As rotas abaixo deverão estar sempre prescindidas por essa url.

### **Resumo das rotas**
Segue abaixo um resumo das rotas da API. Em seguida terão mais informações sobre cada uma delas.

* GET: *URL_BASE/portfolio*
* GET: *URL_BASE/portfolio/{id}*
* GET: *URL_BASE/portfolio/tag/{tag}*
* POST: *URL_BASE/portfolio*
* PUT: *URL_BASE/portfolio/{id}*
* DELETE: *URL_BASE/portfolio/{id}*


### **Retornando os Portifólios**

GET: *URL_BASE/portfolio*


RESPOSTA

~~~JSON
{
  "result": [
    {
      "id": 1,
      "artist_id": 2,
      "description": "Pokemon",
      "size": "medium",
      "tag": "geek",
      "color": "colored",
      "avaliable": true,
      "createdAt": "2021-07-25T19:11:08.684Z",
      "updatedAt": "2021-07-25T19:11:08.684Z"
    },
    {
      "id": 2,
      "artist_id": 2,
      "description": "Bart from The Simpsons",
      "size": "small",
      "tag": "cartoon",
      "color": "colored",
      "avaliable": true,
      "createdAt": "2021-07-25T19:11:08.684Z",
      "updatedAt": "2021-07-25T19:11:08.684Z"
    }
  ],
  "count": 2
}
~~~

GET: *URL_BASE/portfolio/{id}*

Resposta para id = 1:
~~~JSON
{
  "result": [
    {
      "id": 1,
      "artist_id": 2,
      "description": "Pokemon",
      "size": "medium",
      "tag": "geek",
      "color": "colored",
      "avaliable": true,
      "createdAt": "2021-07-25T19:11:08.684Z",
      "updatedAt": "2021-07-25T19:11:08.684Z"
    }
  ],
  "count": 1
}
~~~

GET: *URL_BASE/portfolio/tag/{tag}*

Resposta para tag = Cartoon:
~~~JSON
{
  "result": [
    {
      "id": 2,
      "artist_id": 2,
      "description": "Bart from The Simpsons",
      "size": "small",
      "tag": "cartoon",
      "color": "colored",
      "avaliable": true,
      "createdAt": "2021-07-25T19:11:08.684Z",
      "updatedAt": "2021-07-25T19:11:08.684Z"
    }
  ],
  "count": 1
}
~~~

### **Inserindo novo Portifólio**

POST: *URL_BASE/portfolio*

Modelo a ser utilizado no body, no formato JSON:

~~~JSON
{
	"artist_id" : 1,
	"description" : "Lion with a cross",
	"size" : "huge",
	"tag" : "Religion",
	"color" : "black and white",
	"avaliable": true
}
~~~
 
 Resposta:
 ~~~JSON
 {
  "message": "The portfolio Lion with a cross has been inserted",
  "error": false
}
~~~

**IMPORTANTE**:

* Os atributos *size* e *color* só aceitam os seguintes valores:

    *size* : "tiny", "small", "medium", "big", "huge"

    *color* : "black and white", "colored"

* Os atributos *artist_id* e *avaliable* não podem ser nulos

* O atributo *avaliable* é do tipo booleano, ou seja, só pode ser *true* ou *false*


### **Atualizando Portifólio**

PUT: *URL_BASE/portfolio/{id}*

Modelo a ser utilizado no body, no formato JSON. **Não é obrigatório** conter todos atributos:

~~~JSON
{
	"artist_id" : 1,
	"description" : "Lion with a cross",
	"size" : "huge",
	"tag" : "Religion",
	"color" : "colored",
	"avaliable": false
}
~~~
Resposta:
 ~~~JSON
{
  "message": "The row with id 4 has been updated",
  "result": {
    "artist_id" : 1,
	"description" : "Lion with a cross",
	"size" : "huge",
	"tag" : "religion",
	"color" : "colored",
	"avaliable": false,
    "createdAt": "2021-07-25T19:11:08.683Z",
    "updatedAt": "2021-07-25T19:11:19.648Z"
  },
  "error": false
}
~~~

### **Deletando Portifólio**

DELETE: *URL_BASE/portfolio/{id}*
Resposta:
 ~~~JSON
{
  "message": "The row with id 2 has been deleted",
  "error": false
}
~~~

---

## Testes
Foi implementado um arquivo de testes para checar o funcionamento correto das rotas da API. Para isso foi utilizado a biblioteca Supertest com o framework [Jest](https://jestjs.io/pt-BR/)

**IMPORTANTE**

Para o funcionamento correto dos testes, é necessário que o banco de dados esteja populado. Para isso, antes de iniciar os testes, rode:

`npm run seed`

E depois rode os testes com:

`npm run test`

