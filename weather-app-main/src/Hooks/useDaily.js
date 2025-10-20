import fog from '../assets/images/icon-fog.webp'
import overcast from '../assets/images/icon-overcast.webp'
import partly from '../assets/images/icon-partly.webp'
import rain from '../assets/images/icon-rain.webp'
import snow from '../assets/images/icon-snow.webp'
import storm from '../assets/images/icon-storm.webp'
import sunny from '../assets/images/icon-sunny.webp'
const useDaily=(daily)=>{
    let arrayDay=[];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const getWeatherIcon = (code) => {
        if (code === 0) return sunny;
        if ([1, 2].includes(code)) return partly;
        if (code === 3) return overcast;
        if ([45, 48].includes(code)) return fog;
        if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return rain;
        if ([71, 73, 75, 77, 85, 86].includes(code)) return snow;
        if ([95, 96, 99].includes(code)) return storm;

        return overcast; 
    };
    for (let i = 0; i < 7; i++) {
        const isday=new Date(daily.time[i]);
        const day={
            dayName: dayNames[isday.getDay()],
            weather:getWeatherIcon(daily.weather_code[i]),   
            tempMax:daily.temperature_2m_max[i],   
            tempMin:daily.temperature_2m_min[i],   

        }
        arrayDay.push(day);
    }
    return arrayDay;
}
export default useDaily