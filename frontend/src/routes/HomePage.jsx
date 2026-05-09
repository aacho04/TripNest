import '../components/navBar/Navbar.jsx';
import '../components/searchBar/SearchBar.jsx'; 
import '../layout.scss';
import './homePage.scss';
function HomePage(){
    return(
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <div className="title">
                        <h1>Find, Book, and Belong — Your Perfect Space Awaits</h1>
                        <p>--
                            Discover your ideal workspace with our platform. Whether you're a freelancer, entrepreneur, or remote worker, we connect you with the perfect space to boost your productivity and creativity. Book your next workspace today and experience the freedom to work where you thrive.
                        </p>
                        <SearchBar/>
                        <div className="boxes">
                            <h1>15+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="boxes">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="boxes">
                            <h1>1200+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                     
                </div>
               

            </div>
            <div className="imgContainer">
                <img src="bg.png" alt="" />
            </div>
        </div>
    );
}
export default HomePage;