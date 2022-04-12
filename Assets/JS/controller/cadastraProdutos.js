import {admnService} from "../service/novo-service.js"



const novoProduto = document.querySelector('#cadastroProduto')
novoProduto.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const image_input = document.querySelector("#image-input");
    var image_uploaded =""

    image_input.addEventListener("change", function(){
        const reader = new FileReader();
        reader.addEventListener("load", ()=>{
            image_uploaded = reader.result
        })
        reader.readAsDataURL(this.files[0]);
        console.log(reader)
    })

    const titulo = document.getElementById('nome-do-produto').value
    const preco = document.getElementById('preco-do-produto').value
    const descricao = document.getElementById('descricao-do-produto').value

    admnService.criaProduto(image_input, titulo, preco, descricao)
    console.log(image_input)
   
})