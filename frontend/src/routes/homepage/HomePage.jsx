import SearchBar from '../../components/searchbar/SearchBar.jsx'; 

import './homepage.scss';
function HomePage(){
    return(
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">
                        Find, Book, and Belong — Your Perfect Space Awaits</h1>
                        <p>— 
                            Discover your ideal workspace with our platform. Book your next workspace today and experience the freedom to work where you thrive.
                        </p>
                        <SearchBar/>
                        <div className="boxes">
                            <div className="box">
                                 <h1>15+</h1>
                                 <h2>Years of Experience</h2>
                            </div>
                            <div className="box">
                                <h1>200</h1>
                                <h2>Award Gained</h2>
                            </div>
                            <div className="box">
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