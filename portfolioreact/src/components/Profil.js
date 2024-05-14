import { FaBootstrap, FaCss3Alt, FaHtml5, FaPhp, FaReact, FaSass } from 'react-icons/fa';
import { RiJavascriptFill } from "react-icons/ri";
import { SiMysql, SiTailwindcss } from "react-icons/si";

const Profil = () => {
    return (
        <div id="profil">
            <div className="presentation" >
                <h1>Profil</h1>
                <img src="/photo.jpeg" alt=""/>
                <p className="description">Actuellement en formation de développeur web Full Stack à la Web@cademie &#123;EPITECH&#125;, je suis a la recherche d'une alternance de 14 mois à partir de Septembre 2024.
                Je suis en mesure de développer un site internet avec un SEO maximal afin qu'il génère un maximum de traffic et souhaite approfondir mes connaissances notamment en Front-end (Next.Js/ReactJS) ou développement mobile (ReactNative/Swift).
                <br />
                Je suis à l'écoute de propositions d'entretien en vue d'un alternance.</p>
                <a className="cv" href="./assets/img/CV.pdf" title="lien de telechargement CV" download>Mon CV</a>   
            </div>

            <div className="competences">
                <h1>Compétences</h1>
                <div className="listeicons">
                    <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank" rel="noreferrer" className="icons"><FaHtml5 className="html"/></a>
                    <a href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank" rel="noreferrer" className="icons"><FaCss3Alt className="css"/></a>
                    <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank" rel="noreferrer" className="icons"><RiJavascriptFill className="js"/></a>
                    <a href="https://www.php.net/manual/fr/intro-whatis.php" target="_blank" rel="noreferrer" className="icons"><FaPhp className="php"/></a>
                    <a href="https://sql.sh/" target="_blank" rel="noreferrer" className="icons"><SiMysql className="sql"/></a>
                    <a href="https://fr.legacy.reactjs.org/" target="_blank" rel="noreferrer" className="icons"><FaReact className="react"/></a>
                    <a href="https://sass-lang.com/" target="_blank" rel="noreferrer" className="icons"><FaSass className="sass"/></a>
                    <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer" className="icons"><FaBootstrap className="bootstrap"/></a>
                    <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="icons"><SiTailwindcss className="tailwind"/></a>
                </div>
            </div>
        </div>
    );
};

export default Profil;