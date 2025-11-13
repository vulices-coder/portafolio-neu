function Sobremi() {
    return (
        <section className="min-h-screen bg-white flex items-center justify-center px-4 py-20">
            <div className="max-w-6xl w-full">
                <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
                    Sobre Mí
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-gray-50 p-8 rounded-2xl text-center border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                        <h3 className="text-2xl font-semibold text-primary-500 mb-4">🎯 Mi Misión</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Crear soluciones web innovadoras que combinen 
                            diseño atractivo con funcionalidad excepcional.
                        </p>
                    </div>
                    
                    <div className="bg-gray-50 p-8 rounded-2xl text-center border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                        <h3 className="text-2xl font-semibold text-primary-500 mb-4">💼 Experiencia</h3>
                        <p className="text-gray-600 leading-relaxed">
                            +3 años desarrollando aplicaciones web modernas 
                            utilizando las últimas tecnologías del mercado.
                        </p>
                    </div>
                    
                    <div className="bg-gray-50 p-8 rounded-2xl text-center border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                        <h3 className="text-2xl font-semibold text-primary-500 mb-4">🚀 Enfoque</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Desarrollo centrado en el usuario, performance 
                            y código limpio y mantenible.
                        </p>
                    </div>
                </div>
                
                <div className="text-center">
                    <h3 className="text-3xl font-bold text-gray-800 mb-8">
                        Tecnologías y Herramientas
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['React', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Git', 'Figma', 'Vite', 'Tailwind'].map((skill) => (
                            <span 
                                key={skill}
                                className="bg-gradient-to-r from-primary-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sobremi
