import './Yo.css'

function Yo() {
    return (
        <section className="yo-container">
            <div className="yo-content">
                <div className="yo-image">
                    <img 
                        src="/mi-image.jpg"  // ← Cambiado a ruta public
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
                            <strong>Especialidad:</strong> React, JavaScript, UI/UX
                        </div>
                    </div>
                    
                    <button className="contact-btn">
                        Contáctame: cholocreator@gmx.de
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Yo