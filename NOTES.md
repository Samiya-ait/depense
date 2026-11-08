## EXPLIQUE 1
* ###### querySelectorAll: apporte seulemnet ce qui est existe dans le moment d'execution , lorsqu'on ajoute un nouveau elt il ne se compte pas.


* ###### getElementsByClassName: appoorte les elemnts au temps d'execution et aussi les elements ajoutées apres 

a.length ... 4
b.length ... 4
ms lorsqu'on ajoute un autre element :
a.length ... 4
b.length ... 5

cocernant forEach:
on peut boucler sur les nodeList mais on peut pas sur htmlCollection(objet),il faut le convertit first then use forEach.

=>pour moi jai toujours travaillé avec querySelectorAll ou querySelector dans la sélectionne, mais je pense que htmlCollection est bonne tous il faut juste le transférer en tableau then everything is good.

## EXPLIQUE 2
* liste.children.length: affiche le nombres des enfants du parent(dans ce cas 2)
* liste.childNodes.length:affiche le nombre des balises,la sute du lignes et aussi les espaces(dans ce cas ils sont 5)
* liste.firstChild: dans le console, il s'affiche ca "[object Text]", jai cherche je trouve que souvent il retourne la saute du ligne.

## EXPLIQUE 3
* lorsqu'on  retire la ligne qui vide la liste , les elements s'affichent dupliqué

## EXPLIQUE 4
* when we remove event.prevenetDefault(), the page reload automatically,the things that we add have gone instantaly.

## EXPLIQUE 5
* console.log(Number(montant.value))   //  affiche: 0
* si la condition est >= 0 , lorsque l'utilisateur saisi rien, elle considere le champ vide comme 0, donc il va lajouter au tableau.

## EXPLIQUE 6
target vale toujours l'elemnet cliqué, et current target vale le parent ou le conteneur de l element cliqué.

## EXPLIQUE 7
jai pas compris.

## EXPLIQUE 8
le total affiché est celui du filtre,car il depend du tableau qu'on affiche

## EXPLIQUE 9
js est sensible a la casse, C != c, cest pourquoi il faut transformer les deux soit au lowerCase ou au upperCase.


