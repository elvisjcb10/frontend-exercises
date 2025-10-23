import {create} from "zustand"
interface Weather{
    longitud:number
    latitud:number
    temperature:string
    windSpeed:string
    precipitacion:string
    city:string,
    country:string,
    setLongitud: (value: number) => void;
    setLatitud: (value: number) => void;
    setTemperature: (value: string) => void;
    setWindSpeed: (value: string) => void;
    setPrecipitacion: (value: string) => void;
    setCity: (value: string) => void;
    setCountry: (value: string) => void;
}
export const useWeatherStore=create<Weather>((set,get)=>({
    longitud:13.419998,
    latitud:52.52,
    temperature:"celsius",
    windSpeed:"mph",
    precipitacion:"inch",
    city:"Berlin",
    country:"Germany",
    setLongitud: (value) => set({ longitud: value }),
    setLatitud: (value) => set({ latitud: value }),
    setTemperature: (value) => set({ temperature: value }),
    setWindSpeed: (value) => set({ windSpeed: value }),
    setPrecipitacion: (value) => set({ precipitacion: value }),
    setCity: (value) => set({ city: value }),
    setCountry: (value) => set({ country: value })
}))