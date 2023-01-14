class Produto {
    constructor() {
        this.id = 1
        this.arrayProdutos = []
        this.editId = null;//Quando este ítem estiver com valor diferente de null
                           //quer dizer que vc está fazendo uma edição e se estiver null vc está inserindo novo dado.
    }

    salvar() {
        let produto = this.lerDados()
        //Validando se a função validarCampos retornou verdadeiro (se retornou verdadeiro é pq os campos foram preenchidos)
        if (this.validarCampos(produto) == true) {
            if (this.editId == null) {
                this.adicionar(produto)
            }else {
                this.atualizar(this.editId, produto)
            }
            

        }
        this.listaTabela()
        this.cancelar()
    }
    adicionar(produto) {
        produto.preco = parseFloat(produto.preco)
        //a função push irá adicionar os campos dentro do array
        this.arrayProdutos.push(produto)
        this.id++
    }

    atualizar(id, produto) {
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if (this.arrayProdutos[i].id == id) {
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto
                this.arrayProdutos[i].preco = produto.preco
            }
        }
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
            imgEdit.setAttribute("onclick", "produto.preparaEdicao("+ JSON.stringify(this.arrayProdutos[i]) +")")

            let imgDelete = document.createElement('img')
            imgDelete.src = 'assets/img/delete.png';
            /*O setAttribute é uma função que recebe dois parâmetros, o primeiro é o evento que
            vc quer disparar, e o segundo é a função que será chamada.
            Neste caso colocamos o evento de click na imagem de deletar, chamando
            suas respectivas funções
            Obs, ao chamar a função, precisamos saber qual linha vamos deletar ou alterar, para isso
            vamosconcatenar com o arrayProdutos na posição [i] que já temos.
            */
            imgDelete.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos[i].id +")")

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);
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
        document.getElementById('produto').value = ''
        document.getElementById('preco').value = ''

        document.getElementById('btn1').innerText = 'Salvar'
        this.editId = null
    }
    deletar(id) {
        if (confirm (`Deseja realmente Deletar o produto do ID ${id}`)) {
            let tbody = document.getElementById('tbody')
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            /*Validando se ID do nosso array for igual ao ID que recebemos no parâmetro
            então deletar o objeto do array, usando o método splice, que passamos dois parâmetros, onde
            o primeiro é o índice que vamos deletar e o segundo é quantos registros vc quer deletar,
            no nosso caso apenas 1.
            */
            if (this.arrayProdutos[i].id == id) {
                this.arrayProdutos.splice(i, 1)
                tbody.deleteRow(i)
                console.log(this.arrayProdutos)                
            }
        }
        }
    }
    preparaEdicao(dados) {
        this.editId = dados.id
        document.getElementById('produto').value = dados.nomeProduto
        document.getElementById('preco').value = dados.preco
        document.getElementById('btn1').innerText = 'Atualizar'

    }
}
//Criando um objeto do tipo Produto e atribuindo a variável produto.
var produto = new Produto()