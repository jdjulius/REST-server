const express = require('express')
var cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/user';

        //middlewares
        this.middlewares();

        //rutas
        this.routes();
    }

    middlewares(){

        //directorio publico
        this.app.use(express.static('public'))

        //CORS
        this.app.use(cors())

        //lectura del post en json
        this.app.use(express.json());

    }

    routes() {
      
        this.app.use(this.usuariosPath, require('../routes/user'));

    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}

module.exports = Server;