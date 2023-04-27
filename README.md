# Desafio Programação Fullstack

## Este projeto foi criado como parte de um desafio de programação fullstack. Ele utiliza os frameworks Next.js para o frontend e Nest.js para o backend.

### Configuração
Antes de começar, é necessário criar os arquivos `.env` tanto para o backend quanto para o frontend. No arquivo `.env` do backend, defina as variáveis de ambiente com os valores corretos:

```
DATABASE_HOST=
DATABASE_NAME=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_PORT=
APP_NAME=
```

No arquivo `.env` do frontend, defina a variável de ambiente NEXT_PUBLIC_API_URL com a URL da API:

```
NEXT_PUBLIC_API_URL=
```

Depois de criar os arquivos `.env`, instale as dependências tanto no frontend quanto no backend:

```
cd backend && npm install
cd .. && cd frontend && npm install
```

Em seguida, crie o banco de dados. Neste exemplo, estou usando o PostgreSQL. No diretório `backend`, execute o seguinte comando para criar o banco de dados `desafio-hubla` com o usuário `postgres`:

```
createdb -U postgres desafio-hubla
```

Digite a senha do usuário, se houver, e o banco de dados será criado.

### Uso

Para executar o projeto, inicie o servidor backend:

```
cd backend && npm run start:dev
```

Em seguida, inicie o servidor frontend:

```
cd .. && cd frontend && npm run dev
```

Agora você pode acessar o aplicativo no seu navegador em `http://localhost:3000`. Na interface, há um botão de chamada para a ação de upload do arquivo `sales.txt` e três links na barra de navegação que levam a página de Criadores, Afiliados e Transações.