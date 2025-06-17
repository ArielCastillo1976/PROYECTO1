//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavBarBootstrap from './components/NavBarBootstrap';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
//import ItemCount from './components/ItemCount';

function App() {


  return (
    <BrowserRouter>
      <NavBarBootstrap />
      <Routes>
        <Route path='/' element={<ItemListContainer saludo='Bienvenido! Tu experiencia comienza ahora.'/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer saludo='Bienvenido! Tu experiencia comienza ahora.'/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>     
      {/* <ItemCount stock={5} /> */}
      </BrowserRouter>
  )
}

export default App



