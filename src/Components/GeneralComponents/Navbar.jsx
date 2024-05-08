import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container-fluid">
                    <div className="navbar-nav w-100 d-flex justify-content-between">
                        <Link to='/products' className='nav-link'>Ver Catalogo</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;