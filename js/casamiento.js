function numberParse(mensaje) {
    const number = prompt(mensaje);
    const numberConvert = parseInt(number);
    return numberConvert;
}

function ageAverage(a1, a2, a3, a4){
    
    const result = parseInt((a1 + a2 - a4) / a3);

    if((a1 && a4) < 18){
        console.log("tiene que tener si o si 18 o mas para esto!")
        return;
    } 
        else if(a2 < 1 || a2 > 31){
            console.log("tiene que ser un dia del mes!")
            return;

        }

            else if(a3 < 1 || a3 > 5){
                console.log("tu numero de la suerte importa, coloca uno adecuado")
                return;

            }
                else{
                    const showResult = console.log("El/la persona se va a casar en :", result ,"año/s");
                    return showResult;
                }
    

    

}

const parse = {

     age1: numberParse("Ingresa la edad de el/la que se va a casar"),
     age2: numberParse("Ingresa su dia del cumpleaños(1-31)"),
     age3: numberParse("Ingresa un numero del 1 al 5 para la buena suerte"),
     age4: numberParse("Ingresa ingresa la edad de su novio/a"),


}


ageAverage(parse.age1, parse.age2, parse.age3, parse.age4);