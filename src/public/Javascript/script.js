import SelecaoService from "./SelecaoService.js";

preencherTabela();

document.getElementById("btn_criar").addEventListener("click", () =>{

    let cr_selecao = document.getElementById("selecao").value;
    let cr_grupo = document.getElementById("grupo").value;

    const selecao = {
        selecao: cr_selecao,
        grupo: cr_grupo
    }
    
    SelecaoService.adicionarSelecao(selecao).then((res) => {
        console.log(res.mensagem);
        alert("Seleção criada com sucesso!");
        preencherTabela();

    }).catch((err) => {
        console.error("Erro ao criar:", err);
    });

    document.getElementById("selecao").value = ""; 
    document.getElementById("grupo").value = ""; 


});

document.getElementById("btn_ler").addEventListener("click", () =>{
    
    let idLer = document.getElementById("idLer").value.trim().toUpperCase();
    console.log(idLer);
    let numero = Number(idLer);

    if(idLer == ""){
        SelecaoService.buscarSelecoes().then((res) => {
            console.log(res.mensagem);
            console.log(res.dados);
            alert("Seleções lidas com sucesso!");
            preencherTabela();
        })
    }else if(!isNaN(numero) && Number.isInteger(numero)){
        SelecaoService.buscarSelecoesPorId(idLer).then((res) => {
            alert("Seleção lida com sucesso!");
            console.log(res.mensagem,res.dados);
            preencherTabela(res.dados, SelecaoService.buscarSelecoesPorId(idLer));
        
        })
    }else{
        SelecaoService.buscarSelecoesPorGrupo(idLer).then((res) => {
            alert("Seleções lidas com sucesso!");
            console.log(res.mensagem,res.dados);
            preencherTabela(res.dados, SelecaoService.buscarSelecoesPorGrupo(idLer));
        });
    }

    document.getElementById("idLer").value = "";
   
});

document.getElementById("btn_atualiza").addEventListener("click", () =>{

    let idAtualizar = document.getElementById("idAtualiza").value;
    let at_selecao = document.getElementById("novaSelecao").value;
    let at_grupo = document.getElementById("novoGrupo").value;

    const selecao = {
        selecao: at_selecao,
        grupo: at_grupo,
    }

    SelecaoService.atualizarSelecao(idAtualizar, selecao).then((res) => {
        console.log(res.mensagem);
        alert("Seleção atualizada com sucesso!");
        preencherTabela();
    }).catch((err) => {
        console.error("Erro ao atualizar:", err);
    });

    document.getElementById("idAtualiza").value = ""; 
    document.getElementById("novaSelecao").value = ""; 
    document.getElementById("novoGrupo").value = ""; 

    
});

document.getElementById("btn_deletar").addEventListener("click", () =>{
    let idDeletar = document.getElementById("idDeleta").value;

    SelecaoService.deletarSelecao(idDeletar).then((res) => {
        console.log(res.mensagem);
        alert("Seleção deletada com sucesso!");
        preencherTabela();
    })
    .catch((err) => {
        console.error("Erro ao deletar:", err);
    });

    document.getElementById("idDeleta").value = ""; // Limpa o campo após a deleção
})




function preencherTabela(dado_sele, filtro = SelecaoService.buscarSelecoes()) {
    filtro.then((res) => {
        const tbody = document.getElementById("tabela-selecoes")
        tbody.innerHTML = ""; // Limpa o conteúdo atual da tabela
      

       if (dado_sele == undefined || dado_sele == "" || dado_sele == null){
        
        res.dados.forEach((selecao) => {
            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${selecao.id}</td>
                <td>${selecao.selecao}</td>
                <td>${selecao.grupo}</td>
            `

            tbody.appendChild(tr);
        })
       }
       else{

            dado_sele.forEach((selecao) => {
                const tr = document.createElement("tr");

                tr.innerHTML = `
                    <td>${selecao.id}</td>
                    <td>${selecao.selecao}</td>
                    <td>${selecao.grupo}</td>
                `

                tbody.appendChild(tr);
            })
        }
    })
    .catch((error) => {
            console.error("Erro ao buscar seleções:", error);
        });
   
}


