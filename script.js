for(var i = 0; i < document.body.childNodes.length; i++) {
	console.log(document.body.childNodes[i]); 
}
// f.1
/*
var footer = document.querySelector('footer');
console.log(footer);
addEventListener("click", function () {
	console.log("clique");	
});
*/

// f.1-bis
var footer = document.querySelector('footer');
var count = 0;
footer.addEventListener("click", function () {
	count++;
	console.log(`click numero: ${count}`)	
});

//f.2
var elmtNavH = document.getElementById("navbarHeader");
var elmtNav = document.getElementsByClassName("navbar-toggler")[0];
// var navStatus = false;

elmtNav.addEventListener("click", function () {
	/* if (navStatus == false) {
		elmtNavH.classList.remove("collapse");
		navStatus = true
	}
	 else if ( navStatus == true) {
		elmtNavH.classList.add("collapse");
		navStatus = false
	}
	*/
		elmtNavH.classList.toggle('collapse');
	
});
/*À présent, on va faire cela : si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). À toi de jouer !

Indice : Commence par bien pointer sur la première card en entier (stocke-la dans une variable puis affiche-la en console pour confirmer que tu l'as bien pointé).
Puis pointe vers le bouton Edit de cette card (idem : stocke-le dans une variable et affiche-le en console).
Une fois que ça c'est bien fait, tu peux facilement rajoute un style ="color: red" au texte de la card !
 */
// f.3
let btnEdit = document.querySelector(".btn.btn-sm.btn-outline-secondary");
let cardText = document.querySelector("p.card-text");
console.log(btnEdit);
console.log(cardText);

btnEdit.addEventListener("click", function () {
	cardText.style.color = "red";
});

/* On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe : si on clique sur le bouton "Edit" de la deuxième card, 
le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant ! 
Tu l'as compris, il va falloir que tu cherches comment faire un "toggle" sur le style du texte. C'est plus compliqué que sur une classe.

Indice : Reprend le code de la fonctionnalité 3 et adapte-le pour qu'il marche sur la 2ème card (et en remplaçant le rouge par du vert).
Maintenant, pour le toggle, il va falloir te faire un petit if / else dans ton AddEventListener. On te donne le début :
if (secondCard.style.color === 'green'){
secondCard.style.color = '' ;
}else …*/

// f.4
let bntEdit_2 = document.querySelectorAll(".btn.btn-sm.btn-outline-secondary")[1];
console.log(bntEdit_2);
let cardText_2 = document.querySelectorAll("p.card-text")[1];
console.log(cardText_2);
bntEdit_2.addEventListener("click", function () {
	//cardText_2.style.color = "green";
	if (cardText_2.style.color === "green") {
		cardText_2.style.color = "black";
	}
	else {
		cardText_2.style.color = "green";
		
	}
});

/* Pour le fun, on va implémenter une fonctionnalité à la sauce ☢"nucléaire"🤯.
 Et comme elle est un peu dangereuse, on va la cacher… 
 Voici comment elle doit marcher : si un utilisateur double clique sur la navbar en haut, 
 tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui 
 la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).

Indice : Cherche sur Google comment désactiver le tag <link> avec JavaScript.*/
// f.5
let navBar = document.querySelector('.navbar');
let linkTag = document.getElementsByTagName('link')[0];
let linkDis = false;
navBar.addEventListener("dblclick", function () {
	if (linkDis == false) {
		linkTag.disabled = true;
		linkDis = true;
	}
	else if(linkDis == true){
		linkTag.disabled = false;
		linkDis = false;
	}
});
/*
T'as déjà implémenté 5 fonctionnalités d'interaction ! C'est top ! On va commencer à corser les choses.

La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton
 "View" d'une card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît,
  l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. 
  Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !

Indice 1 : Commence par implémenter cette fonctionnalité sur une card avant d'essayer de les faire toutes.

Indice 2 : Tu vas devoir appliquer les leçons apprises sur 
la fonctionnalité 2 (toggle de la classe "collapse") et sur la fonctionnalité 3 (toggle sur le style appliqué à l'image : 
tantôt on lui rajoute "width: 20 %;", tantôt on lui enlève).

Indice 3 : Une fois que ça marche sur une card, 
fait une boucle for sur la liste des 6 cards (a priori tu as extrait 
la card d'une liste d'éléments HTML non?) pour appliquer un addEventListener à chacune. /!\ 
mets bien le compteur de ta boucle en "let", sinon tu vas avoir des surprises… => clique ici pour accéder à une ressource qui parle de ça
*/
// f.6
























