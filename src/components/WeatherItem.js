import React from "react";
import { Link } from "react-router-dom";

const WeatherItem = (props) => {

    return(
        <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="http://openweathermap.org/img/wn/11n@2x.png" alt={props.weather.name} />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{props.weather.name}</h5>
                                    {props.weather.clouds.today}
                                    {props.weather.id}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <Link className="btn btn-outline-dark mt-auto" to="/Details">View Details</Link>
                                    </div>
                            </div>
                        </div>
                    </div>
    );
}

export default  WeatherItem;