class Balle{
    constructor($element){
        this.$element = $element;

        this.hauteur = $element.height();
        this.largeur = $element.width();
        
        this.positionX = parseInt($element.css("left"));
        this.positionY = parseInt($element.css("top"));
        
        this.vitesseX = 2;
        this.vitesseY = 2;
        this.angle = Math.random()*2*Math.PI;
    }

    bouger(){
        this.positionX += Math.cos(this.angle) * this.vitesseX;
        this.positionY += Math.sin(this.angle) * this.vitesseY;

        this.limite();
        this.majHTML();
    }

    limite(){
        //haut
        if(this.positionY < 0){
            this.positionY = 0;
            this.vitesseY *= -1;
        }

        //bas
        if( (this.positionY + this.hauteur) > terrain.hauteur){
            this.positionY = terrain.hauteur - this.hauteur;
            this.vitesseY *= -1;
        }
    
        //droite
        if( (this.positionX + this.largeur) > terrain.largeur){
            this.positionX = terrain.largeur - this.largeur;
            this.vitesseX *= -1;
        }

        //gauche
        if(this.positionX < 0){
            this.positionX = 0;
            this.vitesseX *= -1;
        }

    }

    majHTML(){
        this.$element.css("left",balle.positionX);
        this.$element.css("top",balle.positionY);
    }
}