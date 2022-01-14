class Items {

    constructor(nombre, edad, nacimiento){

        this.nombre = nombre.toUpperCase();
        this.edad = parseInt(edad);
        this.nacimiento = parseInt(nacimiento);



    }

    
    
}



const users = [];

users.push(new Items("Alberto", 50, 1972));
users.push(new Items("Luciano", 25, 1996));
users.push(new Items("Sabrina", 20, 2001));
users.push(new Items("Juan", 24, 1997));


let holder = [];
let holderTwo = [];
let holderThree = [];

function ages(){
    for (const Items of users) {
        
        holder.push(Items.edad)
        holder.sort(function(a, b){
            return a - b;
            });
        
    }
}

function birth(){
    for (const Items of users) {
        
        holderTwo.push(Items.nacimiento)
        holderTwo.sort(function(a, b){
            return a - b;
            });
        
    }
}

function names(){
    for (const Items of users) {
        
        holderThree.push(Items.nombre)
        holderThree.sort();
        
    }
}

ages();
birth();
names();


    
console.log(holder);    
console.log(holderTwo);    
console.log(holderThree);    


    





