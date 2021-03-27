//objeto servicios a vender
const logo = new Servicio("Creacion de Logo",1500, "Creamos tu logo, logotipo, slogan, teniendo en cuenta si tenes o no definida tu imágen de marca","img/brand.jpg")
const branding = new Servicio("Branding",2000,"Creamos tu estrategias, elección de redes e implementación","img/brand2.jpg")
const contenido = new Servicio("Creación de Contenido",3000,"Creamos tu contenido para redes sociales","img/brand3.jpg")
const producto = new Servicio("Creación de Producto",2000,"Vemos centimetro por centimetro de tu producto, su optimización, fotos, embalaje","img/brand4.jpg")
const landing = new Servicio("LandingPage",7000,"Nos encargamos de definir tu pagina de presentación y tu posicionamiento web","img/brand5.jpg")
const tienda = new Servicio("Tienda online",15000,"Tienda online personalizada","img/brand6.jpg")

//carrito
// const carrito = new Carrito(0)

//array de servicios//

let arServicios = [logo, branding, contenido, producto, landing, tienda]
localStorage.setItem("servicios", JSON.stringify(arServicios))

//ajax no funciona aun

$("#mensaje").click(function(){ // Asociamos la llamada AJAX al evento click
  $.ajax ({
    url: "./mensaje.json",  //URL del servidor, archivo JSON
    type: "GET",                  //tipo de solicitud
    dataType: "json"            //tipo de dato
  }).done(function (resultado) {    //callback con ejecución correcta
       console.log(resultado);
    })
    .fail(function (xhr, status, error) {   //callback con ejecución con error
       console.log(xhr);
       console.log(status);
       console.log(error);
    })
});


const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let carrito = {}

// cards.addEventListener('click', e => { addCarrito(e) });
$('.card').click(function (event) {
    addCarrito(event)
});

$('#items').click(function (event) {
    btnAumentarDisminuir(event)
});

// Agregar al carrito
const addCarrito = e => {
    if (e.target.classList.contains('btn-primary')) {
        // console.log(e.target.dataset.id)
        // console.log(e.target.parentElement)
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = item => {
    // console.log(item)
    const producto = {
        title: item.querySelector('h5').textContent,
        precio: item.querySelector('p').textContent * 1000,
        id: item.querySelector('button').dataset.id,
        cantidad: 1
    }
    // console.log(producto)
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = { ...producto }

    pintarCarrito()
}

const pintarCarrito = () => {
    items.innerHTML = ''

    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('span').textContent = producto.precio * producto.cantidad

        //botones
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    pintarFooter()
}


const pintarFooter = () => {
    footer.innerHTML = ''

    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío con innerHTML</th>
        `
        return
    }

    // sumar cantidad y sumar totales
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)
    // console.log(nPrecio)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)

    const boton = document.querySelector('#vaciar-carrito')
    boton.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
    })

}


const btnAumentarDisminuir = e => {
    // console.log(e.target.classList.contains('btn-info'))
    if (e.target.classList.contains('btn-info')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = { ...producto }
        pintarCarrito()
    }

    if (e.target.classList.contains('btn-danger')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        } else {
            carrito[e.target.dataset.id] = {...producto}
        }
        pintarCarrito()
    }
    e.stopPropagation()
}
