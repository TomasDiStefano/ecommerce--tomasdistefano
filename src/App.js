import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./components/Context/CartContext";

function App() {
  return (
    <div className="app--container">
      <BrowserRouter>
        <CartProvider>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}></Route>
            <Route path="/category/:category" element={<ItemListContainer />}></Route>
            <Route path="/item/:itemId" element={<ItemDetailContainer />}></Route>
            <Route path="*" element={<h2>Sitio en construcción, vuelva más tarde</h2>}  />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;