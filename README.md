# Avaliação Sprint 3 

## Equipe 5

## API - Utilizada

- [PokeAPI](https://pokeapi.co/)

## Preview
![7tlae5](https://github.com/JosueFernandes7/FlappyBird_JS/assets/99553096/52f2159f-bc53-4412-8d4f-3766786397b6)

## Acesso à aplicação 
### **[Pokedex](http://ec2-44-202-50-86.compute-1.amazonaws.com:3000/)**
## Objetivo

Criar um sistema de pesquisa de **pokémons**, o qual fornece informações iniciais dos pokémons da geração 1, como **nome**, **imagem** e **tipo**, podendo gerar ao usuário interesse para que ele interaja com a **interface visual** e obtenha mais informações específicas sobre o pokémon selecionado.

## Desenvolvimento

Na página inicial do sistema o usuário visualiza diversos cards com informações básicas sobre cada pokémon, cada card é gerado dinamicamente após a realização da consulta à API utilizada como base para o projeto. Ao selecionar determinado personagem, será passado o parâmetro para o **backend**, que ficará responsável por realizar a consulta detalhada do referido pokémon e encaminhar as informações para a página `Pokemon`, responsável por mostrar as informações mais detalhadas ao usuário.

## Tecnologias Utilizadas
<div style="display: inline-block">
  <img align="center" alt="Josue-Js" height="28" width="42" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
  <img align="center" alt="Josue-Js" height="28" width="42" src="https://icongr.am/devicon/express-original.svg?size=148&color=00f030" />
  <img align="center" alt="Josue-Git" height="28" width="42" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg">
  <img align="center" alt="Josue-Js" height="28" width="42" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
  <img align="center" alt="Josue-Js" height="28" width="42" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg" />
  <img align="center" alt="Josue-CSS" height="28" width="42" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"/>  
  <img align="center" alt="Josue-HTML" height="28" width="42" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="Josue-CSS" height="28" width="42" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg">
  <img align="center" alt="Josue-Js" height="28" width="42" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
  <img align="center" alt="Josue-Js" height="28" width="42" src="https://icongr.am/devicon/docker-original.svg?size=148&color=00f030" />
  <img align="center" alt="Josue-Js" height="28" width="42" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" />
</div>

## Estrutura de pastas
- **src**
  - `app.js`
  - **public**
    - **css**
    - **img**
    - **js**
  - **routes**
  - **views**
    - **layouts**

## Arquitetura AWS
![DiagramaAWS](https://github.com/JosueFernandes7/Web-Study/assets/99553096/9cb601ea-f57b-4559-95ee-463db6980b8b)
## Dificuldades conhecidas

1. Criar Instância da EC2 Amazon Linux e Conectar-se a ela.
2. Instalar o Docker na EC2 Linux.
3. Buildar Imagem e subir pra o Hub Privado.
4. Rodar o Container com a imagem do Hub na EC2.

Inicialmente, a forma em andamento para a realização do Deploy estava sendo feita a partir da utilização do Docker com o Compose e o Docker Machine. Durante o andamento se percebeu que não seria possível realizar dessa forma, o que em partes fez com que a conclusão do trabalho demorasse um pouco mais. 
Entretanto, pode-se finalizar o trabalho a partir da utilização do EC2 com o Docker.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o [Link](https://mit-license.org/) para obter mais detalhes.
