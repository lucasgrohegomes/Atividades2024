import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Sobre from './components/Sobre'
import Galeria from './components/Galeria'

function App() {
  return (
  <div>
   <header>
   <Header />
   </header>
   <section>
   <Banner />
   <Sobre />
   <Galeria />
    </section>
  </div>
  )
}

export default App

