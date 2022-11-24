import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Magias from './pages/Magias';
import Personagens from './pages/Personagens';
import './App.css';
import MyContext from './context/MyContext';
import Footer from './components/Footer';
import { Spellbook } from './helpers/Spellbook';

const App = () => {
    const [currentMagiaID, setCurrentMagiaID] = useState(1);
    const [spellList, setSpellList] = useState(Spellbook.getAllSpells());
    return (
        <>
            <MyContext.Provider
                value={{
                    currentMagiaID,
                    setCurrentMagiaID,
                    spellList,
                    setSpellList,
                }}
            >
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Magias />} />
                        <Route path="personagens" element={<Personagens />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </MyContext.Provider>
        </>
    );
};

export default App;
