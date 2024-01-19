import { Route, Routes } from 'react-router-dom'
import './App.css'
import "./components/Header/Header.css"
import "./pages/HomePage/Homepage.css"
import { HomePage } from './pages/HomePage'
import { Collection } from './pages/CollectionPage/Collection'
import { Shop } from './pages/Shop/Shop'
import { AboutUs } from './pages/AboutUs/AboutUs'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'


function App() {
  

  return (
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='collection' element={<Collection/>}/>
          <Route path='shop' element={<Shop/>}/>
          <Route path='aboutus' element={<AboutUs/>}/>
        </Routes>
        <Footer/>
      </div>
  )
}

export default App
