import { useState } from 'react'; // Para manejar el estado local
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, incrementQuantity, decrementQuantity } from '../Components/Redux/cartSlice';
import './View.css'
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    },
});

const CartView = () => {
    const cart = useSelector((state) => state.cart.items); // Obtener el carrito desde Redux
    const dispatch = useDispatch(); // Obtener el dispatch para acciones
    const [discountCode, setDiscountCode] = useState(''); // Almacenar el código ingresado
    const [discountApplied, setDiscountApplied] = useState(false); // Indicar si el descuento está aplicado

    const totalPrice = cart.reduce((total, item) => total + (item.precio * item.cantidad), 0);

    const discountedPrice = discountApplied
        ? totalPrice * 0.7 // Aplicar el descuento del 30%
        : totalPrice; // Si no hay descuento, mantener el total original

    const handleRemoveFromCart = (producto) => {
        dispatch(removeFromCart(producto.id)); // Eliminar por ID
    };

    const handleClearCart = () => {
        dispatch(clearCart()); // Vaciar el carrito
    };

    const handleIncrement = (itemId) => {
        dispatch(incrementQuantity(itemId)); // Incrementar la cantidad
    };

    const handleDecrement = (itemId) => {
        dispatch(decrementQuantity(itemId)); // Disminuir la cantidad
    };

    const handleRealizarPago = async () => {
        const { value: formValues } = await Swal.fire({
            title: 'Datos de compra',
            html: `
                <input id="swal-input1" class="swal2-input" placeholder="Nombre Completo del Titular">
                <input id="swal-input2" class="swal2-input" placeholder="Número de Tarjeta">
                <input id="swal-input3" class="swal2-input" placeholder="Dirección">
                <input id="swal-input4" class="swal2-input" placeholder="Número de domicilio">
                <input id="swal-input5" class="swal2-input" placeholder="Email">
            `,
            focusConfirm: false,
            preConfirm: () => {
                const inputs = [
                    document.getElementById("swal-input1").value,
                    document.getElementById("swal-input2").value,
                    document.getElementById("swal-input3").value,
                    document.getElementById("swal-input4").value,
                    document.getElementById("swal-input5").value,
                ];

                if (inputs.some(input => !input)) {
                    Swal.showValidationMessage('Debe completar todos los campos'); // Validación básica
                    return null;
                }

                return inputs; // Retornar los valores ingresados
            },
        });

        if (formValues) {
            await Swal.fire({
                title: 'Pago Exitoso',
                text: `Compra realizada con éxito.`,
                icon: 'success',
            });

            Toast.fire({
                icon: 'success',
                title: 'Compra realizada',
            });
        }

        dispatch(clearCart());
    };

    const handleApplyDiscount = () => {
        // Verificar si el código es correcto
        if (discountCode.toLowerCase() === 'descuento') {
            setDiscountApplied(true); // Aplicar el descuento
        } else {
            alert('Código de descuento inválido'); // Aviso si el código es incorrecto
        }
    };

    return (
        <div className='carrito-container'>
            <h4>Carrito de Compras</h4>
            {cart.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}> {/* Clave por ID */}
                            {item.nombre} - ${item.precio.toLocaleString()}
                            <button className = 'cantidadCarrito' onClick={() => handleDecrement(item.id)}>-</button>
                            {item.cantidad}
                            <button className = 'cantidadCarrito' onClick={() => handleIncrement(item.id)}>+</button>
                            <button className='eliminarButton' onClick={() => handleRemoveFromCart(item)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
            <p>Total: ${totalPrice.toLocaleString()}</p>
            {discountApplied && (
                <p>Total con descuento: ${discountedPrice.toLocaleString()}</p>
            )}
            <input
                type="text"
                placeholder="Código de descuento"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)} // Actualizar el estado del código
            />
            <button className = 'botonDescuento' onClick={handleApplyDiscount}>Aplicar Descuento</button> {/* Botón para aplicar el descuento */}
            <div>
                <button className='vaciarButton' onClick={handleClearCart}>Vaciar Carrito</button>
                <button className='comprarButton' onClick={handleRealizarPago} disabled={cart.length === 0}>Realizar compra</button>
            </div>

        </div>
    );
};

export default CartView;
