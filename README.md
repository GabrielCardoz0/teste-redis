
# Api para teste de uma camada de cache simples com Redis

## Bancos de dados

- Certifique-se de ter o postgres e o redis instalado em sua máquina.

## Instalação

- Para instalar as dependências do projeto, na raiz do projeto utilizar:

```bash
npm i
```

## Iniciar redis

- É necessário que o banco de dados redis esteja rodando em sua máquia. Para iniciar, com o terminal aberto utilize:

```bash
redis-cli
```

- Para testar a conexão, utilize:

```bash
ping
```

- Deve retornar:
```bash
pong
```
## Iniciando a apicação
- Para iniciar a aplicação, é necessário criar e configurar um arquivo .env com base no arquive .env.example com as informações do banco de dados.

- Para criar o banco de dados, utilize o comando:

```
npx prisma migrate dev
```

- Com o banco criado, para popular as tabelas, utilize:

```
node src/populateDB.js
```
- Para iniciar a aplicação, utilize:
```
npm run dev
```