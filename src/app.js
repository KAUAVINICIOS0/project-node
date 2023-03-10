import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

class App{

    constructor(){
        this.server = express();
        mongoose.set("strictQuery", false);
        mongoose.connect('mongodb+srv://devhouse:devhouse@devhouse.now114y.mongodb.net/?retryWrites=true&w=majority',{
          useNewUrlParser: true,
          useUnifiedTopology: true, 
          
        });
        
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}

export default new App().server;


/*TESTE*/