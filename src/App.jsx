import './App.css';

/* Import de los componentes */
import Header from './Components/GeneralComponents/Header';
import Navbar from './Components/GeneralComponents/Navbar';
import Footer from './Components/GeneralComponents/Footer';

/* Import de todas las vistas */
import Home from './Views/Home';
import ProductsView from './Views/ProductsView';

/* Import de los routers */
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductsView />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
