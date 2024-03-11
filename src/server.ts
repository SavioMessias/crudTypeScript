import 'reflect-metadata'; //trabalha com anotation;
import express from 'express'; //gerencia aplicação internamente;
import cors from 'cors'; //permite que as requisições que venham do front-end não sejam bloqueadas;
import { AppDataSource } from './database/data-source';
import routers from './app/routes/routes';


const app = express();

app.use(cors());

app.use(express.json());

app.use(routers);

AppDataSource.initialize().then(async () => {
  console.log(`Database OK`);
  app.listen(3333, () => {
    console.log(`Server started on port 3333`);
    
  })
}) //Verificação da conexão com o banco;

