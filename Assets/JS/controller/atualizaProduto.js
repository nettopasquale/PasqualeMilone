import { admnService } from "../service/novo-service.js"

const pegaURL = new URL(window.location)

const id = pegaURL.searchParams.get('id')

const imagemUpada = document
const inputNome = document
const inputPreco = document
const inputDescricao = document

admnService.detalhaProduto(id)
.then( dados => {
    imagemUpada.value = dados.imagem
    inputNome.value = dados.nome
    inputPreco.value = dados.preco
    inputDescricao.value = dados.descricao
})