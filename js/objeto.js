// Funcion Constructora

function Bmw (colour, width, height, founded) {

    this.colour = colour;
    this.width = width;
    this.height = height;
    this.founded = founded;

    this.foundAge = () => {

        if(this.founded > 1960){

            console.log("well, at least it's a real car considering the fact that the company was created in 1961")
        }

        else{
            console.log("Check the timeline, company didn't even exist back then")
        }
    }

    this.sizeBig = () => {

        if (this.width > 500 && this.height > 500){

            console.log("that's a big car mate, rather choose something smaller")

        }
        else if(this.width < 100 && this.height < 100){

            console.log("how's that even a car brother, too small")
        }
        else{
            console.log("good choice right there")
        }


    }

    this.colourBlue = () => {

        if(this.colour === "blue"){

            console.log(this.colour ,"is a terrible colour, please input something else")
        }

        else{
            console.log("beautiful car mate")
        }

    }



}

const cars = {

     car1: new Bmw("blue", 300, 400, 1990),
     car2: new Bmw("black", 555, 600, 1976),
     car3: new Bmw("black", 5, 55, 1955)

}



