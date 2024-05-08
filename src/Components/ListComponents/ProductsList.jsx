import './List.css'
import { useSelector, useDispatch } from 'react-redux'; // Para obtener el estado de Redux
import pcImagen from '../../assets/pcGamerBlanca.jpg';
import placaDeVideo from '../../assets/placaDeVideo.jpg';
import memoria from '../../assets/memoria.jpg';
import procesador from '../../assets/procesador.jpg';
import mother from '../../assets/mother.jpg';
import monitor from '../../assets/monitorgamer.jpg';
import teclado from '../../assets/teclado.jpg';
import auriculares from '../../assets/auriculares.jpg';
import mouse from '../../assets/mouse.jpg';
import { añadirAlCart } from '../Redux/cartSlice';
import Swal from 'sweetalert2'; // Importar SweetAlert2

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer; // Detener el temporizador al pasar el ratón
        toast.onmouseleave = Swal.resumeTimer; // Reanudar el temporizador al salir
    },
});

const ProductsList = () => {

    const dispatch = useDispatch();

    const handleAddProduct = (producto) => {
        dispatch(añadirAlCart(producto)); // Agregar el producto al carrito
        Toast.fire({  // Alerta
            icon: "success",
            title: "Producto agregado al carrito", 
        });
    };

    const filter = useSelector((state) => state.filter); // Obtener el estado del filtro

    const productos = [
        { id: 1, imagen: pcImagen, nombre: 'PC', precio: 2750000 },
        { id: 2, imagen: placaDeVideo, nombre: 'Placa de Video', precio: 1350000 },
        { id: 3, imagen: placaDeVideo, nombre: 'Placa de Video', precio: 985000 },
        { id: 4, imagen: teclado, nombre: 'Periferico', precio: 230000 },
        { id: 5, imagen: memoria, nombre: 'Memoria', precio: 187000 },
        { id: 6, imagen: memoria, nombre: 'Memoria', precio: 213000 },
        { id: 7, imagen: procesador, nombre: 'Procesador', precio: 875000 },
        { id: 8, imagen: procesador, nombre: 'Procesador', precio: 736000 },
        { id: 9, imagen: mother, nombre: 'Motherboard', precio: 81000 },
        { id: 10, imagen: procesador, nombre: 'Procesador', precio: 765000 },
        { id: 11, imagen: mother, nombre: 'Motherboard', precio: 79000 },
        { id: 12, imagen: memoria, nombre: 'Memoria', precio: 189000 },
        { id: 13, imagen: monitor, nombre: 'Periferico', precio: 190000 },
        { id: 14, imagen: pcImagen, nombre: 'PC', precio: 3450000 },
        { id: 15, imagen: memoria, nombre: 'Memoria', precio: 267000 },
        { id: 16, imagen: placaDeVideo, nombre: 'Placa de Video', precio: 1120000 },
        { id: 17, imagen: mother, nombre: 'Motherboard', precio: 96000 },
        { id: 18, imagen: placaDeVideo, nombre: 'Placa de Video', precio: 890000 },
        { id: 19, imagen: procesador, nombre: 'Procesador', precio: 965000 },
        { id: 20, imagen: memoria, nombre: 'Memoria', precio: 146000 },
        { id: 21, imagen: mother, nombre: 'Motherboard', precio: 98000 },
        { id: 22, imagen: mother, nombre: 'Motherboard', precio: 120000 },
        { id: 23, imagen: memoria, nombre: 'Memoria', precio: 203000 },
        { id: 24, imagen: mouse, nombre: 'Periferico', precio: 160000 },
        { id: 25, imagen: monitor, nombre: 'Periferico', precio: 240000 },
        { id: 26, imagen: procesador, nombre: 'Procesador', precio: 1050000 },
        { id: 27, imagen: memoria, nombre: 'Memoria', precio: 173000 },
        { id: 28, imagen: placaDeVideo, nombre: 'Placa de Video', precio: 1450000 },
        { id: 29, imagen: pcImagen, nombre: 'PC', precio: 2250000 },
        { id: 30, imagen: mouse, nombre: 'Periferico', precio: 98000 },
        { id: 31, imagen: procesador, nombre: 'Procesador', precio: 786000 },
        { id: 32, imagen: memoria, nombre: 'Memoria', precio: 98000 },
        { id: 33, imagen: memoria, nombre: 'Memoria', precio: 167000 },
        { id: 34, imagen: pcImagen, nombre: 'PC', precio: 1890000 },
        { id: 35, imagen: procesador, nombre: 'Procesador', precio: 932000 },
        { id: 36, imagen: pcImagen, nombre: 'PC', precio: 2130000 },
        { id: 37, imagen: placaDeVideo, nombre: 'Placa de Video', precio: 1300000 },
        { id: 38, imagen: mother, nombre: 'Motherboard', precio: 90000 },
        { id: 39, imagen: mouse, nombre: 'Periferico', precio: 110500 },
        { id: 40, imagen: mother, nombre: 'Motherboard', precio: 84500 },
        { id: 41, imagen: placaDeVideo, nombre: 'Placa de Video', precio: 910000 },
        { id: 42, imagen: procesador, nombre: 'Procesador', precio: 918000 },
        { id: 43, imagen: pcImagen, nombre: 'PC', precio: 960000 },
        { id: 44, imagen: placaDeVideo, nombre: 'Placa de Video', precio: 960000 },
        { id: 45, imagen: memoria, nombre: 'Memoria', precio: 142000 },
        { id: 46, imagen: auriculares, nombre: 'Periferico', precio: 210000 },
        { id: 47, imagen: teclado, nombre: 'Periferico', precio: 195000 },
        { id: 48, imagen: pcImagen, nombre: 'PC', precio: 1980000 },
        { id: 49, imagen: placaDeVideo, nombre: 'Placa de Video', precio: 1650000 },
        { id: 50, imagen: pcImagen, nombre: 'PC', precio: 1680000 },
        { id: 51, imagen: procesador, nombre: 'Procesador', precio: 874000 },
        { id: 52, imagen: procesador, nombre: 'Procesador', precio: 1150000 },
        { id: 53, imagen: pcImagen, nombre: 'PC', precio: 4250000 },
        { id: 54, imagen: monitor, nombre: 'Periferico', precio: 200000 },
        { id: 55, imagen: auriculares, nombre: 'Periferico', precio: 265000 },
    ];

    // Filtrar productos según el estado actual del filtro
    const filteredProducts = filter
        ? productos.filter(
            (p) => !filter.name || p.nombre.toLowerCase() === filter.name.toLowerCase()
        )
        : productos; // Mostrar todos si no hay filtro

    return (
        <>
            <div className="cards-container">
                {filteredProducts.map((producto) => (
                    <div className="card" key={producto.id}> {/* Clave por ID */}
                        <img src={producto.imagen} className="card-img-top" alt="Producto" />
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">${producto.precio.toLocaleString()}</p>
                            <button
                                className="btn btn-primary"
                                onClick={() => handleAddProduct(producto)}
                            >
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductsList;