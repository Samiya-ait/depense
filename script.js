let depenses = [
    { id: 1, nom: "Café", montant: 12, cat: "food" }, 
    { id: 2, nom: "Tram", montant: 8, cat: "transport" }
];

// etape1
const form=document.querySelector("#form")
const nom=document.querySelector("#nom")
const montant=document.querySelector("#montant")
const liste=document.querySelector("#liste")
const erreur=document.querySelector("#erreur")
const total=document.querySelector("#total")


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
function afficher(tableau){
   
    liste.innerHTML=""    //dans ce cas c quoi la diff entre innerHtml et textContent.
    tableau.forEach((elt)=>{
        const li=document.createElement("li")
        li.innerHTML=`${elt.nom} . ${elt.montant}DH `
        li.dataset.id=elt.id
        li.innerHTML+='<button class="suppr"><span>🗑</span></button>'
        liste.append(li)
        
    })
    let sum=tableau.reduce((somme,d)=> somme+d.montant,0)
    total.textContent=sum;
    
}
afficher(depenses)


// etape 4
form.addEventListener("submit",(event)=>{
    event.preventDefault()

    inputNom=nom.value.trim()
    inputMontant=Number(montant.value.trim())

    if(inputNom.length<2){
        erreur.textContent="faut saisir au moins 2 letteres"
        erreur.classList.add("text-red")
        return;
    }else if( inputMontant <= 0){
        erreur.textContent="le montant doit etre superieur a 0"
        return;
    }else{
        const depenseObj={
            id:Date.now(),
            nom:inputNom,
            montant:inputMontant,
            cat:cat.value.trim()
        }
        depenses.push(depenseObj)  
    }
    form.reset()  
    afficher(depenses)
})




