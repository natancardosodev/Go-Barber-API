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