import './Section.css'
import { Link } from 'react-router-dom';
import pcImagen from '../../assets/pcGamerBlanca.jpg';
import placaDeVideo from '../../assets/placaDeVideo.jpg';
import memoria from '../../assets/memoria.jpg';
import procesador from '../../assets/procesador.jpg';
import mother from '../../assets/mother.jpg';
import monitor from '../../assets/monitorgamer.jpg';
import teclado from '../../assets/teclado.jpg';

const Section = () => {
    return (
        <>
            <section>
                <div className='secciones'>
                    <div className='titulo'>
                        <b></b>
                        <h2>Productos destacados</h2>
                        <b></b>
                    </div>
                    <div className='cards-countainer'>
                        <div className="card">
                            {/* Placa de video */}
                            <img src={placaDeVideo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Placa de video</h5>
                                <p className="card-text">Placa de video</p>
                                <Link to='/products' className="btn btn-primary">Ver categoria</Link>
                            </div>
                        </div>
                        <div className="card">
                            {/* PC armada */}
                            <img src={pcImagen} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">PC Alta Gama</h5>
                                <p className="card-text">PC armadas</p>
                                <Link to='/products' className="btn btn-primary">Ver categoria</Link>
                            </div>
                        </div>
                        <div className="card">
                            {/* memoria */}
                            <img src={memoria} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Memoria</h5>
                                <p className="card-text">Memoria</p>
                                <Link to='/products' className="btn btn-primary">Ver categoria</Link>
                            </div>
                        </div>
                        <div className="card">
                            {/* procesador */}
                            <img src={procesador} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Procesador</h5>
                                <p className="card-text">Procesador</p>
                                <Link to='/products' className="btn btn-primary">Ver categoria</Link>
                            </div>
                        </div>
                        <div className="card">
                            {/* Periferico */}
                            <img src={monitor} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Monitor</h5>
                                <p className="card-text">Periferico</p>
                                <Link to='/products' className="btn btn-primary">Ver categoria</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='secciones'>
                    <div className='titulo'>
                        <b></b>
                        <h2>Novedades</h2>
                        <b></b>
                    </div>
                    <div className='cards-countainer'>
                        <div className="card">
                            {/* Motherboard */}
                            <img src={mother} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Motherboard</h5>
                                <p className="card-text">Motherboard</p>
                                <Link to='/products' className="btn btn-primary">Ver categoria</Link>
                            </div>
                        </div>
                        <div className="card">
                            {/* Procesador */}
                            <img src={procesador} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Procesador</h5>
                                <p className="card-text">Procesador</p>
                                <Link to='/products' className="btn btn-primary">Ver categoria</Link>
                            </div>
                        </div>
                        <div className="card">
                            {/* Periferico */}
                            <img src={teclado} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Teclado</h5>
                                <p className="card-text">Periferico</p>
                                <Link to='/products' className="btn btn-primary">Ver categoria</Link>
                            </div>
                        </div>
                        <div className="card">
                            {/* Placa de video */}
                            <img src={placaDeVideo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Placa de video</h5>
                                <p className="card-text">Placa de video</p>
                                <Link to='/products' className="btn btn-primary">Ver categoria</Link>
                            </div>
                        </div>
                        <div className="card">
                            {/* memoria */}
                            <img src={memoria} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Memoria</h5>
                                <p className="card-text">Memoria</p>
                                <Link to='/products' className="btn btn-primary">Ver categoria</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section;