import './card.scss';
import {Link} from 'react-router-dom';

function Card({item}){
    return(
        <div className="card">
            <Link to={`/${item.id}`}className="imageContainer">
                <img src={item.images[0]} alt="house"/>
            </Link>
            <div className="textContainer">
                <h2 className="title">
                    <Link to={`/${item.id}`}>{item.title}</Link>
                </h2>
                <p className="address">
                    <img src="/pin.png" alt="location"/>
                    <span>{item.address}</span>
                </p>
                <p className="price">
                    ${item.price}
                </p>
                <div className="bottom">
                    <div className="features">
                        <div className="feature">
                            <img src="/bed.png" alt="bedroom"/>
                            <span>{item.bedroom} Bedroom</span>
                        </div>
                        <div className="feature">
                            <img src="/bath.png" alt="bathroom"/>
                            <span>{item.bathroom} Bathroom</span>
                        </div>
                    </div>
                    <div className="icons">
                        <div className="icon">
                            <img src="/save.png" alt="saved"/>
                        </div>
                        <div className="icon">
                            <img src="/chat.png" alt="saved"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Card;
