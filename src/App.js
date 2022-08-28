import './style.css';
import NavBar from './components/NavBar/';
import Main from './components/Main';
import ItemList from './components/ItemList';

function App() {
  return (
    <>
      <NavBar />
      <Main>
        <ItemList />
      </Main>
    </>
  );
}

export default App;
