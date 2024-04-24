import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Catalog } from './pages/Catalog/Catalog';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Routes, Route } from 'react-router-dom';
import { SingleProductPage } from './pages/SingleProductPage/SingleProductPage';

export default function App() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/catalog' element={<Catalog />} />
                        <Route path='/catalog/:id' element={<SingleProductPage />} />
                        <Route path='/about' element={<About />} />
                    </Routes>
                </div>
            </main>
            <Footer />
        </>
    );
}
