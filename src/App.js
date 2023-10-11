import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className="app--container">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}></Route>
          <Route path="/category/:category" element={<ItemListContainer />}></Route>
          <Route path="/item/:itemId" element={<ItemListContainer />}></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;