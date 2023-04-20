import Acervo from "../Modelo/Acervo.js"
import conectar from "./Conectar.js";

export default class AcervoBD{

    async incluir(acervo){

        if(acervo instanceof Acervo){
            const conexao = await conectar();
            const sql = "INSERT INTO acervo(tituloDoLivro, autores, editora, edicao, anoPublicacao, dataAquisicao) VALUES(?,?,?,?,?,?)"
            const valores = [acervo.tituloDoLivro,acervo.autores,acervo.editora,acervo.edicao,acervo.anoPublicacao,acervo.dataAquisicao]
            const resultado =  await conexao.query(sql,valores);
            return await resultado[0].insertID;
        }
    }

    async alterar(acervo){
        if(acervo instanceof Acervo){
            const conexao = await conectar();
            const sql = "UPDATE acervo SET tituloDoLivro=?, autores=?, editora=?, edicao=?, anoPublicacao=?, dataAquisicao=? WHERE codigoRegisto=? "
            const valores = [acervo.tituloDoLivro, acervo.autores, acervo.editora, acervo.edicao, acervo.anoPublicacao, acervo.dataAquisicao, acervo.codigoRegisto]
            await conexao.query(sql, valores)
        }
    }

    async excluir(acervo){
        if(acervo instanceof Acervo){
            const conexao = await conectar();
            const sql = "DELETE FROM acervo WHERE codigoRegisto=?";
            const valores = [acervo.codigoRegisto]
            await conexao.query(sql, valores)
        }
    }

    async consultar(termo){
        const conexao = await conectar();
        const sql = "SELECT * FROM acervo WHERE tituloDoLivro LIKE ?";
        const valores = ['%' + termo + '%']
        const [rows] = await conexao.query(sql, valores);

        const listaLivros = [];

        for(const row of rows){
            const acervo = new Acervo(row['codigoRegisto'],row['tituloDoLivro'],row['autores'],row['editora'],row['edicao'],row['anoPublicacao'],row['dataAquisicao']);
            listaLivros.push(acervo);
        }
        return listaLivros
    }

    async consultarcodigoRegisto(codigoRegisto){
        const conexao = await conectar();
        const sql = "SELECT * FROM acervo WHERE codigoRegisto = ?";
        const valores = [codigoRegisto]
        const [rows] = await conexao.query(sql, valores);

        const listaLivros = [];

        for(const row of rows){
            const acervo = new Acervo(row['codigoRegisto'],row['tituloDoLivro'],row['autores'],row['editora'],row['edicao'],row['anoPublicacao'],row['dataAquisicao']);
            listaLivros.push(acervo);
        }
        return listaLivros;
    }
    
}