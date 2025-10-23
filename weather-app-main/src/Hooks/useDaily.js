
import getWeatherIcon from './getWeatherIcon'
const useDaily=(daily)=>{
    let arrayDay=[];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    for (let i = 0; i < 7; i++) {
        const isday = new Date(daily.time[i] + "T00:00:00Z");
        const day={
            dayName: dayNames[isday.getUTCDay()],
            weather:getWeatherIcon(daily.weather_code[i]),   
            tempMax:parseInt(daily.temperature_2m_max[i]),   
            tempMin:parseInt(daily.temperature_2m_min[i]),   

        }
        arrayDay.push(day);
    }
    return arrayDay;
}
export default useDaily