# API: GoBarber

## Instalação

```
npm install
docker run --name docker-postgres -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres
docker run --name redisbarber -p 6378:6379 -d -t redis:alpine
```

Docker: Criar conta no [DockerHub](https://hub.docker.com/)

Acesse https://hub.docker.com/settings/security e clique em `New Acess Token`, coloque uma descrição e crie.

Rode o comando abaixo e coloque sua senha o token passado

```
docker login --username <username>
```

Instalar Postbird (PostgreSQL GUI client)

```
sudo snap install postbird
```

Host: localhost // Port: 5433 // Username: postgres // Password: docker

Instale um *Cliente REST*, como o [Insomnia](https://insomnia.rest/download/). Como configuração coloque abaixo em *Enviroment*. 

```
{
  "base_url": "http://localhost:3333",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNTcwMjExOTQ2LCJleHAiOjE1NzA4MTY3NDZ9.CEv5WoxlcO8hk5XUFbFIFz9v-AbAzzsfk9OnF94OZGc"
}
```
Obs.: As tags na base tem que ficar na cor roxa, para isso deve-se digitar as tags, espera aparecer e clicar nelas.

## Inicialização

```
docker start postgres
npm run dev
```

## Migrations

Criação de Migration

```
npx sequelize migration:create --name=create-users
```

Depois que configurar as migrations, execute-as com:
```
npx sequelize-cli db:migrate
OU npm run migration
```

## Dados
Criar usuário e realizar login. Demais rotas tem que colocar o token no Headers através de `Authorization` com valor `Bearer [token]`. O endpoint /files deve colocar o multipart `file` com o arquivo.

## Extras

Listar todos as imagens do docker

```
docker ps -a
```

Parar imagem do Docker

```
docker stop <container_id OR names>
```

Remover Container do Docker

```
docker container rm <container_id>
```

ESLint no VSCode: Instale a extensão `ESLint`. Dê `Ctrl+Shift+P`, pesquise JSON, escolha `Open Settings` e coloque no fim do arquivo `settings.json`:

```
"editor.rulers": [80, 120],
"prettier.eslintIntegration": true,
"eslint.autoFixOnSave": true,
"editor.formatOnSave": false,
"eslint.validate": [
    {
        "language": "javascript",
        "autoFix": true
    },
    {
        "language": "javascriptreact",
        "autoFix": true
    },
    {
        "language": "typescript",
        "autoFix": true
    },
    {
        "language": "typescriptreact",
        "autoFix": true
    },
]
```
Desfazer última migration
```
npx sequelize db:migrate:undo // undo:all
OU npm run rm-migration
```
