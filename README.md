"# desafio-programacao-fullstack" 
# Este projeto foi realizado como parte de um desafio, ele utiliza os frameworks nextjs para o frontend e nestjs para o back end

Como fazer o setup:
# criar o arquivo .env para as variáiveis de ambiente no backend com os valores corretos
DATABASE_HOST=
DATABASE_NAME=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_PORT=
APP_NAME=

# e também .env para o frontend
NEXT_PUBLIC_API_URL=

# depois de criar os arquivos .env, precisamos instalar as dependências, tanto no frontend quando no backend
cd backend
npm i
cd..
cd frontend
npm i

# depois de terminar de instalar as dependências, devemos criar o nosso banco de dados (aqui estou usando postgresql)
no diretório backend
cd backend
# escrever a seguinte linha de comando para criar o banco de dados "desafio-hubla" com o usuário "postgres"
createdb -U postgres desafio-hubla

# depois é so escrever a senha do usuário, se tiver, e está tudo pronto para rodar!
# Como funciona a interface, tem um botão call to action para fazer o upload do arquivo "sales.txt", e três links na barra de navegação que levam cada uma para a página de criadores, afiliados e transações. 
