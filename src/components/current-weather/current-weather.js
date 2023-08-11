
import "./current-weather.css"
import { useEffect,useState } from "react";
import getTimeAndDate from "./TimeApi";

const CurrentWeather = ({data}) => {

//     const [currentDateTime, setCurrentDateTime] = useState(null);

//   useEffect(() => {
//     async function fetchTimeAndDate() {
//       const cityTime = await getTimeAndDate(data.city);
//       setCurrentDateTime(cityTime);
//     }

//     fetchTimeAndDate();
//   }, [data.city]);



    return (
        <div className="weather">
            <div className="top">
                <div>
                {/* <p>City Time: {currentDateTime?.toLocaleString()}</p> */}
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>

                </div>
                <div className="bottom">
                    <p className="temperature">{Math.round(data.main.temp)}°C</p>
                    <div className="details">
                        <div className="parameter-row">
                            <span className="parameter-label">Details</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Feels like</span>
                            <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>

                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Wind</span>
                            <span className="parameter-value">{data.wind.speed} m/s</span>

                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Humidity</span>
                            <span className="parameter-value">{data.main.humidity}%</span>

                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Pressure</span>
                            <span className="parameter-value">{data.main.pressure} hPa</span>

                        </div>

                    </div>
                </div>

                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
            </div>

        </div>
    );

}

export default CurrentWeather;