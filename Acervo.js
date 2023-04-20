import AcervoBD from "../Persistencia/AcervoBD.js"

export default class Acervo{
    //atributos
    #codigoRegisto
    #tituloDoLivro; 
    #autores;
    #editora;
    #edicao;
    #anoPublicacao;
    #dataAquisicao;


    //construtor 
    constructor(codigoRegisto, tituloDoLivro, autores, editora, edicao, anoPublicacao, dataAquisicao){
        this.#codigoRegisto = codigoRegisto;
        this.#tituloDoLivro = tituloDoLivro;
        this.#autores = autores;
        this.#editora = editora;
        this.#edicao = edicao;
        this.#anoPublicacao = anoPublicacao;
        this.#dataAquisicao = dataAquisicao;

    }

    get codigoRegisto(){
        return this.#codigoRegisto;
    }

    set codigoRegisto(novocodigoRegisto){
        this.#codigoRegisto = novocodigoRegisto;
    }

    get tituloDoLivro(){
        return this.#tituloDoLivro;
    }
    //alterar atribuir
    set tituloDoLivro(novotituloDoLivro){
        if(novotituloDoLivro != "") 
            this.#tituloDoLivro = novotituloDoLivro;
    }
    
    get autores(){
        return this.#autores;
    }

    set autores(novoautores){
        this.#autores = novoautores;
    }

    get editora(){
        return this.#editora;
    } 

    set editora(novoeditora){
        this.#editora = novoeditora;
    }

    get edicao(){
        return this.#edicao;
    }

    set edicao(novoedicao){
        this.#edicao = novoedicao;
    }
    
    get anoPublicacao(){
        return this.#anoPublicacao;
    }

    set anoPublicacao(novoanoPublicacao){
        this.#anoPublicacao = novoanoPublicacao;
    }

    get dataAquisicao(){
        return this.#dataAquisicao;
    }

    set dataAquisicao(novodataAquisicao){
        this.#dataAquisicao = novodataAquisicao;
    }



    //método toJSON
    toJSON(){
        return{
            "codigoRegisto"             : this.codigoRegisto,
            "tituloDoLivro"             : this.#tituloDoLivro,
            "autores"                   : this.#autores,
            "editora"                   : this.#editora,
            "edicao"                    : this.#edicao,
            "anoPublicacao"             : this.#anoPublicacao,
            "dataAquisicao"             : this.#dataAquisicao,
        }
    }

    async gravar(){
        const acervoBD = new AcervoBD();
        this.codigoRegisto = await acervoBD.incluir(this);
    }

    async atualizar(){
        const acervoBD = new AcervoBD();
        await acervoBD.alterar(this);
    }

    async removerDoBancoDados(){
        const acervoBD = new AcervoBD();
        await acervoBD.excluir(this);
    }

    async consultar(termo){
        const acervoBD = new AcervoBD();
        const acervo = await acervoBD.consultar("");
        return acervo;
    }

    async consultarcodigoRegisto(codigoRegisto){
        const acervoBD = new AcervoBD();
        const acervo = await acervoBD.consultarcodigoRegisto(codigoRegisto);
        return acervo;
    } 


}