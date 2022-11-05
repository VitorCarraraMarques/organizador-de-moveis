class Movel{
    constructor(comprimento, largura){
        //this.comprimento = document.querySelector("#movelComprimento").value; 
        //this.largura = document.querySelector("#movelLargura").value; 
        this.x = 300; 
        this.y = 200; 
        this.comprimento = comprimento; 
        this.largura = largura; 
    }

    show(){
        strokeWeight(8);
        fill(120, 60, 30); 
        rectMode(CENTER); 
        rect(this.x, this.y, this.comprimento, this.largura); 
    }

    update(){
        var mx = mouseX;  
        var my = mouseY;  
        if (mouseIsPressed === true && this.x - this.comprimento/2 <= mx && mx <= (this.x + this.comprimento/2) && this.y - this.largura/2 <= my && my <= (this.y + this.largura/2)){
            this.x = mx;
            this.y = my;  
        } 
    }
}