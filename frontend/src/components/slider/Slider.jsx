import './slider.scss';
import { useState } from 'react';
import { IoClose } from "react-icons/io5";

function Slider({images}){
    const [imageIndex, setImageIndex] = useState(null);
    const changeSlide=(direction)=>{
        if(direction==="left"){
            setImageIndex(imageIndex === 0 ? images.length - 1 : imageIndex - 1);
        }else{
            setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1);
        }
    }

    return(
        <div className="slider">
            {imageIndex !== null && (
            <div className="fullSlider">
                <div className="arrow" onClick={()=>changeSlide("left")}>
                    <img src="./arrow.png" alt="" />
                </div>
                <div className="imgContainer">
                    <img src={images[imageIndex]} alt="" />
                </div>
                  <div className="arrow" onClick={()=>changeSlide("right")}>
                    <img src="./arrow.png" alt=""  className="right"/>
                </div>
                <div className="close" onClick={()=>{setImageIndex(null)}}>
                    <IoClose size={40} color="white" />
                </div>
            </div>
        )}
            <div className="bigImage">
                <img src={images[0]} alt="" onClick={()=>{setImageIndex(0)}} />
            </div>
            <div className="smallImages">
                {images.slice(1).map((image, index) => (
                    <img key={index} src={image} alt="" 
                    onClick={()=>{setImageIndex(index+1 )}}/>
                ))}
            </div>
        </div>
    )
}
export default Slider;