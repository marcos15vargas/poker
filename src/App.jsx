import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio";
import Blog from "./pages/Blog/Blog";
import Nosotros from "./pages/Nosotros/Nosotros";
import Galeria from "./pages/Galeria/Galeria";
import Contacto from "./pages/Contacto/Contacto";

import { Footer } from "./components/Footer";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Inicio />} />
            <Route path="blog" element={<Blog />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="galeria" element={<Galeria />} />
            <Route path="contacto" element={<Contacto />} />
          </Route>
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
