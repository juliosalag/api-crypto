# Pruebas js de criptograf铆a y JWT

_Ejemplos de criptograf铆a con (bcrypt) y JWT_

## Comenzando 馃殌

_Estas instrucciones te permitir谩n obtener una copia del proyecto en funcionamiento en tu m谩quina local para prop贸sitos de desarrollo y pruebas._

Ver **Despliegue** para conocer c贸mo desplegar el proyecto.


### Pre-requisitos 馃搵

_Este proyecto se puede desarrollar igual en **Windows**, **Linux** u **OS X** aunque se recomienda usar una m谩quina virtual con LINUX para tener un seguimiento y un mentenimiento futuro m谩s sencillo._

_Se recomienda instalar la 煤ltima versi贸n estable de 64 bits de la distribuci贸n **Ubuntu** de Linux (20.04 LTS actualmente)._

```
Se recomienda un m铆nimo de 2GHz de procesador, 4GB de RAM y 25GB de HD._ 
```

### Instalaci贸n 馃敡

Vamos a instalar las aplicaciones y herramientas que se utilizar谩n

_Vamos a instalar el gestor de paquetes de **Node (npm)**._
```
sudo apt update 
sudo apt install npm
```
_Para el formateo de fechas en js utilizamos **moment**._
```
npm i -S moment
```
_Para la creaci贸n del hash **bcrypt**._
```
npm i -S bcrypt
```
_Para la creaci贸n, codificaci贸n y decodificaci贸n de tokens, **jwt**._
```
npm i -S jwt-simple
```

## Despliegue 馃摝

_Primero vamos a clonar el repositorio de github._
```
git clone "https://github.com/juliosalag/api-crypto.git" api-crypto
cd api-crypto
```


## Ejecutando las pruebas 鈿欙笍

Se pueden ejecutar 2 tipos distintos de pruebas:

### bcrypt

_Para la creaci贸n de un hash a partir de un string (en nuestro caso una contrase帽a)._

```
node pass-test.js
```

### jwt

_Para la creaci贸n de un token a partir de un string (en nuestro caso una contrase帽a)._
```
node jwt-test.js
```

## Construido con 馃洜锔?

* [VSCode](https://code.visualstudio.com/Download) - Editor de texto

## Autor 鉁掞笍

* **Julio Sala Gallardo** - *Trabajo y documentaci贸n* - [jsala](https://github.com/juliosalag)

## Licencia 馃搫

Este proyecto est谩 bajo la Licencia Open Source Initiative
