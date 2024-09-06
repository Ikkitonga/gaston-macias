import { useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import "./navbar.css";

const Navbar = () => {
    useEffect(() => {
        const nav = document.querySelector("#nav");
        const abrir = document.querySelector("#abrir");
        const cerrar = document.querySelector("#cerrar");

        if (abrir && cerrar) {
            abrir.addEventListener("click", () => {
                nav.classList.add("visible");
            });

            cerrar.addEventListener("click", () => {
                nav.classList.remove("visible");
            });

            return () => {
                abrir.removeEventListener("click", () => {
                    nav.classList.add("visible");
                });

                cerrar.removeEventListener("click", () => {
                    nav.classList.remove("visible");
                });
            };
        }
    }, []);


    return <header className="header">
        <h2 className="logo">GM</h2>
        <button className="abrir-menu" id="abrir"><CiMenuBurger /></button>
        <nav className="nav" id="nav">
            <button className="cerrar-menu" id="cerrar"><IoClose /></button>
            <ul className="nav__list">
                <li className="list__item"><button>Quien soy</button></li>
                <li className="list__item"><button>Habilidades</button></li>
                <li className="list__item"><button>Educación</button></li>
                <li className="list__item"><button>Contacto</button></li>
            </ul>
        </nav>
    </header>
}

export default Navbar;