import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer greeting="Bienvenido a la tienda virtual de Diesel Juncal"></ItemListContainer>
    </div>
  );
}

export default App;
