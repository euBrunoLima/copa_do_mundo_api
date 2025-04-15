 class  SelecaoService{
    
    constructor(){
        this.baseUrl = "http://localhost:3100/selecoes"
    }


    async buscarSelecoes(){
        const response = await fetch(this.baseUrl);
        return response.json();
    }

    async buscarSelecoesPorId(id){
        const response = await fetch(this.baseUrl +"/"+id);
        return response.json();
       
    }

    async buscarSelecoesPorGrupo(grupo){
        const response = await fetch(this.baseUrl +"/grupo/"+grupo);
        return response.json();

    }

    async adicionarSelecao(selecao){
        const response = await fetch(this.baseUrl,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(selecao)
            }
        );
        return response.json();
    }
    

    async atualizarSelecao(id,selecao){
        const response = await fetch(`${this.baseUrl}/${id}`,
            {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(selecao)
        });
        return response.json();
    }

    async deletarSelecao(id){
        const response = await fetch(`${this.baseUrl}/${id}`,{
            method: 'DELETE'
        });
        return response.json();
    }

       
}









export default new SelecaoService();