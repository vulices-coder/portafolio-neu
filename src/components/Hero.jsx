import './Hero.css'

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Victor Flores</h1>
                <p>Portafolio Web Designer</p>
                <div className="hero-buttons">
                    <button className="btn btn-primary">Ver Proyectos</button>
                    <button className="btn btn-secondary">Descargar CV</button>
                </div>
            </div>
        </section>
    )
}

export default Hero
