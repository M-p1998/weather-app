
import "./current-weather.css"

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">Belgrade</p>
                    <p className="weather-description">Sunny</p>

                </div>
                <div className="bottom">
                    <p className="temperature">18°C</p>
                    <div className="details">
                        <div className="parameter-row">
                            <span className="parameter-label">Details</span>
                        </div>
                        <div className="parameter-row">

                        </div>

                    </div>
                </div>

                <img alt="weather" className="weather-icon" src="icons/01d.png" />
            </div>

        </div>
    );

}

export default CurrentWeather;