const productos = [
    { nombre: "tinto", precio: 1050 },
    { nombre: "Blanco", precio: 750 },
    { nombre: "espumante", precio: 1350 },];
let carrito = [];
let precio = 0;

function comprar() {
    let seleccion = prompt(` Bienvenido, gracias por visitarnos ¿deseas realizar una compra 🍾? \n SI \n NO `).toLowerCase();

    while (seleccion != "si" && seleccion != "no") {
        alert(`Disculpe, es necesario ingresar SI o NO`)
        seleccion = prompt(`¿deseas realizar la compra?  \n SI \n NO`).toLowerCase()
    }

    if (seleccion == "si") {
        alert("Perfecto, te mostraremos la lista de los productos disponibles en Stock")

        let todoslosProductos = productos.map(
            (producto) => producto.nombre + " " + "$" + producto.precio);
        alert(todoslosProductos.join("\n"))

    } else if (seleccion == "no") {
        alert("Gracias Por visitarnos, te esperamos Pronto!!!")
    }

    while (seleccion != "no") {
        let producto = prompt("Por favor ingresa un producto al carrito de compras Online").toLowerCase()

        if (producto == "blanco" || producto == "tinto" || producto == "espumante") {
            switch (producto) {
                case "blanco":
                    precio = 750;
                    break;

                case "tinto":
                    precio = 1050;
                    break;

                case "espumante":
                    precio = 1350;
                    break;
                default:
                    break;
            }
            let unidades = parseInt(prompt("Cuantas Unidades desea comprar?"))
            carrito.push({ producto, unidades, precio })
        } else {
            alert("No tenemos Stock de ese producto")
        }
        seleccion = prompt("Seguimos comprando?").toLowerCase()

        while (seleccion == "no") {
            carrito.forEach((carritoFinal) => {
                alert(`Producto: ${carritoFinal.producto},\n Unidades: ${carritoFinal.unidades}, \n Monto del producto: ${carritoFinal.unidades * carritoFinal.precio}`)
            })
            break;
        }
        const total = carrito.reduce((ecc, el) => ecc + el.precio * el.unidades, 0)
        alert(`El total de tu compra es: $ ${total} 🥂`);
        alert(`Gracias por tu compra`);
    }
}
