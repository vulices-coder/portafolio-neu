import './Sobremi.css'

function Sobremi() {
    return (
        <section className="sobremi-container">
            <div className="sobremi-content">
                <h2>Sobre Mí</h2>
                
                <div className="sobremi-grid">
                    <div className="sobremi-card">
                        <h3>🎯 Mi Misión</h3>
                        <p>
                            Crear soluciones web innovadoras que combinen 
                            diseño atractivo con funcionalidad excepcional.
                        </p>
                    </div>
                    
                    <div className="sobremi-card">
                        <h3>💼 Experiencia</h3>
                        <p>
                            +8 meses desarrollando aplicaciones web modernas 
                            utilizando las últimas tecnologías del mercado.
                        </p>
                    </div>
                    
                    <div className="sobremi-card">
                        <h3>🚀 Enfoque</h3>
                        <p>
                            Desarrollo centrado en el usuario, performance 
                            y código limpio y mantenible.
                        </p>
                    </div>
                </div>
                
                <div className="skills-section">
                    <h3>Tecnologías y Herramientas</h3>
                    <div className="skills-list">
                        <span className="skill-tag">Framer</span>
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">HTML5</span>
                        <span className="skill-tag">CSS3</span>
                        <span className="skill-tag">Java Script</span>
                        <span className="skill-tag">Git</span>
                        <span className="skill-tag">Figma</span>
                        <span className="skill-tag">Vite</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sobremi
