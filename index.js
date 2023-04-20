import express from 'express';
import rotaAcervo from './Rotas/rotaAcervo.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use('/acervos', rotaAcervo);

app.listen(4000,'localhost',()=>{
     console.log("Backend ouvindo em http://localhost:4000/acervos")
});