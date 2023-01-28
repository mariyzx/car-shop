# 🚗 Projeto Car Shop!

Nesse projeto foi desenvolvida uma API para gerenciar uma concessionária de veículos, utilizando o banco de dados <code>MongoDB</code> através do framework <code>Mongoose</code>. Foram aplicados os princípios de Programação Orientada a Objetos (<code>POO</code>).

## Desempenho 

O projeto Car Shop foi desenvolvido por [Mariana Werneck](https://www.linkedin.com/in/marinhomariana8/) durante o curso de Desenvolvimento Web na [Trybe](https://www.betrybe.com/)! Foi adquirido 100% do projeto total.

![image](https://user-images.githubusercontent.com/69324347/215278807-29240bc3-96a0-4498-be9f-455d1d7cfacd.png)

## Como utilizar:

Clone o repositório: `git@github.com:mariyzx/car-shop.git`.

<details>
  <summary><strong>Rodando com Docker :whale: ou Localmente</strong></summary>
  
  ## 👉 Com Docker
   **⚠ Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**
   
   > Rode o serviço `node` com o comando `docker-compose up -d --build`.
  - Esse serviço irá inicializar um container chamado `car_shop` e outro chamado `car_shop_db`.
  - A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.
  
   > :information_source: Use o comando `docker exec -it car_shop bash`.
   
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`
  
  - **⚠ Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 
  
  ## 👉 Sem Docker

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`
  
  - ✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
  - ✨ **Dica:** O projeto espera que a versão do `node` utilizada seja a 16.

  <br>  
</details>

## Rotas:

O projeto está rodando na porta `3001`, ao acessar o endpoint `/docs` irá encontrar a documentação de rotas da API!

## Tecnologias utilizadas:

- Typescript
- MongoDB
- Mongoose
- NodeJS
- Docker
- Mocha
- Chai
- Sinon
- POO
- Swagger

## Connect:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marinhomariana8/) [![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
)](mailto:marinhomariana8@gmail.com)
