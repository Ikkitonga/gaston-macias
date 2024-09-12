import "./footer.css";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <h2 className="logo">GM</h2>
            {/* <p className="texto__footer">GRACIAS POR SU VISITA</p> */}
            <div className="iconos-sociales">
                <FaLinkedinIn />
                <FaGithub />
                <FaWhatsapp />
            </div>
        </footer>
    )
}

export default Footer;