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

