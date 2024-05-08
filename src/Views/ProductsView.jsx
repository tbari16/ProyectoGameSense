import FilterProducts from '../Components/FilterComponent/FilterProducts';
import ProductsList from '../Components/ListComponents/ProductsList';
import { Provider } from 'react-redux'; // Para conectar Redux con React
import store from '../Components/Redux/store';
import CartView from './CartView'; // El componente del carrito
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';


import './View.css'

const ProductsView = () => {

    const [showCart, setShowCart] = useState(false);

    const toggleCart = () => {
        setShowCart(!showCart); // Muestra el carrito
    };

    return (
        <Provider store={store}> {/* Conectar Redux con React */}
            <div>
                <div className='encabezado'>
                    <h2>Productos</h2>
                    <button className='carritoButton'onClick={toggleCart}>
                        <IconButton >
                            <ShoppingCartIcon />
                        </IconButton>
                    </button>
                    {showCart && <CartView />}
                    <h4>Filtrar</h4>
                </div>

                <FilterProducts /> {/* Componente para filtrar */}
                <ProductsList /> {/* Componente que muestra productos filtrados */}
            </div>
        </Provider>
    );
}

export default ProductsView;