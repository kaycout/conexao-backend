function carregar(){
    //vamos fazer uma referencia ao container que está 
    //na página e, assim manipularmos a div container 
    //pelo javascript
    const container = document.getElementById("container");
    //vamos requisitar a url do backend que lista os clientes cadastrados.
    //faremos o uso do comando fetch(busca) passando a url e dentro 
    //da estrutura do feach fazer a montagem da exibicao dos dados 
    //dos clientes.

    fetch("http://127.0.0.1:3000/listar")
    .then((res)=>res.json())
    .then((dados)=>{
        let saida = "";
        dados.msg.map((cli)=>{
            	saida+=`<div class="cliente">
                <p>Id:${cli.id}</p>
                <h2>Nome:${cli.nome}</h2>
                <h2>E-mail:${cli.email}</h3>
                </div>`
        })
        container.innerHTML = saida;

    })

}

function cadastrar(){
    const nome = document.getElementById("txtnome");
    const email = document.getElementById("txtemail");
    const usuario = document.getElementById("txtusuario");
    const senha = document.getElementById("txtsenha");

    //fetch será utilizado para fazer a requisicao da url de
    //cadastro e a passagem dos dados do cliente para cadastrar.
    //este fetch terá algumas configurações:
    //método de envio: METHOD=POST
    //cabeçalho de requisicacai: APLICATION/Json
    //Corpo de requisicao: onde você deve estruturar e 
    //enviar dados para cadastro

fetch("http://127.0.0.1:3000/cadastrar",{
            method:"POST",
            headers:{
            "accept":"application/json",
            "content-type":"application/json"
            },
            body:JSON.stringify({
            nome:nome.value,
            email:email.value,
            usuario:usuario.value,
            senha:senha.value
        })
    })
    .then((res)=>res.json())
    .then((dados)=>{
        alert(dados.msg);
        document.location.reload()
    })
    .catch((error)=>console.log(`Erro ao executar a api ${error}`))
}

const cad = document.getElementById("cadastro");
cad.onclick = ()=>{
    document.getElementById("form").style.display = "block";
}
