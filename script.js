const tituloJavaScript = document.createElement("h2")
tituloJavaScript.innerText = "Valorant Points"
tituloJavaScript.id = "vp-venda"

const produtoJavaScript = document.createElement("div")
produtoJavaScript.innerHTML = ` <ul> Preços:
<li>200 VP - R$ 30,00</li>
<li>500 VP - R$ 50,00</li>
</ul>
<p>Valorant Points são moedas usadas para comprar itens dentro do Valorant.
</p>
`

const imagemJavaScript = document.createElement("span")
imagemJavaScript.innerHTML = `
<img src="https://cdn1.codashop.com/S/content/common/images/denom-image/VALORANT/VALORANT_Points.png" alt="VP">
`


const produto = document.querySelector("body")
produto.appendChild(tituloJavaScript)
produto.appendChild(imagemJavaScript)
produto.appendChild(produtoJavaScript)




