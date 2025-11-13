import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Proyectos from './pages/Proyectos'
import Contacto from './pages/Contacto'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="proyectos" element={<Proyectos />} />
                    <Route path="contacto" element={<Contacto />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App


