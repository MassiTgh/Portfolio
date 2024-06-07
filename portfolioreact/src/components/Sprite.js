import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "../styles/components/Sprite.css";
import { SiThespritersresource } from "react-icons/si";

const Sprite = () => {
    return (
    <div className="sprite">
        <Popup trigger={<button className="popupsprite"><SiThespritersresource className="spritecolor" aria-label="Bouton popup sprite"/></button>} modal nested >
        { (
        <div className="modal">
            <div className="title">Sprite Generator</div>
            <div className="content">
                Pour ce projet nous avions pour mission de reproduire un sprite css, donc une image de fond sur laquel nous inserons d'autres images présentes dans des dossiers et sous-dossiers (utilisation de récursvie et problèmatique de redimensions d'image).
                <br></br>
            </div>
            <div className="detail">
                <Popup trigger={<button className="popup2">Languages utilisés</button>} position="top center" nested >            
                    <ul>
                        <li>Php</li>
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