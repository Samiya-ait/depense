// let depenses = [
//     { id: 1, nom: "Café", montant: 12, cat: "food" },
//     { id: 2, nom: "Tram", montant: 8, cat: "transport" }
// ];

let depenses = JSON.parse(localStorage.getItem("depenses")) || [];


let filter = "tous"
let search = ""

let copy = [...depenses]

// etape1
const form = document.querySelector("#form")
const nom = document.querySelector("#nom")
const montant = document.querySelector("#montant")
const liste = document.querySelector("#liste")
const erreur = document.querySelector("#erreur")
const total = document.querySelector("#total")
const buttons = document.querySelectorAll(".filtre")
const searchInput = document.querySelector("#recherche")
const statistics = document.querySelector("#stats")

// const a=document.querySelectorAll(".filtre")
// const b=document.getElementsByClassName("filtre")

// console.log(`a.length ... ${a.length}`)
// console.log(`b.length ... ${b.length}`)

// const n=document.createElement("button")
// n.className="filtre"
// const btn_container=document.querySelector("#filtres")
// btn_container.append(n)

// console.log(`a.length ... ${a.length}`)
// console.log(`b.length ... ${b.length}`)

// a.forEach((btn)=>{
//     console.log(btn.textContent)
// })

// b.forEach((btn)=>{
//     console.log(btn.textContent)
// })
// Array.from(b).forEach((btn)=>{
//     console.log(btn.textContent)
// })

//etape2
// console.log(`children--${liste.children.length}`)
// console.log(`childNodes--${liste.childNodes.length}`)
// console.log(`firstChild--${liste.firstChild}`)

// etape3
function afficher(tableau) {

    liste.innerHTML = ""    //dans ce cas c quoi la diff entre innerHtml et textContent.
    tableau.forEach((elt) => {
        liste.innerHTML += `<li data-id=${elt.id} data-cat=${elt.cat}>${elt.nom} . ${elt.montant}DH <button class="suppr"><span>🗑</span></button></li> `

    })
    let sum = tableau.reduce((somme, d) => somme + d.montant, 0)
    total.textContent = `TOTAL : ${sum}`;
}
afficher(depenses)


// etape 4
form.addEventListener("submit", (event) => {
    event.preventDefault()

    inputNom = nom.value.trim()
    inputMontant = Number(montant.value.trim())

    if (inputNom.length < 2) {
        erreur.textContent = "faut saisir au moins 2 letteres"
        erreur.classList.add("text-red")
        return;
        // etape8
    } else if (depenses.map((d) => d.nom.toLowerCase()).includes(inputNom.toLowerCase())) {
        erreur.textContent = "Cette dépense existe déjà"
        return;
        //fin de partie1 du etape 8
    } else if (inputMontant <= 0) {
        erreur.textContent = "le montant doit etre superieur a 0"
        return;
    } else {
        erreur.textContent = ""

        const depenseObj = {
            id: Date.now(),
            nom: inputNom,
            montant: inputMontant,
            cat: cat.value.trim()
        }
        depenses.push(depenseObj)
    }
    form.reset()
    appliquer()
    sauvgarder()
})

// etape 5

liste.addEventListener("click", (event) => {
    console.log(event.target, event.currentTarget);

    const click = event.target.closest(".suppr")
    if (event.target.closest(".suppr")) {
        copy = copy.filter(d => d.id != click.parentElement.dataset.id)
        afficher(copy)
    }
    sauvgarder()
})

//etape 6
buttons.forEach(btn => {
    btn.addEventListener("click", (event) => {
        filter = event.target.dataset.cat
        appliquer()
    })
})


//etape 7
searchInput.addEventListener("input", () => {

    search = searchInput.value.trim().toLowerCase()
    appliquer()

})


function appliquer() {

    let newSearchArr = depenses.filter((d) => d.nom.toLowerCase().includes(search))
    if (filter === "tous") {
        afficher(newSearchArr)
    } else {
        newFilterArr = newSearchArr.filter((nr => nr.cat === filter))
        afficher(newFilterArr)
    }
    statistics.textContent=stats(depenses)
}


// etape8 partie2
function stats(tableau) {
    let max;
    if (tableau.length !== 0) {
        max = Math.max(...tableau.map((d) => d.montant))
    } else {
        max = "___"
    }

    let cats = tableau.map(elt => elt.cat)
    let OneCat = cats.filter((c, i) => cats.indexOf(c) === i)

    let fifty = tableau.filter((f) => f.montant >= 50).length


    console.log(`max : ${max}`)
    console.log(`categories : ${OneCat}`)
    console.log(`montant 50 : ${fifty}`)

}



// etape 9

function sauvgarder() {
    localStorage.setItem("depenses", JSON.stringify(depenses));
}







