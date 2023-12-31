import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import "./forecast.css";


const WEEK_DAYS = ['Monday', "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const Forecast = ({ data }) => {

    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    console.log(forecastDays);
    return (
        <>
            <label className="title">Daily</label>

            <Accordion allowZeroExpanded >
                <div className="daily-container">
                    {data.list.slice(0, 7).map((item, idx) => (
                        <AccordionItem key={idx}>

                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className="wrap">

                                        <div className="daily-item">

                                            <img src={`icons/${item.weather[0].icon}.png`} alt="weather" className="icon-small" />
                                            <label className="day">{forecastDays[idx]}</label>
                                            <label className="description">{item.weather[0].description}</label>
                                            <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                        </div>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel></AccordionItemPanel>

                        </AccordionItem>

                    ))}
                    <AccordionItem></AccordionItem>
                </div>
            </Accordion>

        </>
    )

}
export default Forecast;