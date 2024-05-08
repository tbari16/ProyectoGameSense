import './Carrusel.css';

import tarjetasGraficas from '../../assets/tarjetasGraficas.jpg';
import monitor from '../../assets/monitor.jpg';
import procesadores from '../../assets/procesadores.jpg';

const Carrusel = () => {
    return (
        <main>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={tarjetasGraficas} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={monitor} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={procesadores} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </main>
    )
}

export default Carrusel;