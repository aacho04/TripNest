import './filter.scss';
import {useState} from 'react';

function Filter() {
    const [type,setType]=useState("any");
    const handleDropdownChange=(event)=>{
        setType(event.target.value);
    }

    const[property,setProperty]=useState("any");
    const handlePropertyChange=(event)=>{
        setProperty(event.target.value);
    }
    return (
        <div className="filter">
            <div className="top">
                <h1>Search Results for London</h1>
                <label htmlFor="city">Location</label>
                <input type="text" id="city" name="city" placeholder ="City Location"/>
            </div>

            <div className="bottom">

                <div className="item">
                        <label htmlFor="type">Type</label>
                        <select id="type" name="type" value={type} onChange={handleDropdownChange}>
                            <option value="any">Any</option>
                            <option value="buy">Buy</option>
                            <option value="rent">Rent</option>
                        </select>
                </div>

                <div className="item">
                        <label htmlFor="property">Property</label>
                        <select id="property" name="property" value={property} onChange={handlePropertyChange}>
                            <option value="any">Any</option>
                            <option value="house">House</option>
                            <option value="apartment">Apartment</option>
                            <option value="condo">Condo</option>
                            <option value="land">Land</option>
                        </select>
                        
                </div>

                <div className="item">
                        <label htmlFor="minPrice">Mini Price</label>
                        <input type="number" id="minPrice" name="minPrice" placeholder="Any"/>
                </div>

                <div className="item">
                        <label htmlFor="maxPrice">Max Price</label>
                        <input type="number" id="maxPrice" name="maxPrice" placeholder="Any"/>
                </div>
                <div className="item">
                        <label htmlFor="bedroom">Bedroom</label>
                        <input type="text" id="bedroom" name="bedroom" placeholder="Any"/>
                </div>
                <button>
                    <img src="/search.png" alt="search"/>
                </button>

            </div>
        </div>
            
     
    )
}
export default Filter;