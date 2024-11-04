# Next.js Project with TypeScript, Zustand, and Atomic Design

This project uses Next.js with TypeScript, follows Atomic Design principles, and uses Zustand for state management. The project structure includes various folders for types, hooks, validations, utils, adapters, services, and data.

## Requerimientos

- Node.js >= 16.x
- npm >= 6.x

## Instrucciones para iniciar

1. Clonar el repositorio:

   ```sh
   git clone https://github.com/No-Country-simulation/c21-41-t-node-react.git
   cd frontend
   ```

2. Instalar dependencias:

   ```sh
   npm install
   ```

3. Iniciar el servidor de desarrollo:

   ```sh
   npm run dev
   ```

4. Abrir [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

## Bibliotecas y Herramientas

Aquí tienes una lista de las bibliotecas y herramientas utilizadas en este proyecto junto con una breve descripción y enlaces a su documentación oficial.

### Dependencias

- **[Next.js](https://nextjs.org/docs):** Un framework React para producción.
- **[React](https://react.dev/):** Una biblioteca de JavaScript para construir interfaces de usuario.
- **[React Hook Form](https://react-hook-form.com/get-started):** Formularios de alto rendimiento, flexibles y extensibles con validación fácil de usar.
- **[Axios](https://axios-http.com/docs/intro):** Un cliente HTTP basado en promesas para el navegador y Node.js.
- **[Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction):** Una solución de gestión de estado pequeña, rápida y escalable.
- **[Zod](https://zod.dev/):** Una biblioteca de declaración y validación de esquemas.

### Dependencias de Desarrollo

- **[TypeScript](https://www.typescriptlang.org/docs/):** Un lenguaje de programación fuertemente tipado que se basa en JavaScript.
- **[ESLint](https://eslint.org/docs/latest/):** Una herramienta de análisis de código estático para identificar patrones problemáticos en código JavaScript.
- **[Prettier](https://prettier.io/docs/en/index.html):** Un formateador de código opinado.
- **[Tailwind CSS](https://tailwindcss.com/docs):** Un framework CSS utilitario primero para construir diseños personalizados rápidamente.

## Project Structure

```
src
├── adapters # Funciones para modificar la respuesta de APIs
├── components # Componentes siguiendo Atomic Design
│ ├── atoms
│ ├── molecules
│ └── organisms
├── data # Constantes, mock data
├── hooks # React custom hooks
├── services
│ ├── api # llamadas de API con axios y su configuración
│ ├── queries # Solicitar Data y manejo de Loading, Errores y Cache con Tanstack Query
│ └── mutations # Envió, actualización de data con Tanstack Query
├── types # TypeScript types
├── utils # Utility functions
├── validations # Zod validation schemas
└── env.ts # Environment variable validation
```

# Guías para el desarrollo

## Estructura de carpetas y archivos para componentes

Cada componente debe estar en su propia carpeta, dependiendo de si es un componente que tenga variantes o props types extensos/complejos estos deben separarse a su propio archivo especificando si es types o styles:

```
atoms/
└── Button
    ├── Button.tsx
    ├── Button.types.ts
    └── Button.styles.ts
```

Ejemplos:

```typescript
// Button.tsx
import { ButtonProps } from "./Button.types";
import { buttonVariants } from "./Button.styles";

export function Button({ children, onClick }: ButtonProps) {
  return <button onClick={onClick} className={buttonVariants}>{children}</button>;
};

```

```typescript
// Button.types.ts
import { ButtonHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "./styles";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  link?: boolean;
}
```

```typescript
// Button.styles.ts
import { cva } from "class-variance-authority";

export const buttonVariants = cva("disabled:pointer-events-none", {
  variants: {
    variant: {
      base: " flex px-4 py-3 rounded-lg border-primary-lightBlue bg-primary-lightBlue text-base font-medium text-white duration-300 hover:border-primary-lighterBlue hover:bg-primary-lighterBlue",
      destructive:
        " flex px-4 py-3 rounded-lg border-primary-red bg-primary-red text-base font-medium text-white duration-300 hover:border-primary-red hover:bg-primary-red",
    },
  },
  defaultVariants: {
    variant: "base",
  },
});
```

## Compartir estados o información entre componentes con Zustand:

### Ejemplo de un Zustand Store

```typescript
import create from "zustand";

interface BearState {
  bears: number;
  increase: () => void;
}

export const bearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
}));
```

### Utilizando el Zustand Store en un componente

```typescript

import useStore from "../store/useStore";

export function BearCounter(){
  const bears = useStore((state) => state.bears);
  const increase = useStore((state) => state.increase);

  return (
    <>
      <h1>{bears} around here ...</h1>
      <button onClick={increase}>one up</button>
    </>
  );
};

```

Mas información en [Zustand Docs](https://zustand.docs.pmnd.rs/guides/typescript)

### Problemas o errores con typescript:

Para no retrasar el avance por errores de typescript, en caso de emergencia se puede utilizar el type helper TODO, ubicado en src/types/helpers. Ejemplo:

```typescript
import { TODO } from "@/types/helpers";

interface SomeComponentProps {
  title: string;
  someCallback: TODO;
}
```

# Git Workflow

## Branching Strategy

1. Cambiar a la rama development y traer los últimos cambios:

```sh
git checkout development
git pull origin development
```

2. Create a new branch:

```sh
# Feature
git checkout -b feature/branch-name

# Fix
git checkout -b fix/branch-name

# Refactor
git checkout -b refactor/branch-name
```

3. Realizar cambios y hacer el commit:

```sh
git add .
git commit -m "feat: description of the feature"
```

4. Subir los cambios al repositorio remoto:

```sh
git push -u origin feature/branch-name
```

5. Crear un "pull request" a la rama development en GitHub.

## Guía para los Commits

El proyecto sigue los lineamientos especificados en
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#specification)

## Tipos de Commit (Ejemplos)

### Features

```
feat: added new login form component
```

### Refactor

```
refactor: optimized data fetching logic
```

### Fixes

```
fix: resolved button alignment issue
```

### Documentation

```
docs: updated contributing guidelines
```
