import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation()
    
    return (
        <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="text-2xl font-bold text-primary-500">
                        Victor Flores
                    </Link>
                    
                    <div className="flex space-x-8">
                        {[
                            { path: '/', label: 'Inicio' },
                            { path: '/proyectos', label: 'Proyectos' },
                            { path: '/contacto', label: 'Contacto' }
                        ].map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`font-semibold transition-colors duration-300 ${
                                    location.pathname === item.path
                                        ? 'text-primary-500'
                                        : 'text-gray-600 hover:text-primary-500'
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar