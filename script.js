const botao =document.queryelector("#botaomensagem");

const mensagem = document.queryselector("#mensageminterrativa");

const botoesCurtir = document.queryselectorall(".curtir");
botoesCurtir.forEach(function (botaocurtir){
let curtir = false;
botaoCurtir.addEventListener("click, curtir");
function curtir(){
const contador =botaoCurtir.querySelector("span");
if(curtir === false){
contador.textContent++;
curtir = true
}else{
contador.textContent--;
curtir = false;
}

}

})
    
