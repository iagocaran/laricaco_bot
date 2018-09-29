# laricaco_bot

Um bot para o Telegram desenvolvido para testar sua viabilidade como ferramenta para gestão de informações para o serviço de vendas do Laricaco.

## Introdução

O projeto foi baseado na facilidade de utilizar os webhooks do Telegram Bot API, de forma que foi preciso construir um servidor para processar os requests e responder de acordo. Para o primeiro protótipo criei rapidamente um servidor node.js usando o framework Express.js, também utilizei Sequelize.js para facilitar o trabalho com o banco de dados.
Ainda assim, havia um problema que é receber os requests do Telegram. Para evitar configurações adicionais, e qualquer possível dificuldade, estou usando um app do Heroku ligado diretamente ao repositório. Devido a natureza simples do projeto, não ativei qualquer facilidade de debug, mas é interessante para continuar o desenvolvimento.

### Pré-requisitos

O primeiro software a instalar para rodar o projeto é o Runtime do Node.js.

* [Node.js](https://nodejs.org/) - JavaScript runtime

### Executando

Com ele instalado, clone o projeto do github e instale suas dependências:
Na pasta do projeto execute:

```
npm install
```

Depois, você pode rodar o projeto.

```
npm start
```

## Testes

Esse projeto ainda não apresenta testes a serem executados.

## Planos

* Reestrutura o projeto para utilizar [WebPack](https://webpack.js.org/), [Babel](https://babeljs.io/) e [ESLint](https://eslint.org/);
* Usar padrão [SemVer](https://semver.org/) de versionamento;
* Utilizar um framework como [Telegraf~(https://www.npmjs.com/package/telegraf) para facilitar o desenvolvimento de funcionalidades.
* Seguir referências sobre processamento de linguagem natural:
  * https://medium.com/@daffl/natural-language-processing-and-machine-learning-in-javascript-249181a3b721
  * https://www.webdesignerdepot.com/2018/04/ai-basics-natural-language-processing-with-node-js/

## Autores

* Iago Caran Aquino - Trabalho inicial

## Licença

Esse projeto está licenciado sob a licença GPLv3 - veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.

