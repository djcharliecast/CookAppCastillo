import "./components/styles.css";
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import AllItemsDetailContainer from './components/AllItemsDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
      <ItemListContainer nombre="Charlito"/>
      </Route>
      <Route exact path="/detalles">
      <AllItemsDetailContainer/>
      </Route>
      <Route exact path="/detalles/:id">
      <ItemDetailContainer/>
      </Route>
      </Switch>
      </BrowserRouter>
      </div>
      
  );
}

export default App;
