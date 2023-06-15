![Imersão Full Stack && Full Cycle](https://events-fullcycle.s3.amazonaws.com/events-fullcycle/static/site/img/grupo_4417.png)

Participe gratuitamente: https://imersao.fullcycle.com.br/

## Sobre o repositório
Esse repositório contém o código-fonte ministrado na aula: Server Components do Next.js: Impulsionando seu Backend for Frontendl [https://www.youtube.com/watch?v=rwVgFwtgMnc](https://www.youtube.com/watch?v=rwVgFwtgMnc)

## Rodar a aplicação

---

Acesse a pasta `live-imersao-13-nextjs-server-components`:

```bash
cd live-imersao-13-nextjs-server-components
```

Rode os containers com o comando:

```bash
docker compose up
```

Entre no container do `next`:

```bash
docker compose exec app bash
```

Instale as dependências:

```bash
npm install
```

Rode o comando para o `prisma` criar realizar a `migrate`:

```bash
npx prisma migrate dev
```

Para rodar a aplicação rode o comando:

```bash
npm run dev
```

Existe um arquivo na raiz do projeto Nest.js, o `api.http` que você pode usar para testar a aplicação com o plugin do VSCode [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client). Quando enviar dados na requisição, o Nest.js consumirá a mensagem e mostrará no console.