


const ModalHabilidades = ({show, handleClose}) => {

    if (!show) return null;
    
    return (
        <article className="modal is-open">
            <div className="modal-container">
                <div className="modal-header">
                    <h2>Habilidades</h2>
                    <button className="modal-close" onClick={handleClose}>X</button>
                </div>
                <div className="modal-datos">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit rerum ab harum pariatur, quibusdam ullam libero
                        at nulla delectus voluptatibus, alias eaque repellat,
                        exercitationem explicabo magni suscipit non id asperiores.</p>
                </div>
            </div>
        </article>
    )
}

export default ModalHabilidades;