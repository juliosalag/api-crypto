# Pruebas js de criptografía y JWT

_Ejemplos de criptografía con (bcrypt) y JWT_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Ver **Despliegue** para conocer cómo desplegar el proyecto.


### Pre-requisitos 📋

_Este proyecto se puede desarrollar igual en **Windows**, **Linux** u **OS X** aunque se recomienda usar una máquina virtual con LINUX para tener un seguimiento y un mentenimiento futuro más sencillo._

_Se recomienda instalar la última versión estable de 64 bits de la distribución **Ubuntu** de Linux (20.04 LTS actualmente)._

```
Se recomienda un mínimo de 2GHz de procesador, 4GB de RAM y 25GB de HD._ 
```

### Instalación 🔧

Vamos a instalar las aplicaciones y herramientas que se utilizarán

_Vamos a instalar el gestor de paquetes de **Node (npm)**._
```
sudo apt update 
sudo apt install npm
```
_Para el formateo de fechas en js utilizamos **moment**._
```
npm i -S moment
```
_Para la creación del hash **bcrypt**._
```
npm i -S bcrypt
```
_Para la creación, codificación y decodificación de tokens, **jwt**._
```
npm i -S jwt-simple
```

## Despliegue 📦

_Primero vamos a clonar el repositorio de github._
```
git clone "https://github.com/juliosalag/api-crypto.git" api-crypto
cd api-crypto
```


## Ejecutando las pruebas ⚙️

Se pueden ejecutar 2 tipos distintos de pruebas:

### bcrypt

_Para la creación de un hash a partir de un string (en nuestro caso una contraseña)._

```
node pass-test.js
```

### jwt

_Para la creación de un token a partir de un string (en nuestro caso una contraseña)._
```
node jwt-test.js
```

## Construido con 🛠️

* [VSCode](https://code.visualstudio.com/Download) - Editor de texto

## Autor ✒️

* **Julio Sala Gallardo** - *Trabajo y documentación* - [jsala](https://github.com/juliosalag)

## Licencia 📄

Este proyecto está bajo la Licencia Open Source Initiative
