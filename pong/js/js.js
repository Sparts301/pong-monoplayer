let largeur =$("#balle").width();
let gauche = parseInt(($("#balle").css("left")));
let hauteur= parseInt(($("#balle").css("top")));
alert(gauche);

let i=0;
setInterval(function(){
    gauche = gauche + 1;
    hauteur = hauteur + 1;
    $("#balle").css("left",gauche);
    $("#balle").css("top",hauteur)
    if(gauche >= 800){
        alert("ball dehors")
    }
    if (hauteur >= 400){
        alert("ball dehors")
    }
}, 10);

class Raquette{
    constructor($element){
        this.$element = $element;

        this.largeur = $element.width();
        this.hauteur = $element.height();

        this.positionX = parseInt($element.css("left"));
        this.positionY = parseInt($element.css("top"));

        this.direction = 1;
        this.vitesse = 3;
    }

    bouger(){
        this.positionY += this.vitesse*this.direction;
        this.limite();
        this.majHTML();
    }

    changeDirection(){
        this.direction *= -1;
    }

    majHTML(){
        this.$element.css("top",this.positionY);
    }

    limite(){
        if(this.positionY + this.hauteur > terrain.hauteur){
            this.positionY = terrain.hauteur - this.hauteur;
            this.changeDirection();
        }
        if(this.positionY < 0){
            this.positionY = 0;
            this.changeDirection();
        }
    }
}
