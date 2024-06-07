import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "../styles/components/Mycinema.css";
import { BiSolidCameraMovie } from "react-icons/bi";

const Sprite = () => {
    return (
    <div className="cinema">
        <Popup trigger={<button className="popupcinema"><BiSolidCameraMovie aria-label="bouton popup My cinema"/></button>} modal nested >
        { (
        <div className="modal">
            <div className="title">Mycinema</div>
            <div className="content">
                La tâche ici était de reproduire un site pour un cinéma en exploitant une base de données qui nous a été fournie par l'école, avec la gestion de la partie admin/utilisateur et la modification de la base de données via des requête SQL envoyées du site web. 
                <br></br>
                Gestion d'une base de données, envoie de requêtes sql, développement des compétences back et front-end.
            </div>
            <div className="detail">
                <Popup trigger={<button className="popup2">Languages utilisés</button>} position="top center" nested >            
                    <ul>
                        <li>HTML5/CSS3</li>
                        <li>Php</li>
                        <li>MySql</li>
                    </ul>        
                </Popup>
            </div>
        </div>
        )}
        </Popup>
    </div>
    );
};
export default Sprite;