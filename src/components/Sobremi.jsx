function Sobremi() {
    const skills = [
        { name: 'Desarrollo Frontend', level: 90 },
        { name: 'Diseño UI/UX', level: 85 },
        { name: 'React.js', level: 88 },
        { name: 'JavaScript', level: 92 },
        { name: 'Tailwind CSS', level: 95 }
    ]

    return (
        <section className="py-16 px-5 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                    Habilidades & Experiencia
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                            Mis Habilidades
                        </h3>
                        <div className="space-y-6">
                            {skills.map((skill, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="font-medium text-gray-700">{skill.name}</span>
                                        <span className="text-blue-600 font-semibold">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-3">
                                        <div 
                                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                            Experiencia
                        </h3>
                        <div className="space-y-6">
                            <div className="border-l-4 border-blue-500 pl-6 py-2">
                                <h4 className="text-xl font-semibold text-gray-800">
                                    Desarrollador Frontend
                                </h4>
                                <p className="text-blue-600 font-medium mb-2">2022 - Presente</p>
                                <p className="text-gray-600">
                                    Desarrollo de aplicaciones web modernas usando React, Tailwind CSS y mejores prácticas.
                                </p>
                            </div>
                            
                            <div className="border-l-4 border-purple-500 pl-6 py-2">
                                <h4 className="text-xl font-semibold text-gray-800">
                                    Diseñador UI/UX
                                </h4>
                                <p className="text-purple-600 font-medium mb-2">2021 - 2022</p>
                                <p className="text-gray-600">
                                    Creación de interfaces de usuario intuitivas y experiencias de usuario excepcionales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sobremi
