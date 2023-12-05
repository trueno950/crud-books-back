# Prueba Técnica Gpromass - Backend

Este repositorio contiene el código fuente del backend para la prueba técnica de gpromass. A continuación, se detallan los estándares y las directrices para el desarrollo y mantenimiento del proyecto.

## Requisitos

Asegúrate de tener instalada la versión recomendada de Node.js y TypeScript para el proyecto. Puedes descargar Node.js desde [el sitio oficial de Node.js](https://nodejs.org/) y TypeScript mediante el comando `npm install -g typescript`.

**Versión recomendada de Node.js:** 18.18.0  
**Versión recomendada de TypeScript:** 4.9.5

## Estructura del Proyecto

El proyecto sigue una estructura organizada para facilitar el mantenimiento y la escalabilidad. A continuación, se presenta una breve descripción de las carpetas clave en el proyecto:

- `src`: Contiene el código fuente de la aplicación.
- `dist`: Almacena los archivos compilados para la ejecución de la aplicación.

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona este repositorio: `git clone https://github.com/tu-usuario/prueba-tecnica-gpromass-back.git`
2. Entra al directorio del proyecto: `cd prueba-tecnica-gpromass-back`
3. Instala las dependencias: `npm install`

## Configuración de SQL Server Authentication
**Descarga SQL Server:**
   - Visita [Microsoft SQL Server](https://www.microsoft.com/sql-server/).
   - Descarga la versión Developer.

Antes de comenzar, asegúrate de haber habilitado la autenticación de SQL Server. Puedes seguir [este enlace](https://www.dundas.com/support/learning/documentation/installation/how-to-enable-sql-server-authentication) para obtener instrucciones detalladas sobre cómo habilitar la autenticación de SQL Server.

## Scripts NPM

- **dev**: Inicia el servidor de desarrollo utilizando `ts-node-dev`.
- **build**: Compila el código TypeScript a la carpeta `dist`.
- **start**: Inicia la aplicación desde los archivos compilados en `dist`.
