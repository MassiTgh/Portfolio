import React, { useRef } from "react";
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import "../styles/components/Navbar.css";

const Navbar = () => {
    const navRef =  useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <div className="link">
                <a href="https://github.com/MassiTgh?tab=repositories" target="_blank" rel="noopener noreferrer" title="Lien github" className="github-link"><FaGithub className="github-icon" alt="bouton lien github" /></a>
                <a href="https://www.linkedin.com/in/massinissa-tighdine-0337b1140/" target="_blank" rel="noopener noreferrer" title="Lien linkedin" className="linkedin-link"><FaLinkedin className="linkedin-icon" alt="bouton lien linkedin" /></a>
            </div>
            <nav ref={navRef}>
                <Link to="home" alt="lien vers section profil" smooth={true} offset={0} duration={500}><p onClick={showNavbar}>Profil</p></Link>
                <Link to="competences" alt="lien vers section compétences" smooth={true} offset={-100} duration={500}><p onClick={showNavbar}>Compétences</p></Link>
                <Link to="projets" alt="lien vers section projets" smooth={true} offset={-70} duration={500}><p onClick={showNavbar}>Projets</p></Link>
                <Link to="contact" alt="lien vers section contact" smooth={true} offset={20} duration={500}><p onClick={showNavbar}>Contact</p></Link>
            </nav>
            <button className="nav-btn" aria-label="bouton affichage navbar" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
};

export default Navbar;