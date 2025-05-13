# Proyecto Vite + React

Este repositorio contiene la prueba tecnica.

## Descripción

Proyecto de ejemplo que utiliza Vite como herramienta de construcción y React como librería de interfaz de usuario.

## Requisitos

* Node.js (versión 14 o superior)
* npm (v6 o superior) o Yarn

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/SARUCA1/prueba-tecnica
   cd tu-repo
   ```
2. Instala las dependencias:

   ```bash
   npm install
   ```

   o si usas Yarn:

   ```bash
   yarn install
   ```

## Ejecución en modo desarrollo

Inicia el servidor de desarrollo con hot reload:

```bash
npm run dev
```

Por defecto, estará disponible en [http://localhost:5173](http://localhost:5173).

## Compilación para producción

Genera los archivos estáticos optimizados:

```bash
npm run build
```

Los artefactos se generarán en la carpeta `dist/`.

## Vista previa de producción

Puedes previsualizar el build con:

```bash
npm run preview
```

## Estructura del proyecto

La estructura de carpetas y archivos de este proyecto es la siguiente:

```
.
├── public/                 # Archivos estáticos servidos tal cual
├── src/                    # Código fuente
│   ├── assets/             # Imágenes y recursos estáticos
│   ├── components/         # Componentes React en TypeScript
│   │   ├── Arrow.tsx
│   │   ├── CompanyPortfolio.tsx
│   │   ├── ContactUs.tsx
│   │   ├── Footer.tsx
│   │   ├── FoundingPartners.tsx
│   │   ├── Hero.tsx
│   │   ├── TrustedBy.tsx
│   │   └── WhoWeAre.tsx
│   ├── App.tsx             # Componente raíz de la aplicación
│   ├── App.css             # Estilos globales de App
│   ├── index.css           # Estilos globales y variables
│   ├── main.tsx            # Punto de entrada y montaje de React
│   └── vite-env.d.ts       # Definiciones de tipos para Vite + TS
├── tsconfig.json           # Configuración base de TypeScript
├── tsconfig.app.json       # Configuración de TS para la aplicación (opcional)
├── vite.config.ts          # Configuración de Vite
├── package.json            # Dependencias y scripts
├── package-lock.json       # Lockfile generado por npm
├── README.md               # Documentación del proyecto
└── .gitignore              # Archivos y carpetas ignorados por Git
```
