import './style.css';
import NavBar from './components/NavBar/';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer 
        className="item-list-container" 
        greeting="Click para agregar al carrito"
      />
    </>
  );
}

export default App;
