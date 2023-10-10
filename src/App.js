import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      
      <NavBar></NavBar>
      
      <BrowserRouter>
        
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


/**/