class SulfuricAcid {

    constructor(hydrogen, oxygen, sulfur, density) {

        this.hydrogen = hydrogen,
        this.oxygen = oxygen,
        this.sulfur = sulfur,
        this.density = density
        this.finalValue = this.hydrogen + this.oxygen + this.sulfur + this.density
    }

    // Realmente no queria que tuviera un valor numerico el acido sulfurico pero no se me ocurrio nada mejor
    
    SulfuricAcidConverted () {

        if(this.finalValue === 8.83){

            console.log("that's what we need for sulfuric acid")

        }
        else{
            console.log("we are lacking ingredients")
        }

    }

    

    

}


const acids = {

     acid: new SulfuricAcid(2, 4, 1, 1.83),
     acid2: new SulfuricAcid(7, 5, 4, 2),
     acid3: new SulfuricAcid(8, 8, 7, 4),
     acid4: new SulfuricAcid(3, 1, 3, 0),

}


// const acid = new SulfuricAcid(2, 4, 1, 1.83);
// const acid2 = new SulfuricAcid(2, 4, 1, 1.83);
// const acid3 = new SulfuricAcid(2, 4, 1, 1.83);
// const acid4 = new SulfuricAcid(2, 4, 1, 1.83);