This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

How to use this template.

1. Run the `create-next-app`

```
npx create-next-app@latest -e https://github.com/Jareechang/nextjs-code-template
```

**Then change into the folder**

2. Create and define the `.env`

Use the `.env.example` as a reference.

```
BTY_CODE_API_TOKEN=<token>
BTY_CODE_API_ENDPOINT=<endpoint>
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Go to http://localhost:3000

## Defining posts

All posts are kept in `src/entries/*.md`.

Each markdown entry are automatically added into the page.

So, if you want a new post, just add it into `src/entries`.
