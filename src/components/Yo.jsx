function Yo() {
    return (
        <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-20">
            <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Imagen */}
                <div className="text-center">
                    <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex flex-col items-center justify-center text-white text-xl shadow-2xl">
                        <span>Foto de Victor</span>
                        <p className="text-sm mt-2">Web Designer</p>
                    </div>
                </div>
                
                {/* Texto */}
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-gray-800">
                        ¡Hola, soy Victor!
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Desarrollador Web y Diseñador apasionado por crear 
                        experiencias digitales únicas y funcionales.
                    </p>
                    
                    <div className="space-y-3">
                        <div className="text-gray-700">
                            <strong className="text-gray-900">Edad:</strong> 57 años
                        </div>
                        <div className="text-gray-700">
                            <strong className="text-gray-900">Ubicación:</strong> Berlin, Alemania
                        </div>
                        <div className="text-gray-700">
                            <strong className="text-gray-900">Especialidad:</strong> React, JavaScript, UI/UX
                        </div>
                    </div>
                    
                    <button className="bg-primary-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-600 transition-all duration-300 hover:scale-105 shadow-lg">
                        Contáctame: cholocreator@gmx.de
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Yo

