import Navbar from '../components/Navbar';
import Profil from '../components/Profil';
import Projet from '../components/Projet';
import Contact from '../components/Contact';

const Home = () => {

    return (
        <div className="home">
            <Navbar />
            <Profil />
            <Projet />
            <Contact />
        </div>
    );
};

export default Home;