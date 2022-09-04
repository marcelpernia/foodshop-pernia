import './style.css';
import NavBar from './components/NavBar/';
import Main from './components/Main';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <>
      <NavBar />
      <Main>
        {/* <ItemList /> */}
        <ItemDetail />
      </Main>
    </>
  );
}

export default App;
