

import axios from "axios";


// const TIMEZONE_API_KEY = "YOUR_TIMEZONE_DB_API_KEY";

export const API_KEY  = "dc1936d8a6d37dc9983f8edc30bbd09c";

const TimeAPi = () => {
async function getTimeAndDate(cityName) {
  try {
    const response = await axios.get(
      `http://api.timezonedb.com/v2.1/get-time-zone?key=${API_KEY}&format=json&by=zone&zone=Europe/${cityName}`
    );
    
    const timestamp = response.data.timestamp;
    const date = new Date(timestamp * 1000);
    return date;
  } catch (error) {
    console.error("Error fetching time and date:", error);
    return null;
  }
}
}

export default TimeAPi;



