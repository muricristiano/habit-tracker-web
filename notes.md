```
# habit-tracker-web

This repository contains the code for a habit tracker web application. It utilizes Vite as the framework and React as the frontend library.

## Packages

The following packages are installed in this project:

### Vite

To create the frontend application using a template that includes essential features, such as automatic build (esbuild), TypeScript support, and other dependencies, run the following command:

```
npm create vite@latest
```

After creating the project, select the desired features (React and TypeScript) and install all the dependencies by running:

```
npm install
```

To start the development server, use the following command:

```
npm run dev
```

This command will provide an executable codebase to begin working on the project.

### phosphor-react

Phosphor React is a library that provides a set of icons for React applications.

### dayjs

Day.js is a library for manipulating, parsing, and formatting dates.

### @radix-ui/react-dialog

This library provides unstyled, accessible components for building high-quality design systems and web apps in React. In this project, we are specifically using `react-dialog`.

To install the necessary packages, run the following commands:

```
npm install @radix-ui/react-dialog
npm install @radix-ui/react-popover
npm install @radix-ui/react-checkbox
```

### clsx

Clsx is a library that optimizes the creation of different conditions inside a class. It is especially useful when working with Tailwind CSS conditions.

### axios

Axios is a library for making HTTP requests. It speeds up the process and reduces the amount of code required to make HTTP requests from the frontend to the backend.

To install Axios, run the following command:

```
npm i axios
```

After installing Axios, create a file called `/src/lib/axios.ts` and add the following code:

```javascript
import axios from 'axios';
export const api = axios.create({
    baseURL: 'http://localhost:3333'
});
```

The `api` constant allows you to make connections to the backend.

## Development Packages

The following development packages are used in this project:

### tailwindcss

Tailwind CSS is an in-code CSS framework that utilizes class patterns. It provides a streamlined way of writing CSS within your codebase.

To install Tailwind CSS, run the following command:

```
npx tailwindcss init -p
```

This command creates the `postcss.config.cjs` file and integrates it with Vite.

### postcss

PostCSS is a tool for automating tasks within CSS. It is integrated with Tailwind CSS in this project.

### autoprefixer

Autoprefixer is a plugin for PostCSS that automatically adds vendor prefixes
