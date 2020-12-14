class Terrain{
    constructor($element){
        this.$element = $element;
        this.hauteur = $element.height();
        this.largeur = $element.width();
    }

    dab()
    {
        this.$element.addClass("dab");
        let ici = this;

        setTimeout(
            function()
            {
                ici.$element.removeClass("dab");
            },200
        );
    }
}
