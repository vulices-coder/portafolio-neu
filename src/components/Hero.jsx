function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white flex items-center justify-center px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
          Victor Flores
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up animation-delay-300">
          Portafolio Web Designer
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
          <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
            Ver Proyectos
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors">
            Descargar CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;