let nombreInicio = prompt("¿Cómo te llamas?")

function saludar(nombreInicio){

    alert("Hola Bienvenid@ " + nombreInicio + " a Play Zone, ¿en qué podemos ayudarte?")
    
}

saludar(nombreInicio)

//Servicio

/* Tipo de entrega */
var pedido;
pedido = prompt("Elija la opcion: 1- En tienda, 2-Domicilio")

if (pedido == 1){
    pedido = "Acércate a la tienda y Recógelo"
}else{
    domicilio = prompt("Ingrese su domicilio")
    pedido = "El delivery va hacia su domicilio: " + domicilio
}

class Producto {
    constructor(nombre, precio, stock, genero) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.stock = stock;
        this.genero = genero;
        this.vendido = true;
    }
    sumaIva() {
        this.precio = this.precio * 0.19 + this.precio;
    }
}
//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("Fifa 23", "300000", 50, "fútbol"));
productos.push(new Producto("Halo Infinite", "155000", 20, "aventura"));
productos.push(new Producto("Fornite", "130000", 30, "versus"));
productos.push(new Producto("Assasins Creed", "250000", 15, "aventura"));
productos.push(new Producto("Pes 2023", "270000", 50, "fútbol"));
productos.push(new Producto("God of war", "310000", 25, "aventura"));
productos.push(new Producto("Street Fighter 6", "200000", 20, "versus"));
productos.push(new Producto("Call of Duty", "120000", 15, "aventura"));

for (const producto of productos){
    producto.sumaIva();
}

console.log(productos)


const resultado4 = productos.find((el) => el.nombre === "FIFA 23")


const resultado = productos.filter((el) => el.genero.includes("fútbol"))
const resultado2= productos.filter((el) => el.nombre.includes("FIFA"))
const resultado3 = productos.filter((el) => el.precio < 200000)


console.log(resultado)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)

const totalStock = resultado2.reduce((acumulado,el)=> acumulado + el.stock,0)
console.log(totalStock)
alert("El total de unidades en Stock es: " + totalStock)

const totalCompra = resultado2.reduce((acumulado,el)=> acumulado + el.precio,0)
console.log(totalCompra)
alert("El total de su compra es: " + totalCompra)

alert("Gracias por su compra")


