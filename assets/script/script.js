class Produto {
    constructor() {
        this.id = 1
        this.arrayProdutos = []
    }

    salvar() {
        let produto = this.lerDados()
        //Validando se a função validarCampos retornou verdadeiro (se retornou verdadeiro é pq os campos foram preenchidos)
        if (this.validarCampos(produto) == true) {
            this.adicionar(produto)

        }
        this.listaTabela()
    }
    adicionar(produto) {
        //a função push irá adicionar os campos dentro do array
        this.arrayProdutos.push(produto)
        this.id++
    }

    listaTabela() {
        let tbody = document.getElementById('tbody')
        tbody.innerText = '' //Para não duplicar os dados na tabela.
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow()

            let td_id = tr.insertCell()
            let td_produto = tr.insertCell()
            let td_preco = tr.insertCell()
            let td_acoes = tr.insertCell()

            td_id.innerText = this.arrayProdutos[i].id
            td_produto.innerText = this.arrayProdutos[i].nomeProduto
            td_preco.innerText = this.arrayProdutos[i].preco

            td_id.classList.toggle('center');

            let imgEdit = document.createElement('img')
            imgEdit.src = 'assets/img/edit.png';

            td_acoes.appendChild(imgEdit);
        }
    }

    lerDados() {
        let produto = {}
            
            produto.id = this.id
            produto.nomeProduto = document.getElementById('produto').value
            produto.preco = document.getElementById('preco').value

            return produto        
    }

    validarCampos(produto) {
        let msg = ''
        
        if (produto.nomeProduto == '') {
            msg += 'Informe o nome do Produto \n'
        }
        if (produto.preco == '') {
            msg += 'Informe o preço do Produto \n'
        }
        if (msg != '') {
            alert(msg)
            return false
        }
        return true
    }

    cancelar() {
        
    }
}
//Criando um objeto do tipo Produto e atribuindo a variável produto.
var produto = new Produto()