function Proyectos() {
    return (
        <div className="min-h-screen pt-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">Mis Proyectos</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Proyectos vendrán aquí */}
                    <div className="bg-gray-100 p-6 rounded-lg text-center">
                        <p>Próximamente...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proyectos