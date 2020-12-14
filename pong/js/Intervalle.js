let largeur=$("#balle").width();
let gauche=parseInt($("#balle").css("left"));
let hauteur=parseInt($("#balle").css("top"));

// On créé une nouvelle fonction pour definir les mouvents de la balle et des raquettes
let terrain = new Terrain($("#terrain"));
let balle = new Balle($("#balle"));
let raquetteGauche = new Raquette($("#gauche"));
let raquetteDroite = new Raquette($("#droite"));
raquetteDroite.changeDirection();

setInterval(function(){

//On créé une boucle pour utiliser les fonction précédentes
    balle.majHTML();

    balle.bouger();
    
    raquetteGauche.bouger();
        
    raquetteDroite.bouger();

}, 10);

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) { return}
    console.log("La touche '"+event.key+ "' a été enfoncée")
    event.preventDefault();
}, true);

window.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) { return}
    console.log("La touche '"+event.key+ "' a été relachée")
    event.preventDefault();
}, true);
