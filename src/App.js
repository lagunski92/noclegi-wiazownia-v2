import React from "react";
import {Header} from "./components/Header/Header";
import {Gallery} from "./pages/Gallery";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {Kontakt} from "./pages/Kontakt";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route exact path="/galeria" element={<Gallery/>}/>
                    <Route path="/kontakt" element={<Kontakt />}/>
                    <Route path="/" element={<MainPage />}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
