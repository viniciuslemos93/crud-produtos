addEventListener

function cadastrar () {
    const nome = document.getElementById('nome')
    const categoria = document.getElementById('categoria')
    const preco = document.getElementById('preco')

    const addProduto = nome.value
    const addCategoria = categoria.value
    const addPreco = preco.value

    const produtos = document.getElementById('tbProdutos')

    const cadaProduto = `
    
    <td>${addProduto}</td>
    <td>${addCategoria}</td>
    <td>${addPreco}</td>   
    
    `
    produtos.insertAdjacentHTML('beforeend', cadaProduto);
    
}