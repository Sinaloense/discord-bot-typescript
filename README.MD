# LEER #

## Información ##

* Discord Bot TypeScript
* Desarrollado con NodeJS y TypeScript (ECMAScript 6)

## Instalación ##

* Es necesario tener instalado NodeJS.

    CentOS

    `curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -`

    Ubuntu

    `curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash - sudo apt-get install -y nodejs`

    Otros sistemas operativos (Se recomienda instalar la versión LTS)

    `https://nodejs.org/en/download/`

## Ejecutar bot en modo desarrollador ##
Ubicarse en la línea de comandos en la carpeta del proyecto.

* Descargar módulos necesarios del proyecto

    `npm install`<br />
    `npm i -g typescript`<br />
    `npm i -g nodemon`

* Generar build ejecutable (.js)

    `tsc --watch`

* Ejecutar bot desde el build generado

    `nodemon server.js`

## Ejecutar bot en modo producción ##
Ubicarse en la línea de comandos en la carpeta del proyecto.

* Descargar módulos necesarios del proyecto

    `npm install`

* Ejecutar comandos desde el build generado

    `node helpers/registerCommandsHelper.js`

* Ejecutar bot desde el build generado

    `node server.js`