import React from 'react';
import humidity from '../static/images/humidity.png'
import air_pressure from '../static/images/air_pressure.png'
import wind_speed from '../static/images/wind_speed.png'
import axios from 'axios';


function handleRemoveClick(myLocation) {
        axios.post("http://localhost:8000/api/remove_city/", {location: myLocation})
        var child = document.getElementById(myLocation)
        child.parentElement.removeChild(child);
    }


const Cities = props => {
        return (
            <div className="myWrapper" id={props.city.name}>

                <div className="row">
                    <div className="col-lg-3 col-sm-2"></div>

                    <div className="col-lg-6 col-sm-8 weather-box">
                        <form className="form-signin">
                            <h1 className="h3 mb-3 font-weight-normal"
                                style={{textAlign: 'center', color: 'black'}}>{props.city.name}</h1><br></br>

                            <p className="weather-temp">{props.city.weather_type}</p><br></br>

                            <img style={{maxHeight: '170px', maxWidth: '170px'}} className="mb-4 bd-placeholder-img"
                                 src={"https://www.metaweather.com/static/img/weather/" + props.city.image + ".svg"}></img>
                            <br></br>

                            <p className="weather-temp" style={{fontSize: '60px'}}><b>{props.city.temperature} C</b></p>
                            <br></br>
                            <div className="Row">
                                <div className="Column">
                                    <p className="inner-weather-text">Humidity</p>
                                    <img className="mb-4 bd-placeholder-img" src={humidity}
                                         style={{maxWidth: '40px', maxHeight: '40px', fontSize: '2px'}}></img><br></br>
                                    <p className="inner-weather-text">{props.city.humidity} %</p>
                                </div>

                                <div className="Column">
                                    <p className="inner-weather-text">Air Pressure</p>
                                    <img className="mb-4 bd-placeholder-img" src={air_pressure}
                                         style={{maxWidth: '40px', maxHeight: '40px', fontSize: '2px'}}></img><br></br>
                                    <p className="inner-weather-text">{props.city.air_pressure}</p>
                                </div>

                                <div className="Column">
                                    <p className="inner-weather-text">Wind Speed</p>
                                    <img className="mb-4 bd-placeholder-img" src={wind_speed}
                                         style={{maxWidth: '40px', maxHeight: '40px',}}></img><br></br>
                                    <p className="inner-weather-text">{props.city.wind_speed} km/h</p>
                                </div>

                            </div>
                            <br></br>
                            <div className="btn btn-lg btn-primary btn-block" onClick={() => {
                                handleRemoveClick(props.city.name)
                            }}>Remove
                            </div>
                        </form>
                    </div>

                    <div className="col-lg-3 col-sm-2"></div>
                </div>

                <div className="row" style={{height: '30px'}}></div>

            </div>


        )
    }


export default Cities;



