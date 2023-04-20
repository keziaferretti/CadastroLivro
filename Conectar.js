import mysql2 from 'mysql2/promise'

export default async function conectar(){

    if(global.conexao && (global.conexao.status != 'disconnected')){
        return global.conexao;
    }

    const conexao = await mysql2.createConnection({
        host:"localhost",
        user:'root',
        password:'',
        database:'BackendAcervo'
    });

    global.conexao = conexao;
    
    return conexao;

}