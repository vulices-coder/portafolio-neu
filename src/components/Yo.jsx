function Yo() {
    return (
        <section className="py-16 px-5 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">
                    Sobre Mí
                </h2>
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mx-auto max-w-3xl">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-lg flex-shrink-0 mx-auto md:mx-0"></div>
                        <div className="text-left">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                Victor Flores
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Desarrollador Frontend apasionado por crear experiencias web excepcionales. 
                                Especializado en React, JavaScript moderno y diseño responsive.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-6">
                                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                                    React
                                </span>
                                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                                    JavaScript
                                </span>
                                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                                    Tailwind CSS
                                </span>
                                <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium">
                                    UI/UX Design
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Yo

