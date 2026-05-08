import '../components/navbar/Navbar.jsx';
import '../layout.scss';
import './homePage.scss';
function HomePage(){
    return(
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <div className="title">
                        <h1>Find, Book, and Belong — Your Perfect Space Awaits</h1>
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