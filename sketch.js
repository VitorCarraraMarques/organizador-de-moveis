var moveis = []; 

function setup(){
    var canvas = createCanvas(windowWidth*0.5, windowHeight*0.6);
    canvas.parent('canvasHTML');     
    strokeWeight(8);      
}


function draw(){  
    background(120);
    if (moveis.length > 0) {
        for (let movel of moveis) {
            movel.show(); 
            movel.update(); 
        } 
    }   
}

function createMovel(){
        var comprimento = document.querySelector("#movelComprimento").value;
        var largura = document.querySelector("#movelLargura").value;
        var movel = new Movel(comprimento, largura);
        moveis.push(movel);          
} 


