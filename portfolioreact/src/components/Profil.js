import { FaBootstrap, FaCss3Alt, FaHtml5, FaPhp, FaReact, FaSass } from 'react-icons/fa';
import { RiJavascriptFill } from "react-icons/ri";
import { SiMysql, SiTailwindcss } from "react-icons/si";

const Profil = () => {
    return (
        <div id="profil">
            <div className="presentation" >
                <h1>Profil</h1>
                <img src="/photo.jpeg" alt=""/>
                <p className="description">Actuellement en formation de développeur web Full Stack à la Web@cademie &#123;EPITECH&#125;, je suis à la recherche d'une alternance de 14 mois à partir de Septembre 2024.
                Je suis en mesure de développer un site internet avec un SEO maximal et souhaite approfondir mes connaissances notamment en front-end (Next.Js/ReactJS) ou développement mobile (ReactNative/Swift).
                <br />
                Je suis à l'écoute de propositions d'entretien en vue d'une alternance.</p>
                <a className="cv" href="./CV.pdf" title="lien de telechargement CV" download>Mon CV</a>   
            </div>

            <div className="competences">
                <h1>Compétences</h1>
                <div className="listeicons">
                    <a className="icons"><FaHtml5 className="html"/></a>
                    <a className="icons"><FaCss3Alt className="css"/></a>
                    <a className="icons"><RiJavascriptFill className="js"/></a>
                    <a className="icons"><FaPhp className="php"/></a>
                    <a className="icons"><SiMysql className="sql"/></a>
                    <a className="icons"><FaReact className="react"/></a>
                    <a className="icons"><FaSass className="sass"/></a>
                    <a className="icons"><SiTailwindcss className="tailwind"/></a>
                </div>
            </div>
        </div>
    );
};

export default Profil;