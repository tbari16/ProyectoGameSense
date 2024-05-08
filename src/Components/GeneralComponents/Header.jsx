import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <>
            <header>
                <div>
                    {/* Estos tienen que ser Link. Cambiarlo luego. */}
                    <h1><Link to = '/' className='title'>GameSense</Link></h1>
{/*                     <a href="" className='hover'>Iniciar Sesion</a> */}
                </div>
            </header>
        </>
    );
}

export default Header;