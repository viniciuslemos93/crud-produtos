class Produto {
    constructor() {
        this.id = 0;
        this.nomeProduto = '';
        this.valor = 0;
    }

    adicionar() {
        alert("Adicionar vou acionado!")
    }

    excluir() {
        alert("ítem deletado!")
    }
}
//Criando um objeto do tipo Produto e atribuindo a variável produto.
var produto = new Produto()