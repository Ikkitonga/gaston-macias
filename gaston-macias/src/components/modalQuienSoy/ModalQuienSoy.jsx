import "./ModalQuienSoy.css";


const ModalQuienSoy = ({show, handleClose}) => {

    if (!show) return null;
    
    return (
        <article className="modal is-open">
            <div className="modal-container">
            <button className="modal-close" onClick={handleClose}>X</button>
                <div className="modal-header">
                    <h2>Quien Soy</h2>
                </div>
                <div className="modal-datos">
                    <p>¡Bienvenido a mi portafolio! Soy Gastón Ezequiel Macías, Técnico Electrónico especializado en 
                        telecomunicaciones. Desde joven me apasiona la tecnología, y a lo largo de los últimos años, 
                        me he sumergido en el desarrollo frontend. He adquirido mis habilidades a través de cursos online 
                        y estudios autodidactas, siempre buscando mejorar y aprender más en este apasionante campo.

                        Además de la tecnología, soy un apasionado de los videojuegos, especialmente de World of Warcraft, 
                        donde disfruto tanto de la estrategia como del trabajo en equipo. Esta pasión me ayuda a mantenerme creativo 
                        y enfocado, cualidades que también aplico en mis proyectos de desarrollo frontend.

                        Mi objetivo es continuar creciendo como desarrollador frontend y contribuir con proyectos 
                        que impulsen la innovación y el diseño eficiente.

                        Si te interesa saber más sobre mí o colaborar en un proyecto, no dudes en contactarme. 
                        ¡Estoy siempre abierto a nuevas oportunidades!
                    </p>
                </div>
            </div>
        </article>
    )
}

export default ModalQuienSoy;