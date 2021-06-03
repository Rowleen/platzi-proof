<p>
	<img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" />
	<img alt="Webpack" src="https://img.shields.io/badge/-Webpack-8DD6F9?style=flat-square&logo=webpack&logoColor=white" />
	<img alt="Sass" src="https://img.shields.io/badge/-Stylus-CC6699?style=flat-square&logo=stylus&logoColor=white" />
	<img alt="html5" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
	<img alt="Prettier" src="https://img.shields.io/badge/-Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white" />
	<img alt="Nodejs" src="https://img.shields.io/badge/-esLint-43853d?style=flat-square&logo=ESLint&logoColor=white" />
	<img alt="git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" />
</p>

# Songs IO [![Build Status](https://travis-ci.org/Rowleen/platzi-proof.svg?branch=main)](https://travis-ci.org/Rowleen/platzi-proof)

Songs IO es una aplicación web pequeña para experimentar con el renderizado del lado de servidor con [Create React App](https://github.com/facebook/create-react-app) más [Express](https://expressjs.com/es/).

La app muestra un número limitado de letras de canciones las cuales se pueden filtrar por género y por rating.

Las letras de las canciones están limitadas por licencia.

Url de producción: https://songs-io.herokuapp.com/

## Responsive design

Se ha tenido en cuenta un breakpoint para dispositivos móviles con hasta un máximo de 414px.

## Tabla de contenidos

1. [Requisitos previos](https://github.com/Rowleen/platzi-proof#requisitos-previos).
2. [Instalación](https://github.com/Rowleen/platzi-proof#instalaci%C3%B3n).
3. [Scripts disponibles](https://github.com/Rowleen/platzi-proof#scripts-disponibles).
4. [Tecnologías y librerías](https://github.com/Rowleen/platzi-proof#tecnolog%C3%ADas-y-librer%C3%ADas).
5. [Git-Hook](https://github.com/Rowleen/platzi-proof#git-hooks).
6. [Despliegue](https://github.com/Rowleen/platzi-proof#despliegue).

## Requisitos previos

- Node js >= v12.16.1
- NPM >= 6.4.1

## Instalación

Una vez dentro del repositorio, en la raíz del proyecto, ejecuta el siguiente comando para instalar las dependencias.

```bash
npm install
```

## Scripts disponibles

### Iniciar el proyecto en modo desarrollo

```bash
npm run dev-start
```

Esto iniciará el proyecto con la configuración de las funciones que conectan con la _API_ y _Webpack_ en modo desarrollo.

Abriendo [http://localhost:3000](http://localhost:3000) podrás acceder mediante navegador a la aplicación.

Todo cambio que realices en los estilos o el código, se actualizará automáticamente en el navegador.

### Compilación del proyecto

```bash
npm run build
```

Compilará el proyecto para un entorno de producción. Esto es una versión que usa la configuración.

## Testing unitario

### Lanzamiento de test

```bash
npm run test
```

Este comando lanzara todas las pruebas definidas con Jest y anunciará si todo ha ido bien o por el contrario, algo ha fallado.

### Observación continua de test

```bash
npm run test:watch
```

Este comando mantendrá un proceso abierto para la escucha continua de los test mientras se programan. Irá arrojando información sobre si los test pasan o bien fallan.

### Covertura de test sobre el código

```bash
npm run test:coverage
```

Devuelve un reporte sobre qué tanto hemos cubierto con tests el código de la aplicación.

### Actualización de snapshots

```bash
npm run test:updateSnapshot
```

Actualizará todas las snapshots que ya se habían generado previamente.

## Testing E2E

```bash
npm run cy:open
```

Esto abrirá cypress con los test creados para probar la funcionalidad del front como si fueras un usuario.

### Linteo y formateo de código

Este proyecto usa la configuración de [esLint](https://eslint.org/) + [Prettier](https://prettier.io/) para formatear el código y anunciar errores de sintaxis y malas prácticas en el código en el que se está trabajando.

## Git-Hook

Se ha integrado un git-hook para que no permita el envío de código al repositorio si hay errores y/o se están cometiendo malas prácticas.

## Tecnologías y librerías

Para profundizar y saber qué librerías y comandos usa el proyecto, puedes revisar `package.json`.

### Dependencias base

- [React](https://es.reactjs.org/), para el desarrollo de las vistas y la interfaz de usuario.
- [Babel](https://babeljs.io/) - Transpilador de javascript modernos a javascript entendible por los navegadores.
- [Webpack](https://webpack.js.org/). Como sistema de empaquetado y buildeo de la aplicación.

  El archivo de configuración de _Webpack_ se llama _webpack.config.js_ y se encuentra en la raíz del proyecto.

### Renderizado del lado del servidor (SSR)

- [Express](https://expressjs.com/es/)

### Formateo y calidad de código

- [esLint](https://eslint.org/) para evaluar el código en búsqueda de errores, malas prácticas, errores semánticos y sintácticos. Su configuración está en el archivo `.eslintrc`.
- [Prettier](https://prettier.io/) formateador de código. Su configuración está en el archivo `.prettierrc`.
- [Jest](https://jestjs.io/), framework de testeo unitario para los componentes, estado de redux, acciones, etcétera.

### Peticiones asíncronas al back

- [Axios](https://github.com/axios/axios), permite lanzar promesas bastas en cliente HTTP para el navegador y node.js. Es de naturaleza isomórfica y además funciona en todos los navegadores (cross browsing ✔).

### Estilos

- [Stylus](https://stylus-lang.com/), como prepocesador de estilos CSS y la definición de variables globales para los distintos componentes de la aplicación.
- [autoprefixer]() para añadir prefijos de forma automática para conseguir mayor covertura de compatiblidad con todos los navegadores más populares.

## Despliegue

La aplicación cuenta con integración continua por medio de [Travis CI](https://travis-ci.org/) y se despliega en Heroku una vez pasadas todas las pruebas.

La app se puede probar en la siguiente URL: https://songs-io.herokuapp.com/
