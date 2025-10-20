import {create} from "zustand"
interface Weather{
    longitud:number
    latitud:number
    temperature:string
    windSpeed:string
    precipitacion:string
    setLongitud: (value: number) => void;
    setLatitud: (value: number) => void;
    setTemperature: (value: string) => void;
    setWindSpeed: (value: string) => void;
    setPrecipitacion: (value: string) => void;
}
export const useWeatherStore=create<Weather>((set,get)=>({
    longitud:0,
    latitud:0,
    temperature:"celsius",
    windSpeed:"mph",
    precipitacion:"inch",
    setLongitud: (value) => set({ longitud: value }),
    setLatitud: (value) => set({ latitud: value }),
    setTemperature: (value) => set({ temperature: value }),
    setWindSpeed: (value) => set({ windSpeed: value }),
    setPrecipitacion: (value) => set({ precipitacion: value })
}))