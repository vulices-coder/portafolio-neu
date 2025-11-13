function Hero() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white relative overflow-hidden flex items-center justify-center px-4">
            {/* Background pattern simplificado */}
            <div className="absolute inset-0 bg-white bg-opacity-5"></div>
            
            <div className="text-center relative z-10 max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    Victor Flores
                </h1>
                <p className="text-xl md:text-2xl mb-12 opacity-90">
                    Portafolio Web Designer
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-white text-blue-500 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
                        Ver Proyectos
                    </button>
                    <button className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-semibold text-lg hover:bg-white hover:text-blue-500 transition-all duration-300">
                        Descargar CV
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero