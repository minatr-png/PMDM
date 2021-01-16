# Place my bet

## Funcionalidades extra

Al hacer el bloqueo de mercados me di cuenta de que era un poco extraño que pudieras cambiar el bloqueo de un mercado según su id y que no pudieras ver si este estaba bloqueado o no, por ello decidí crear una tabla en la que se muestran los mercados con algunos datos básicos.

## Instrucciones de uso

Para hacer uso de esta aplicación lo primero que se debe de hacer es iniciar el servicio MySql con Xampp.
Después deberás arrancar la web api, que se encuentra en la carpeta con su mismo nombre, el archivo a ejecutar es el siguiente "PlaceMyBetApp.sln" (usando Visual Studio). 

Al haber arrancado ese archivo en caso de no tener la base de datos creada lo primero que se deberá de hacer es ejecutar el siguiente comando "update-database" en la consola del administrador de paquetes la cual se encuentra en la pestaña "herramientas" dentro de "Administrador de paquetes NuGet" en "Consola del Administrador de paquetes".

Finalmente deberas de abrir en una "cmd" la carpeta "pmb-backoffice" y estando ahí ejecutar el comando "npm i react-scripts" y una vez instalado esto "npm start".

Si quieres tener más datos en la base de datos para ver el funcionamiento de la aplicación en mejor forma se recomienda ejecutar archivo "Ejemplos.sql" con algún programa como heidisql.
