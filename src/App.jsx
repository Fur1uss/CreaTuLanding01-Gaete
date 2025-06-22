import './App.css'

//components
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

//Images
const cobwebs = "./src/assets/images/Cobwebs.png"
const cloth = "./src/assets/images/Cloth.png"

function App() {
 
  return (
    <>
      <section>
        <header>
          <NavBar />
        </header>
        <main>
          <ItemListContainer slogan="ESTO ES ROPA, NO WEBEAMOS" />
          <div className="clothes">
            <img src={cloth} alt="clothes" className="cloth" />
            <img src={cobwebs} alt="cobwebs" className="cobwebs" />
          </div>
        </main>
      </section>
    </>
  )
}

export default App
