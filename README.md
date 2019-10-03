# API: GoBarber

## Instalação

```
npm install
docker run --name docker-postgres -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres
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

## Inicialização

```
docker start postgres
npm run dev
```

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

Iniciando um arquivo de config. do ESLint

```
./node_modules/.bin/eslint --init
```

ESLint no VSCode: Instale a extensão `ESLint`. Dê `Ctrl+Shift+P`, pesquise JSON, escolha `Open Settings` e coloque no fim do arquivo `settings.json`:

```
"editor.rulers": [80, 120],
"prettier.eslintIntegration": true,
"eslint.autoFixOnSave": true,
"editor.formatOnSave": true,
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
