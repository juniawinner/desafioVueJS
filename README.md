# **Desafio Vue.js** - Projeto com a solução do desafio 😎

<p align="center">
<img src="https://img.shields.io/github/license/juniawinner/desafioVueJS?style=plastic" alt="Badge License MIT">
<img src="https://img.shields.io/github/stars/juniawinner/desafioVueJS?style=plastic" alt="Badge Stars on GitHub">
</p>

<h3 align="center">
<a href="https://jolly-water-0984cf60f.1.azurestaticapps.net" title="Desafio Vue.js">Site do projeto</a>
</h3>

# 📜 Índice

1. [Sobre o projeto](#-sobre-o-projeto)
1. [Funcionalidades](#-funcionalidades)
1. [Design Responsivo](#-design-responsivo)
1. [Tecnologias utilizadas](#-tecnologias-utilizadas)
1. [Como baixar o projeto](#-como-baixar-o-projeto)
1. [Autora](#-autora)

# 🔖 Sobre o projeto

O objetivo deste projeto é cumprir os requisitos do [Desafio Vue.js](https://bitbucket.org/einov/desafiovuejs/src/master/), elaborado pela empresa [E-Inov Soluções Tecnológicas](https://einov.com/).

O front-end é organizado em componentes do VueJS, que apresentam as informações na tela de acordo com a reatividade desencadeada pelas interações dos usuários. Para apresentar algumas informações sobre empresas de tecnologias, foi desenvolvido um documento JSON, que é exibido ao cliente através da API/REST (Express, JavaScript e Axios).

![Dados fornecidos pela API/REST](https://ik.imagekit.io/x4ikoq975/DesafioVueJS/eID-t3_MJl0Tekxh.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654674891047)

![Tratamento de Erros](https://ik.imagekit.io/x4ikoq975/DesafioVueJS/eID-t1_74UUCN2mQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654669889199)

Os cards, que apresentam as informações da página “Usuários”, foram construídos com a tag “textarea” do HTML. A reatividade do VueJS habilita/desabilita o atributo  “disabled”, de acordo com a interação com o botão (eventos de mouse: _click, mouseup e dblclick_). Assim, é possível interagir e editar os valores dos cards.

O formulário também é interativo, através do estilo aplicado e do atributo “pattern” na tag “input”, que estabelece os padrões para o “nome”, "telefone'' e “empresa”. O “input” de tipo e-mail faz verificação automática da falta do “@”. Caso os valores digitados pelo usuário sejam inválidos, o estilo das bordas do “input” e as cores do texto são alterados, além do símbolo ❌.

![Formulário de Cadastro](https://ik.imagekit.io/x4ikoq975/DesafioVueJS/eID-form_pMUJaZN_p.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654674390936)

Outra funcionalidade do projeto é a utlização do Armazenamento Local do Navegador Web (Local Storage), com o objetivo de armazenar os dados de novos Usuários cadastrados.

![Dados no Local Storage](https://ik.imagekit.io/x4ikoq975/DesafioVueJS/eID-loc_kEgqWu2uE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654674062347)

Portanto, o desafio proporcionou novas aprendizagens relacionadas ao desenvolvimento Web: foi minha primeira experiência com o Tailwind CSS e com a utilização do Local Storage. Tal experiência contribui para agilizar o processo de codificação do estilo, além de permitir a interação com o usuário, tendo em vista que os dados não foram persistidos no banco de dados.

Ademais, a superação do desafio fortaleceu o amadurecimento profissional com projetos VueJS, especialmente a organização das funções JavaScript e a Injeção de Dependência entre componentes pai e seu descendente (_provide/inject_).

# 🛠️ Funcionalidades

- `Resolução do desafio:` Principal objetivo do projeto.

- `Card editável:` Edição de dados apresentados na tela.

- `Local Storage:` Armazenamento de dados no lado do cliente.

- `Tratamento de Erros:` Aviso automático ao usuário sobre falhas na requisição à API/REST.

- `Design Responsivo:` Técnica do _CSS Grid Layout_.

- `Estilo com classes de utilidades:` Organização do código CSS em classes e declarações inline, mediante o framework Tailwind CSS.

# 💻📱 Design Responsivo

## Layout mobile

![Home e Empresas](https://ik.imagekit.io/x4ikoq975/DesafioVueJS/eID-m1_-BTxl6J_E.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654669481123)

![Página de Usuários](https://ik.imagekit.io/x4ikoq975/DesafioVueJS/eID-m2_ikblgNOpe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654669418719)

## Layout desktop

![Home](https://ik.imagekit.io/x4ikoq975/DesafioVueJS/eID-d1_vpw2WtNPSv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654668297994)

![Página de Usuários](https://ik.imagekit.io/x4ikoq975/DesafioVueJS/eID-d3_hMmS1_7CKj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654674769491)

# 🚀 Tecnologias utilizadas

| API/REST                                                                    | FRONT-END                               | PRODUCTION DEPLOYMENT                                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [NodeJS](https://nodejs.org/en/)                                            | [VueJS](https://vuejs.org/)             | [Azure Static Web Apps](https://azure.microsoft.com/pt-br/services/app-service/static/) (_Front-end_) |
| [Express](https://expressjs.com/pt-br/)                                     | [TailwindCSS](https://tailwindcss.com/) | [Azure App Service](https://azure.microsoft.com/pt-br/services/app-service/) (_API/REST_)             |
| [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide) | [Axios](https://axios-http.com/ptbr/)   |

# 🗂️ Como baixar o projeto

## Front-end

Pré-requisitos: CLI do VueJS

```bash
# clonar repositório
git clone https://github.com/juniawinner/desafioVueJS

# entrar na pasta do projeto frontend
cd desafiovuejs

# instalar dependências
npm install

# executar o projeto
npm run serve
```

## API/REST

Pré-requisitos: NodeJS e NPM

```bash
# clonar repositório
git clone https://github.com/juniawinner/desafioVueJS

# entrar na pasta do projeto API/REST
cd api_rest

# instalar dependências
npm install

# executar o projeto
npm start
```

# 👩🏾‍💻 Autora

Desenvolvido 💚 por Junia Winner

https://www.linkedin.com/in/junia-winner
