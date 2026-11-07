// etape1
const form=document.querySelector("#form")
const nom=document.querySelector("#nom")
const montant=document.querySelector("#montant")
const liste=document.querySelector("#liste")
const erreur=document.querySelector("#erreur")
const total=document.querySelector("#total")


const a=document.querySelectorAll(".filtre")
const b=document.getElementsByClassName("filtre")

console.log(`a.length ... ${a.length}`)
console.log(`b.length ... ${b.length}`)

const n=document.createElement("button")
n.className="filtre"
const btn_container=document.querySelector("#filtres")
btn_container.append(n)

console.log(`a.length ... ${a.length}`)
console.log(`b.length ... ${b.length}`)

a.forEach((btn)=>{
    console.log(btn.textContent)
})

// b.forEach((btn)=>{
//     console.log(btn.textContent)
// })
Array.from(b).forEach((btn)=>{
    console.log(btn.textContent)
})

//etape2
console.log(`children--${liste.children.length}`)
console.log(`childNodes--${liste.childNodes.length}`)
console.log(`firstChild--${liste.firstChild}`)



