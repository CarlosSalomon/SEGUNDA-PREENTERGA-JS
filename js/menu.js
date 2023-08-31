const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const showAlert = document.getElementById("showAlert");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let content;
let comprar;
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

vinos.forEach((vino) => {
    content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
<img src="${vino.img}">
<h3>${vino.nombre}</h3>
<p class = "precio">$ ${vino.precio} </p> `;

    shopContent.append(content);

    comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "comprar";
    content.append(comprar);

    comprar.addEventListener("click", () => {
        const repeat = carrito.some((repeatVino) => repeatVino.id === vino.id);

        if (repeat) {
            carrito.map((producto) => {
                if (producto.id === vino.id) {
                    producto.cantidad++;
                }
            })
        }
        else {
            carrito.push
                ({
                    id: vino.id,
                    img: vino.img,
                    nombre: vino.nombre,
                    precio: vino.precio,
                    cantidad: vino.cantidad,
                });
        }
        contadorCarrito();
        saveLocal();
    });
});
