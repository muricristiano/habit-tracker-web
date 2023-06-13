# habit-tracker-web

vite (framework)
react (library for user interface [frontend])

PACKAGES:
========

vite
> npm create vite@latest 
Ferramenta para criar a aplicação front-end utilizando um template que traz pronto coisas que toda aplicação de front-end precisa, traz a parte de build de forma automatica (esbuild), traz suporte ao TypeScript, e muitos outros suportes
> Após criar o projeto, selecionar as caracteristicas (React, Typescript)
> npm install (Para instalar todas as dependências)
> npm run dev (Já executável, como ponto de partida)

### phosphor-react
react icons library

### dayjs
library tools for dates

### @radix-ui/react-dialog
>npm install @radix-ui/react-dialog
>npm install @radix-ui/react-popover
>npm install @radix-ui/react-checkbox
Library - Unstyled, accessible components for building high‑quality design systems and web apps in React. Here we are getting just react-dialog for now.

### clsx
Library to optimize creation of different conditions inside a class (Very good for Tailwindcss conditions)

### axios
> npm i axios
API connection: HTTP Request 
speed the process and reduce the amount of code to make a http request from front-end to back-end 
> Creation of /src/lib/axios.ts
import axios from 'axios'
export const api = axios.create({
    baseURL: 'http://localhost:3333'
})

const to import to make the connections to the back-end


DEV PACKAGES:
=========

tailwindcss - in-code css, trough class patterns. (plugin do postcss)

postcss - automation of tasks inside of css.

autoprefixer - auto import (web-kits)

>npx tailwindcss init -p (create the file 'postcss.config.cjs', and -p makes vite integrate and recognize it)


Extensions:
Postcss
tailwind css Intelisense

