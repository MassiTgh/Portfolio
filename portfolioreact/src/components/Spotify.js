import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "../styles/components/Spotify.css";
import { FaSpotify } from "react-icons/fa";


const Spotify = () => {
    return (
    <div className="spotify">
          <Popup trigger={<button className="popupspotify"><FaSpotify  className="spotifycolor" aria-label="bouton popup spotify"/></button>} modal nested >
        { (
        <div className="modal">
            <div className="title">Spotify</div>
            <div className="content">
                Ce projet avait pour but de nous faire une introduction à ReactJs, projet assez pertinent étant donné que le ReactJs ou React Native sont beaucoup utilisés pour faire des applications web et mobile.
                Nous avions donc pour mission de reproduire un spotify en exploitant une API avec react et ses librairies.
                Language de programation qui peut sembler compliqué au premier abord qui se montre finalement assez intuitif.
                <br></br>
                <img src="./spotify.png" alt="exemple spotify"/>
            </div>
            <div className="detail">
                <Popup trigger={<button className="popup2">Languages utilisés</button>} position="top center" nested >            
                    <ul>
                        <li>ReactJs</li>
                        <li>HTML5/CSS3</li>
                        <li>Docker</li>
                    </ul>         
                </Popup>
            </div>
        </div>
        )}
        </Popup>
    </div>
    );
};
export default Spotify;