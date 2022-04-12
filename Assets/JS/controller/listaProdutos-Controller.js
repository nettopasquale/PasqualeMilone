import { admnService} from "../service/novo-service.js"

const criaCard = (imagem, titulo, preco, id) => {
    const novoCard = document.createElement('div')
    const card = `
        <figure id="galeria-figure" data-id>
            <a href="./Assets/IMGs/produtos/starwars/caneca_storm_3x.png?id=${id}"><img src="${imagem}"
            alt="caneca storm trooper" class="galeria--Produtos--Imgs"></a>
                <div class="galeria--Texto">
                    <figcaption class="galeria--Texto--Titulo">${titulo}</figcaption>
                    <figcaption class="galeria--Texto--Preco">R$${preco}</figcaption>
                </div>
                <div class="galeria--Edicao">
                <button class="galeria--Editar">Editar</button>
                <button class="galeria--Excluir">Excluir</button>
            </div>
        </figure>
    `
    novoCard.innerHTML = card
    novoCard.dataset.id = id
    return novoCard
}

const galeriaProdutos = document.querySelector('[data-galeria]')


galeriaProdutos.addEventListener('click', (evento) =>{
    let ehBotaoDeletar = evento.target.className === 'galeria--Excluir'
     if(ehBotaoDeletar){
         const cardProduto = evento.target.closest('[data-id]')
         let id = cardProduto.dataset.id
         admnService.removeProduto(id)
         .then(()=>{
             cardProduto.remove()
         })
     }
})


admnService.listaProdutos()
.then(data => {
        data.forEach(elemento=> {
        galeriaProdutos.appendChild(criaCard(elemento.url_Imagem, elemento.titulo, elemento.preco,
            elemento.id))
})})