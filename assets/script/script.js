function cadastarProduto(nome, categoria, preco) {
    var tb = document.getElementById("tbProdutos")
    var qtdLinhas = tb.rows.length
    var linha = tb.insertRow(qtdLinhas)

    var cellCodigo = linha.insertCell(0)
    var cellNome = linha.insertCell(1)
    var cellCategoria = linha.insertCell(2)
    var cellPreco = linha.insertCell(3)

    cellCodigo.innerHTML = qtdLinhas
    cellNome.innerHTML = nome
    cellCategoria.innerHTML = categoria
    cellPreco.innerHTML = preco
}