import Sprite from './Sprite';
import Mycinema from './Mycinema';
import Puissance4 from './Puissance4';
import Spotify from './Spotify';

const Projet = () => {
    return (
        <div id="projets">
            <h1>Projets</h1>
            <ul className="listeprojets">
                <li className="projet"><Sprite /></li>
                <li className="projet"><Mycinema /></li>
                <li className="projet"><Puissance4 /></li>
                <li className="projet"><Spotify /></li>
            </ul>
        </div>
    );
};

export default Projet;