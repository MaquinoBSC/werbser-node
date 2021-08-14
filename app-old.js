
const http= require('http');

//request es lo que estan solicitando, toda la informacion que estan pidiendo en mi sitio web
//response es lo que el servidor le va a responder al cliente
http.createServer((request, response)=> {
    
    response.write("Hola Mundo");
    //response.write('Hola server');
    response.end();//Termina la respu
})
.listen(8080);//Puero en el que el servidor estara levantado

console.log("escuchando en el puerto", 8080);
