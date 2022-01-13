const users = [


    {

        nombre: "Alberto",
        segundoNombre: "Martin",
        edad: 50,
        nacimiento: 1972
    },
    
    {

        nombre: "Luciano",
        segundoNombre: "Sebastian",
        edad: 25,
        nacimiento: 1996
    },

    {

        nombre: "Sabrina",
        segundoNombre: "Josefa",
        edad: 20,
        nacimiento: 2001
    }
];


users.push({

    nombre: "Juan",
    segundoNombre: "Lautaro",
    edad: 24,
    nacimiento: 1997


})



// Este sort es para ordenar la edad de menor a mayor

users.sort((a, b) => {

    return a.edad - b.edad;
});

// Este sort es para ordenar la fecha de nacimiento de mayor a menor

users.sort((a, b) => {

    return b.nacimiento - a.nacimiento;
});

// // Este sort es para que este ordenado de la Z a la A

users.reverse();

// // // Este sort es para que este ordenado de la A a la Z

users.sort();

