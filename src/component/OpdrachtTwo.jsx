import Planed from '../assets/planed.png';
import { useState } from 'react';
import axios from 'axios';

const OpdrachtTwo = () => {
  const [searchCountry, setSearchCountry] = useState(''); 
  const [getCountry, setGetCountry] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.get(
        `https://restcountries.com/v3.1/name/${searchCountry}?fields=name,flags,population,subregion,capital,borders,tld`
      );
      console.log(result.data);
      setGetCountry(result.data[0]); 
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='container'>
      <h1>Search Country Information</h1>
      <img src={Planed} alt="Plane" />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchCountry}
          placeholder="Bijvoorbeeld Nederland of Peru"
          onChange={(e) => setSearchCountry(e.target.value)}
          className='inputText'
        />
        <button className='inputTextButton' type="submit">Submit</button>
      </form>

      {getCountry && (
        <div className='ContainerOpdrachtTwo'>
   
         
          <div className='title' >
            <img
              src={getCountry.flags.svg}
              alt={`${getCountry.name.common} flag`}
              width="100"
            />
            <h1> 
            {getCountry.name.common}
            </h1>
           
            </div>
         
          <p>
            {getCountry.name.common} is situated in {getCountry.subregion || 'N/A'} and the capital is{' '}
            {getCountry.capital ? getCountry.capital[0] : 'N/A'}.
          </p>
          <p>
            It has a population of {(getCountry.population / 1_000_000).toFixed(2)} million people and
            it borders with {getCountry.borders ? getCountry.borders.length : 0} neighboring countries.
          </p>
          <p>
            Websites can be found on {getCountry.tld ? getCountry.tld.join(', ') : 'N/A'} domains.
          </p>
        </div>
      )}
    </div>
  );
};

export default OpdrachtTwo;
