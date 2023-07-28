import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

const Router = () => {
  return (
    <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer content="Feito por Aline Beltrão" />
    </BrowserRouter>
  )
}

export default Router