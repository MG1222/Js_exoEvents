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
let btnView = document.querySelectorAll(".btn.btn-sm.btn-success");
for (let i = 0; i < btnView.length; i++) {
	console.log(btnView);
	let cardImgs = document.querySelectorAll(".card-img-top")[i];
	console.log(cardImgs);
	let cardTexts = document.querySelectorAll("p.card-text")[i];
	console.log(cardTexts);
	t = true;

btnView[i].addEventListener("mouseover", function () {
	if (t === true) {
		cardTexts.style.display = "none";
		cardImgs.style.width = "20%";
		t = false;
	}
	else if (t === false) {
		cardTexts.style.display = "block";
		cardImgs.style.width = "100%";
		t = true;
	}
});

}
/* Allez on va rajouter un peu de WTF dans la page : si un utilisateur clique sur le bouton gris ==>,
 la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !

Indice : Cette fonctionnalité n'est pas ultra complexe en fait : 
il faut pointer sur le noeud-parent des 6 cards puis déplacer la card n°6 en premier avec un insertBefore.*/
// f.7
let btnR = document.getElementsByClassName('btn btn-secondary my-2')[0];
console.log(btnR);

btnR.addEventListener("click", function () {
	let card = document.getElementsByClassName("card");
	lastCard = card[5].parentNode;
	firstCard = card[0].parentNode;

	parent = lastCard.parentNode;

	parent.insertBefore(lastCard,firstCard);
});
// f.8 
let btnL = document.getElementsByClassName('btn btn-primary my-2')[0];

btnL.addEventListener("click", function (event) {
	event.preventDefault(); // desactiver le link 
	let card = document.getElementsByClassName("card");
	firstCard = card[0].parentNode;
	lastCard = card[5].parentNode;

	parent = lastCard.parentNode;

	parent.insertBefore(firstCard, lastCard);

	 
});

/* La fonctionnalité se déclenchera si le logo de la page (JS & Events) est sélectionné et
 qu'on appuie sur une touche spécifique du clavier.
Si l'utilisateur presse la touche "a", 
l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
Si l'utilisateur presse la touche "y", 
l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
Si l'utilisateur presse la touche "p", 
l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
Si l'utilisateur presse la touche "b", 
tout redevient normal.
Indice 1 : L'event à utiliser est "keypress", appliqué au texte "JS & Events" (ou, mieux, à une div le contenant).

Indice 2 : Pour modifier le rendu visuel de toute la page, il faut que tu joues avec les classes de <body>.

Indice 3 : Pour mettre tout sur 4 colonnes, rajoute la classe col-4. Pour les placer au milieu ou à droite,
 rajoute la classe offset-md-4 ou offset-md-8.

Indice 4 : Pour éviter que les classes s'accumulent, et pour que chaque touche ait un comportement propre, 
retire toutes les classes du <body> à chaque fois qu'un "keypress" est détecté. Ensuite seulement tu rajoutes les classes nécessaires.*/
// f.9
// https://developer.mozilla.org/fr/docs/Web/API/Element/keypress_event
let emlLogo = document.getElementsByTagName("strong")[0];
console.log(emlLogo);
let body = document.querySelector("body");
console.log(body);
emlLogo.addEventListener("keypress", function (){
	
});


















