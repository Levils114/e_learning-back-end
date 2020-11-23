![logo](https://github.com/Levils114/e_learning-mobile/blob/master/assets/Pages/Home/Logotipo.png)

Bem-vindo a api do aplicativo [e.learning](https://github.com/Levils114/e_learning-mobile)
 
### 👨🏻‍💻 Tecnologias utilizadas:

 - 🟩  NodeJS
 - ⏩  Express
 
### ⌨️  Como executar:
  - ⚠️ Requisitos:
    - Ter o docker instalado em sua máquina (caso não tenha, basta seguir [essa documentação] ).
    - Ter instalado em sua máquina o [node](https://nodejs.org/pt-br/).

  - Depois de ter baixado e instalado o docker, em seu terminal, execute o seguinte comando para criação de um docker container:
    ```sh
    docker run --name e_learning-backend -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=e_learning123 -d -p 127.0.0.1:5432:5432 postgres
    ```

  - Após a criação do container, execute o seguinte comando para rodar as migrations:
    ```sh
    yarn typeorm migration:run
    ```

  - Agora vamos instalar as dependências da aplicação. Para isso, execute o seguinte comando:
    ```sh
     npm install
    ```
    ou
    ```sh
     yarn
    ```

  - Agora basta usar o comando abaixo e aproveitar a aplicação 😁 
      ```sh
      yarn start
      ```
    

### ⛖ Rotas da aplicação:

  - Rotas para usuários:
      - POST ``/user`` (criação de usuários)
      - POST ``/authenticate`` (autenticação com token para o usuário)
      
  - Rotas para cursos:
      - POST ``/courses`` (criação de curso) 
      - PUT ``/courses/:id`` (atualização de cursos)
      - GET ``/courses`` (listagem de cursos)
      - GET ``/courses/:id/lessons`` (listagem de aulas de um determinado curso)

  - Rotas para aulas:
      - POST ``/lessons`` (criação de aula) 
      - PUT ``/lessons/:id`` (atualização de aulas)
      - GET ``/lessons/:id`` (listagem de dados de uma determinada aula)


![apresentation_image](https://github.com/Levils114/e_learning-mobile/blob/master/assets/apresentation_image.png)
