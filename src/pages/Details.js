import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";


const Details = () => {
    return(
        <>
            <Navigation />
                <img className="cointainer my-5 p-3" src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"  alt="1" />
                    <div className="container my-3 p-3">
                        <br />
                        <p><b>OpenWeatherMap is an online service, owned by OpenWeather Ltd, that provides global weather data via API, including current weather data, forecasts, nowcasts and historical weather data for any geographical location. The company provides a minute-by-minute hyperlocal precipitation forecast for any location.</b></p>
                    </div>
            <Footer />
        </>
    );
}

export default Details;