import React, { useState } from 'react';

import { fetchWeather } from '../api/fetchWeather';

const Header = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query);

            setWeather(data);
            setQuery('');
        }
    }

    return (
        <div>
            <img className="w-100" src="https://i.ibb.co/XJLv2GC/coin-app.png" alt="..." />
            
            <input type="text"className="search form-control container my-5"placeholder="Search..."value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
            {weather.main && (
                <div className="my-3 city text-center">
                    <h2 className="city-name text-center">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp text-center">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon rounded mx-auto d-block" src={`http://openweathermap.org/img/wn/13d@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
