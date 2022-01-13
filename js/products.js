class Items {

    constructor(nombre, precio, aumento){

        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.aumento = aumento;
    }

    sumaPorcentaje(){

        this.precio = this.precio * this.aumento;

    }


}

// Array

const products = [];
products.push(new Items("jugo", "100", 2));
products.push(new Items("agua", "50", 5));
products.push(new Items("cerveza", "150", 1.3));
products.push(new Items("monster", "80", 10));


// Aplicamos el aumento

for (const Items of products) {
    Items.sumaPorcentaje();
}