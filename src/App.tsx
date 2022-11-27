import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Magias from './pages/Magias';
import Personagens from './pages/Personagens';
import './App.css';
import { GlobalStorage } from './context/GlobalContext';
import Footer from './components/Footer';
import { Spellbook } from './helpers/Spellbook';

const App = () => {
    return (
        <>
            <GlobalStorage>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Magias />} />
                        <Route path="personagens" element={<Personagens />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </GlobalStorage>
        </>
    );
};

export default App;
