import fog from '../assets/images/icon-fog.webp'
import overcast from '../assets/images/icon-overcast.webp'
import partly from '../assets/images/icon-partly-cloudy.webp'
import rain from '../assets/images/icon-rain.webp'
import snow from '../assets/images/icon-snow.webp'
import storm from '../assets/images/icon-storm.webp'
import sunny from '../assets/images/icon-sunny.webp'
import drizzle from '../assets/images/icon-drizzle.webp'
const getWeatherIcon = (code) => {
        if (code === 0) return sunny;
        if ([1, 2].includes(code)) return partly;
        if (code === 3) return overcast;
        if ([45, 48].includes(code)) return fog;
        if ([51, 53, 55, 56, 57].includes(code)) return drizzle; 
        if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return rain; 
        if ([71, 73, 75, 77, 85, 86].includes(code)) return snow; 
        if ([95, 96, 99].includes(code)) return storm; 
};
export default getWeatherIcon