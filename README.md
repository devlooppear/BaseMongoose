# BaseMongoose

Este é um exemplo de como configurar o Mongoose e criar um modelo de usuário em um banco de dados MongoDB utilizando o Node.js.

## Ferramentas

- Node.js
- MongoDB
- Mongoose

## Passo a passo

Siga os passos abaixo para configurar e utilizar o código fornecido:

- Certifique-se de ter o Node.js e o MongoDB instalados em seu sistema.

- Clone ou baixe os arquivos necessários para o seu projeto.

- No diretório raiz do projeto, abra o terminal e execute o comando npm install para instalar as dependências necessárias, incluindo o Mongoose.

Para rodar o código certifique-se que está dentro do diretório da aplicação, em seguida, no terminal, execute:

```javascript
node ConnectMongoose.js
```

O código irá conectar-se ao banco de dados MongoDB local na URL mongodb://127.0.0.1:27017/aprendendo. A parte `127.0.0.1` é a mesma coisa que escrever `localhost` e o navegador irá achar a url do seu localhost, 27017 é a porta padrão do MongoDB. Certifique-se de que essa é de fato a porta configurada em sua máquina. Caso o banco de dados não exista, ele será criado.

Após a conexão bem-sucedida, o código criará um modelo de usuário com os campos "nome", "sobrenome", "idade" e "pais".

Em seguida, será criado um novo documento na coleção "usuarios" com os valores fornecidos. Neste exemplo, será criado um usuário com nome "John", sobrenome "Doe", idade 34 e país "Brasil".

Se tudo ocorrer corretamente, você verá a mensagem "Usuário criado com sucesso!" no terminal.

Verifique o banco de dados MongoDB para confirmar se o usuário foi registrado corretamente.

Espero que este passo a passo seja útil para configurar e executar o código fornecido. Se você tiver alguma dúvida adicional, sinta-se à vontade para perguntar em meu perfil.

Caso queira ver mais sobre o Mongoose:

- https://mongoosejs.com/