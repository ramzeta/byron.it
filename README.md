
My personal portfolio

This project was built using these technologies.

- React.js
- Node.js
- Express.js
- CSS3
- VsCode
- Vercel
- Docker

# Proyecto React Dockerizado

Este es un proyecto React dockerizado que te permite empaquetar y ejecutar tu aplicación React en un contenedor de Docker.

## Pasos para dockerizar el proyecto

Sigue los pasos a continuación para dockerizar tu proyecto React:

### Paso 1: Preparar el proyecto React

Asegúrate de que tu proyecto React esté completo y funcionando correctamente en tu entorno local.

### Paso 2: Crear un archivo Dockerfile

En el directorio raíz de tu proyecto, crea un archivo llamado `Dockerfile` y añade el siguiente contenido:


Este Dockerfile utiliza dos etapas: una para construir la aplicación React y otra para servir los archivos estáticos generados.

### Paso 3: Construir la imagen de Docker

Abre una terminal en el directorio raíz de tu proyecto y ejecuta el siguiente comando para construir la imagen de Docker:

docker build -t nombre_de_la_imagen .


Reemplaza `nombre_de_la_imagen` con el nombre que desees darle a tu imagen Docker. Asegúrate de incluir el punto (`.`) al final del comando.

### Paso 4: Ejecutar el contenedor de Docker

Una vez que se haya construido la imagen de Docker, ejecuta un contenedor basado en esa imagen utilizando el siguiente comando:

docker run -p 80:80 nombre_de_la_imagen


Esto ejecutará un contenedor basado en la imagen que creaste y mapeará el puerto 80 del contenedor al puerto 80 de tu máquina local.

Ahora podrás acceder a tu aplicación React en `http://localhost` en tu navegador web.

¡Eso es todo! Ahora tienes tu proyecto React dockerizado y listo para ser distribuido o ejecutado en cualquier entorno compatible con Docker.

