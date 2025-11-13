import './Yo.css'


function Yo() {
    return (
        <section className="yo-container">
            <div className="yo-content">
                <div className="yo-image">
                    <img 
                        src="/public/mi-imagen.jpg"  // ← Ruta desde public/
                        alt=""
                        className="profile-photo"
                    />
                  
                </div>
                
                <div className="yo-text">
                    <h2>¡Hola, soy Victor!</h2>
                    <p className="yo-description">
                        Desarrollador Web y Diseñador apasionado por crear 
                        experiencias digitales únicas y funcionales.
                    </p>
                    
                    <div className="yo-details">
                        <div className="detail-item">
                            <strong>Edad:</strong> 57 años
                        </div>
                        <div className="detail-item">
                            <strong>Ubicación:</strong> Berlin, Alemania
                        </div>
                        <div className="detail-item">
                            <strong>Especialidad:</strong> Framer, Figma, Bootstrap, React, JavaScript, UI/UX
                        </div>
                    </div>
                    
                    <button className="contact-btn">
                        Contáctame
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Yo