# Linguagens

HTML

CSS

JavaScript

# Figma 

https://www.figma.com/file/nDTrIQxTu6aldQG0o0iAbj/Ol%C3%A1%2C-Mundo!---Projeto-React%3A-router?node-id=38-716&t=zfgnsI5EI2ebm4B7-0

# Aprendizados 

01 - Olá Mundo

Instalar o react-router-dom;

Utilizamos o comando npm install react-router-dom@6 que pegamos da própria documentação para instalar a versão 6.

Utilizar os componentes BrowserRouter, Routes e Route do react-router-dom;

Dentro do BrowserRouter, conseguimos utilizar os outros componentes da biblioteca. O Routes alterna entre diferentes rotas e o Route renderiza um determinado componente (com o atributo element) em um determinado caminho (com o atributo path).

Criar uma rota para um caminho que não existe.

Adicionando uma Route com o path='*', podemos renderizar uma página de 404, caso a URL acessada não corresponda a nenhuma das outras rotas.

02 - SPA com react-router-dom

Diferenciar o comportamento de sites tradicionais e de SPAs;

Sites tradicionais são compostos por várias páginas HTML, e uma requisição é realizada para o servidor do site sempre que queremos ir para uma nova página. Já as SPAs (Single Page Applications) são compostas por uma única página HTML, e seu conteúdo é alterado dinamicamente pelo JavaScript.
Utilizar o componente Link do react-router-dom;

Ele mantém o comportamento de uma SPA, impedindo que a página do navegador recarregue.
Utilizar o hook useLocation;

Com ele, podemos obter informações da rota que estamos atualmente.
Utilizar o componente NavLink do react-router-dom.

Com ele, temos acesso direto à informação do link estar ativo ou não.

03 - Rotas aninhadas

Identificar quando utilizar rotas aninhadas;

Colocamos as páginas Inicio e SobreMim como filhas de PaginaPadrao, para que apenas elas reaproveitassem a mesma estrutura. Não queríamos que o Banner aparecesse na página 404.
Utilizar o componente Outlet;

A rota que é pai de outras se responsabiliza por dizer onde elas serão renderizadas com o Outlet do react-router-dom.
Utilizar o atributo index do Route;

O index indica que o caminho da rota é igual ao da rota pai.
Diferenciar caminhos relativos e absolutos.

Caminhos absolutos iniciam com /, enquanto caminhos relativos iniciam sem a /, partindo do caminho da rota pai.

04 - Rotas dinamicas 

Identificar quando utilizar rotas dinâmicas;

Rotas dinâmicas são úteis quando queremos ter uma mesma estrutura de página e mudar seu conteúdo de acordo com alguma informação passada na URL. No nosso caso, passamos o id de um post pela URL, buscamos o post de acordo com o id e mostramos suas informações na tela.
Utilizar os seletores de rotas dinâmicas para criar uma rota dinâmica;

Utilizamos a sintaxe /caminho/:nomedoparametro no atributo path de uma Route.
Utilizar o hook useParams.

Com ele, obtemos os parâmetros passados para uma rota dinâmica.

# Para saber mais 

Para saber mais: documentação do react-router-dom

Você acabou de iniciar seus aprendizados no react-router-dom, uma poderosa biblioteca que irá nos ajudar de diversas formas a construir nossa aplicação.

Sempre que você finalizar uma aula, sinta-se livre para aprofundar seus conhecimentos na documentação oficial do React Router 6. Ela também serve como excelente fonte de consulta. A versão 6 é a que utilizaremos durante esse curso, e assegure-se de que não está lendo as documentações de versões mais antigas, pois há diferenças no uso de determinados recursos.

Bons estudos! :)

React Hooks: o que é e como funcionam?
https://www.alura.com.br/artigos/react-hooks

Para saber mais: rotas index e caminhos relativos

Você viu que quando queremos reaproveitar partes da nossa aplicação em apenas algumas rotas em vez de todas, utilizamos o recurso de rotas aninhadas, que são rotas filhas de uma mesma rota pai. Você pode ver sobre isso na documentação ( https://reactrouter.com/en/main/start/overview#nested-routes ) .

Aproveite também para conferir a documentação sobre rotas index (https://reactrouter.com/en/main/start/concepts#index-routes).

Da documentação, há o seguinte exemplo:

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Activity />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="activity" element={<Activity />} />
      </Route>
    </Routes>
  );
}
Veja que há três rotas aninhadas de Layout. A primeira delas possui um atributo index em vez de um atributo path. Isso é mesmo que dizer que o caminho desta rota é igual ao da rota pai, ou seja, nesse caso é a mesma coisa que um atributo path="/".

As outras duas rotas têm caminhos que iniciam sem a /. Isso quer dizer que essas rotas serão relativas ao caminho da rota pai, e são equivalentes a "/invoices" e "/activity", respectivamente.

Se a rota pai tivesse o caminho "/qualquercoisa", os caminhos das três rotas aninhadas seriam equivalentes a "/qualquercoisa, "/qualquercoisa/invoices" e "/qualquercoisa/activity". Utilizando rotas index e caminhos relativos, evitamos repetição de código e o deixamos mais legível.

Agora que você conhece esses recursos, deixei um desafio para você na próxima atividade, vamos lá?

Como trabalhar com Markdown -> https://www.alura.com.br/artigos/como-trabalhar-com-markdown

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
