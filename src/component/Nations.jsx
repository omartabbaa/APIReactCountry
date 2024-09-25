import worldMap from '../assets/world_map.png';
import { useState } from 'react';
import axios from 'axios';

const Nations = () => {
    const [getCountries, setGetCountries] = useState([]); 

    const handleFunction = async () => {
      try {
        // Single API call to get name, flags, and population
        const result = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags,population');
        console.log(result.data);
        setGetCountries(result.data); 
      } catch (e) {
        console.error(e);
      }
    };

    return (
<div className='Nations'>
<div onClick={handleFunction}>
        <img src={worldMap} alt="World Map" />
        <h1>World Regions</h1>
        <div>
          <ul className='sectionCountries'>
            {getCountries.length > 0 ? (
              getCountries.map((country, index) => (
                <div  key={index}>
                 <div className='countrieContainer' >
                  <img src={country.flags.svg} alt={`${country.name.common} flag`} width="80" />
                 <div className='fontCountry'> {country.name.common} </div> 
                 </div>
                 <div >
                 Has a population of {country.population.toLocaleString()} people 
                  
                  
                 </div>
               
                </div>
              ))
            ) : (
              <p>No countries loaded yet, click the map to load countries.</p>
            )}
          </ul>
        </div>
      </div>

</div>
    )
} 
export default Nations