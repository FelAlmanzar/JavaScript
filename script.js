// let nombreInicio = prompt("¿Cómo te llamas?")

// function saludar(nombreInicio){

//     alert("Hola Bienvenid@ " + nombreInicio + " a Play Zone, ¿en qué podemos ayudarte?")
    
// }

// saludar(nombreInicio)

// //Servicio

// /* Tipo de entrega */
// var pedido;
// pedido = prompt("Elija la opcion: 1- En tienda, 2-Domicilio")

// if (pedido == 1){
//     pedido = "Acércate a la tienda y Recógelo"
// }else{
//     domicilio = prompt("Ingrese su domicilio")
//     pedido = "El delivery va hacia su domicilio: " + domicilio
// }

// class Producto {
//     constructor(nombre, precio, stock, genero) {
//         this.nombre  = nombre.toUpperCase();
//         this.precio  = parseFloat(precio);
//         this.stock = stock;
//         this.genero = genero;
//         this.vendido = true;
//     }
//     sumaIva() {
//         this.precio = this.precio * 0.19 + this.precio;
//     }
// }
// //Declaramos un array de productos para almacenar objetos
// const productos = [];
// productos.push(new Producto("Fifa 23", "300000", 50, "fútbol"));
// productos.push(new Producto("Halo Infinite", "155000", 20, "aventura"));
// productos.push(new Producto("Fornite", "130000", 30, "versus"));
// productos.push(new Producto("Assasins Creed", "250000", 15, "aventura"));
// productos.push(new Producto("Pes 2023", "270000", 50, "fútbol"));
// productos.push(new Producto("God of war", "310000", 25, "aventura"));
// productos.push(new Producto("Street Fighter 6", "200000", 20, "versus"));
// productos.push(new Producto("Call of Duty", "120000", 15, "aventura"));

// for (const producto of productos){
//     producto.sumaIva();
// }

// console.log(productos)


// const resultado4 = productos.find((el) => el.nombre === "FIFA 23")


// const resultado = productos.filter((el) => el.genero.includes("fútbol"))
// const resultado2= productos.filter((el) => el.nombre.includes("FIFA"))
// const resultado3 = productos.filter((el) => el.precio < 200000)


// console.log(resultado)
// console.log(resultado2)
// console.log(resultado3)
// console.log(resultado4)

// const totalStock = resultado2.reduce((acumulado,el)=> acumulado + el.stock,0)
// console.log(totalStock)
// alert("El total de unidades en Stock es: " + totalStock)

// const totalCompra = resultado2.reduce((acumulado,el)=> acumulado + el.precio,0)
// console.log(totalCompra)
// alert("El total de su compra es: " + totalCompra)

// alert("Gracias por su compra")


const productosJuegos = [
    {
        id: 1,
        nombre: "Fifa 23",
        precio: 300000,
        genero: "Deportes",
        stock: "50",
        imagen: "images/Fifa-23.webp",
    },

    {
        id: 2,
        nombre: "Fifa 22",
        precio: 90000,
        genero: "Deportes",
        stock: "50",
        imagen: "images/Fifa-22.webp",
    },

    {
        id: 3,
        nombre: "Halo Infinite",
        precio: 255000,
        genero: "Aventura",
        stock: "50",
        imagen: "images/halo_infinite.jpg",
    },

    {
        id: 4,
        nombre: "e-football 23",
        precio: 220000,
        genero: "Deportes",
        stock: "50",
        imagen: "images/efootball-2023.jpg",
    },

    {
        id: 5,
        nombre: "Fornite",
        precio: 130000,
        genero: "Versus",
        stock: "50",
        imagen: "images/Fortnite.jpg",
    },

    {
        id: 6,
        nombre: "Assassins Creed",
        precio: 180000,
        genero: "Aventura",
        stock: "50",
        imagen: "images/Assassins.jpg",
    },

    {
        id: 7,
        nombre: "God of War",
        precio: 280000,
        genero: "Aventura",
        stock: "50",
        imagen: "images/God of war.jpeg",
    },

    {
        id: 8,
        nombre: "Street Fighter 6",
        precio: 320000,
        genero: "Versus",
        stock: "50",
        imagen: "images/Street.jfif",
    },

    {
        id: 9,
        nombre: "Call of Duty - Warzone",
        precio: 200000,
        genero: "Versus",
        stock: "50",
        imagen: "images/COD-WARZONE.webp",
    },

    {
        id: 10,
        nombre: "Mario Kart 8 Deluxe",
        precio: 240000,
        genero: "Carreras",
        stock: "50",
        imagen: "images/mario-kart-deluxe-8.webp",
    },

    {
        id: 11,
        nombre: "NFS Unbound",
        precio: 160000,
        genero: "Carreras",
        stock: "50",
        imagen: "images/Need_for_Speed_Unbound.png",
    },

    {
        id: 12,
        nombre: "Dragon Ball FighterZ",
        precio: 95000,
        genero: "Aventura",
        stock: "50",
        imagen: "images/DBZ-Fighter.jpg",
    },
]

console.log(productosJuegos)

let contenedor = document.getElementById("contenedor")

console.log(contenedor)

productosJuegos.forEach((productoJuego)=>{
    console.log(productoJuego.nombre)

    let contenedorProd = document.createElement("div")

    contenedorProd.innerHTML = `
    <div>
            <img src="${productoJuego.imagen}" alt="producto 1">
            <div class="informacion">
                <p>${productoJuego.nombre}</p>
                <p class="Género">${productoJuego.genero}</p>
                <p class="precio">${productoJuego.precio}</p>
                <button id="btnComprar">Comprar</button>
            </div>
        </div>

        `

        contenedor.append(contenedorProd)
        
        
        contenedor.append(contenedorProd)

        let btnComprar = document.getElementById("btnComprar")

        btnComprar.addEventListener("click",agregarCarrito)

      

})

function agregarCarrito(){
    console.log("agregar carrito")
}
