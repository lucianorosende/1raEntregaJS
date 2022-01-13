function numberParse(mensaje) {
    const number = prompt(mensaje);
    const numberConvert = parseInt(number);
    return numberConvert;
}

function ageAverage(a1, a2, a3, a4){

    const result = parseInt((a1 + a2 + a3 + a4) / 4);
    const showResult = console.log("El resultado del promedio es el siguiente:", result);
    return showResult;
}


const parse = {

    age1: numberParse("Ingresa la primera edad"),
    age2: numberParse("Ingresa la segunda edad"),
    age3: numberParse("Ingresa la tercera edad"),
    age4: numberParse("Ingresa la cuarta edad"),

}




ageAverage(parse.age1, parse.age2, parse.age3, parse.age4);



