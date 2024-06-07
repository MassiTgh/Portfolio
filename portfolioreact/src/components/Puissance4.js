import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { GiTwoCoins } from "react-icons/gi";
import "../styles/components/Puissance4.css";


const Puissance4 = () => {
  return (
  <div className="puissance4">
        <Popup trigger={<button className="popupp4"><GiTwoCoins aria-label="bouton popup puissance 4"/></button>} modal nested >
        { (
        <div className="modal">
            <div className="title">Puissance 4</div>
            <div className="content">
                Nous devions reproduire le célèbre jeux du puissance 4 avec comme restriction, l'utilisation d'un module JavaScript uniquement ainsi que l'ulisation de POO, en y integrant la possibilité de modifier la taille du plateau de jeux ainsi qu'un mode PvP et PvE.<br></br>
                Découverte et utilisation d'un module JavaScript.
            </div>
            <div className="detail">
                <Popup trigger={<button className="popup2">Languages utilisés</button>} position="top center" nested >
                    <ul>
                        <li>JavaScript</li>
                        <li>HTML5/CSS3</li>
                    </ul>         
                </Popup>
            </div>
        </div>
        )}
        </Popup>
    </div>
  );
};
export default Puissance4;