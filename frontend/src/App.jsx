import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProyectoViveroGreen from "./pages/Proyecto-vivero-green.jsx";
import ProyectoCuentasCorrientes from "./pages/Proyecto-cuentas-corrientes.jsx";
import ProyectoAlcorte from "./pages/Proyecto-alcorte.jsx";
import ProyectoJervalt from "./pages/Proyecto-jervalt.jsx";
import ProyectoAguas from "./pages/Proyecto-agua-carlitos.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portafolio" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/proyecto-vivero-green" element={<ProyectoViveroGreen />} />
            <Route path="/proyecto-alcorte" element={<ProyectoAlcorte />} />
            <Route path="/proyecto-jervalt" element={<ProyectoJervalt />} />
            <Route path="/proyecto-cuentas-corrientes" element={<ProyectoCuentasCorrientes />} />
            <Route path="/proyecto-agua-carlitos" element={<ProyectoAguas />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
