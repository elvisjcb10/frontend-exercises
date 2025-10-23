import getWeatherIcon from './getWeatherIcon'

const useHourly=(hourly)=>{
    let hourlyMap=new Map();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for (let i = 0; i < 168; i++) {
        const date=new Date(hourly .time[i]);
        const hour = date.toLocaleTimeString("en-US", {
            hour: "numeric",
            hour12: true
        });
        const hourObject={
            weather:getWeatherIcon(hourly.weather_code[i]),   
            temp:parseInt(hourly.temperature_2m[i]) +"°",   
            hour:hour,   

        }
        if (!hourlyMap.has(dayNames[date.getDay()])) {
            hourlyMap.set(dayNames[date.getDay()],[hourObject]);
        } 
        else {
            hourlyMap.get(dayNames[date.getDay()]).push(hourObject);
        }    
    }    
    return hourlyMap;
}
export default useHourly