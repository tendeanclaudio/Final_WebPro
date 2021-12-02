import React, { useState, useEffect } from "react";
import WeatherItem from "./WeatherItem";


const Weather = () => {
    const [weathers, setWeather] = useState([]);

    useEffect(() => {
        fetch ('https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=9f0c20ba31804844d4d6160a4b8f21e8')
        .then(response => response.json())
        .then(data => setWeather(data.list));
       
    }, []);

    return(
        //className="py-5"
        <section >
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-3">

                { weathers.map(weather => <WeatherItem key={weather.cnt} weather={weather}  />) }

                </div>
            </div>
        </section>
    );
}

export default Weather;