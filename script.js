//linguagem de programação;

const url = "viacep.com.br/ws/01001000/json/";

//fetch => Pega os dados da API
// then => Decide o que eu vou fazer com a resposta do fetch
    function buscarApi(url){
 fetch(url)
    .then(resposta => resposta.json())
    then(data => {
        if(data.erro) {
            console.lag("CEP não encontrado")
        }else{
            console.log(data)
        }
    })
    }
   