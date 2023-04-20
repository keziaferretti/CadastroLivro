import Acervo from "../Modelo/Acervo.js";

export default class AcervoCtrl{
    
    gravar(requisicao, resposta){
        resposta.type("application/json")

        if(requisicao.method === "POST" && requisicao.is('application/json')){

            const dados = requisicao.body;
            const tituloDoLivro = dados.tituloDoLivro;
            const autores = dados.autores;
            const editora = dados.editora;
            const edicao = dados.edicao;
            const anoPublicacao =  dados.anoPublicacao;
            const dataAquisicao = dados.dataAquisicao;


            if(tituloDoLivro && autores && editora && edicao && anoPublicacao && dataAquisicao ){
                
                const acervo = new Acervo(0,tituloDoLivro, autores, editora,edicao,anoPublicacao,dataAquisicao);
                acervo.gravar().then(()=>{
                    resposta.status(200).json({
                        status:true,
                        codigoRegisto: acervo.codigoRegisto,
                        mensagem:"Livro gravado no acervo com sucesso!"
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                        status:false,
                        mensagem: erro.message
                    })
                })

            } else{
                resposta.status(400).json({
                    status: false,
                    mensagem:"Informe todos os dados do cliente!"
                })
            }
            
        }
        else{
            resposta.status(400).json({
                status:false,
                mensagem:"Metado não permitido ou cliente no formato json não fornecido!"
            })
        }
    }

    atualizar(requisicao, resposta){
      resposta.type("application/json")

      if(requisicao.method === "PUT" && requisicao.is('application/json')){

          const dados = requisicao.body;
          const codigoRegisto = dados.codigoRegisto;
          const tituloDoLivro = dados.tituloDoLivro;
          const autores = dados.autores;
          const editora = dados.editora;
          const edicao = dados.edicao;
          const anoPublicacao =  dados.anoPublicacao;
          const dataAquisicao = dados.dataAquisicao;
  

          if(codigoRegisto && tituloDoLivro && autores && editora && edicao && anoPublicacao && dataAquisicao){
              const acervo = new Acervo(codigoRegisto, tituloDoLivro, autores, editora,edicao,anoPublicacao,dataAquisicao);
              
              acervo.atualizar().then(()=>{
                  resposta.status(200).json({
                      status:true,
                      mensagem:"Livro atualizado no acervo com sucesso!!"
                  })
              }).catch((erro) => {
                  resposta.status(500).json({
                      status:false,
                      mensagem: erro.message
                  })
              })

          } else{
              resposta.status(400).json({
                  status: false,
                  mensagem:"Informe todos os dados do cliente!"
              })
          }
          
      }
      else{
          resposta.status(400).json({
              status:false,
              mensagem:"Metado não permitido ou cliente no formato json não fornecido!"
          })
      }
    }

    excluir(requisicao, resposta){
      resposta.type("application/json")

      if(requisicao.method === "DELETE" && requisicao.is('application/json')){

        const dados = requisicao.body;
        const codigoRegisto = dados.codigoRegisto;

        if(codigoRegisto){
          const acervo = new Acervo(codigoRegisto);
              
          acervo.removerDoBancoDados().then(()=>{
              resposta.status(200).json({
                  status:true,
                  mensagem:"Livro excluido no acervo com sucesso!!"
              })
          }).catch((erro) => {
              resposta.status(500).json({
                  status:false,
                  mensagem: erro.message
              })
          });

        } else{
            resposta.status(400).json({
                status: false,
                mensagem:"Informe todos os dados do cliente!"
            })
        }
      
      } else{
          resposta.status(400).json({
              status:false,
              mensagem:"Metado não permitido ou cliente no formato json não fornecido!"
          })
        }
    }    
    
    consultar(requisicao, resposta){
      resposta.type("application/json")

      if(requisicao.method === "GET"){

        const acervo = new Acervo();

        acervo.consultar('').then((acervo)=>{
            resposta.status(200).json(acervo);
        }).catch((erro) => {
            resposta.status(500).json({
                status: false,
                mensagem: erro.message
            })
        });

      } else {
          resposta.status(400).json({
              status:false,
              mensagem:"Método não permitido! Consulte a documentação da API"
          });
      }
  }


    consultarcodigoRegisto(requisicao, resposta){
        resposta.type("application/json")
        const codigoRegisto = requisicao.params['codigoRegisto'];

        if(requisicao.method === "GET"){
            const acervo = new Acervo();
            acervo.consultarcodigoRegisto(codigoRegisto).then((acervo)=>{
                resposta.status(200).json(acervo);

        }).catch((erro) => {
            resposta.status(500).json({
                status: false,
                mensagem: erro.message
            })
        });
        } else {
        resposta.status(400).json({
            status:false,
            mensagem:"Método não permitido! Consulte a documentação da API"
        });
        }

    }
}