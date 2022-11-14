import React from "react";
import {Header} from "./components/Header/Header";
import {Galeria} from "./pages/Galeria";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route exact path="/galeria" element={<Galeria/>}/>
                    <Route path="/kontakt" element={<h2>in progress</h2>}/>
                    <Route path="/" element={<MainPage />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
