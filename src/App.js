import React from "react";
import { Header } from "./components/Header/Header";
import { Gallery } from "./pages/Gallery";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Kontakt } from "./pages/Kontakt";
import { Footer } from "./components/Footer/Footer";

export const App =()=> {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/galeria" element={<Gallery />} />
          <Route exact path="/kontakt" element={<Kontakt />} />
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
