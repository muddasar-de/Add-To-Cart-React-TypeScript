import { useState } from "react";
import { Container } from "react-bootstrap";
import { Home, About, Store } from "./pages";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
function App() {
  const [count, setCount] = useState(0);

  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
