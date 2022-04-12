const listaProdutos = async () =>{
    const url_Produtos = 'http://localhost:3000/ProdutosCadastrados'
    const resposta = await fetch(url_Produtos)
    return await resposta.json()
}

const criaProduto = async (imagem, titulo, preco, descricao, id) =>{
    const url_Produtos = 'http://localhost:3000/ProdutosCadastrados'
    const resposta = await fetch(url_Produtos, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            imagem,
            titulo,
            preco,
            descricao,
            id
        })
    })
    return resposta.body
}

const removeProduto = async (id) =>{
    const url_ID= `http://localhost:3000/ProdutosCadastrados/${id}`
    console.log(url_ID)
    return await fetch(url_ID, {
        method: 'DELETE'
    })
}

const detalhaProduto = async (id) =>{
    const url_ID= `http://localhost:3000/ProdutosCadastrados/${id}`
    const resposta = await fetch(url_ID)
    return await resposta.json()
}

// const login ?

// const formulario ?

export const admnService ={
    listaProdutos,
    criaProduto,
    removeProduto,
    detalhaProduto
}
