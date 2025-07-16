import './App.css'

//components
import NavBar from './components/navBar/navBar'
import { ItemListWithSearch } from './components/itemList/itemList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';

import SectionAfiche from './components/sectionAfiche/SectionAfiche';
import HomePage from './components/homePage/HomePage';

const divider = "./src/assets/images/divisor-papel.png"


function App() {
 
  return (
    <BrowserRouter>
      <>
          <NavBar />
          <Routes>
            <Route path='/' element = {<HomePage />}/>
            <Route path='/category/:category' element = {<ItemListContainer />} />
            <Route path='/detail/:productId' element = {<ItemDetailContainer />} />
          </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
