import './Filter.css'

import { useDispatch } from 'react-redux';
import { clearFilter, setFilter } from '../Redux/filterSlice';

const FilterProducts = () => {

    const dispatch = useDispatch(); // Obtener el método dispatch

    const handleClick = (e) => {
        const selectedText = e.target.textContent; // Obtener el texto seleccionado
        let filter = { name: selectedText }; // Establecer el filtro según el nombre del producto

        // Establecer el filtro basado en lo que seleccione el usuario
        if (selectedText === 'Ver todos los productos') {
            dispatch(clearFilter()); // Al poner esa opcion se esta quitando el filtro por lo que muestra todos los productos
        } else {
            filter = { name: selectedText }; // Filtra por el nombre del producto
        }

        dispatch(setFilter(filter)); // Enviar acción para cambiar el filtro
    };

    return (
        <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Busca el producto adecuado para ti!
            </a>
            <ul className="dropdown-menu">
                <li className="dropdown-item" onClick={handleClick}>Periferico</li>
                <li className="dropdown-item" onClick={handleClick}>PC</li>
                <li className="dropdown-item" onClick={handleClick}>Memoria</li>
                <li className="dropdown-item" onClick={handleClick}>Procesador</li>
                <li className="dropdown-item" onClick={handleClick}>Placa de video</li>
                <li className="dropdown-item" onClick={handleClick}>Motherboard</li>
                <li className="dropdown-item" onClick={handleClick}>Ver todos los productos</li>
            </ul>
        </div>
    );
}

export default FilterProducts;