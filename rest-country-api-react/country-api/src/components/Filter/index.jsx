import style from './style.module.css'
import Select from 'react-select'
const Filter=({handleChangeRegion})=>{
    const options = [
        { value: "Africa", label: "Africa" },
        { value: "Americas", label: "America" },
        { value: "Asia", label: "Asia" },
        { value: "Europe", label: "Europe" },
        { value: "Oceania", label: "Oceania" },
    ];

    const customStyles = {
    control: (base) => ({
        ...base,
        backgroundColor: "var(--Blue_900)",
        border: "none",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        padding: "4px 8px",
        color: "var(--White)",
    }),
    singleValue: (base) => ({
        ...base,
        color: "var(--White)",
    }),
    placeholder: (base) => ({
        ...base,
        color: "var(--White)",
    }),
    menu: (base) => ({
        ...base,
        backgroundColor: "var(--mode-Element)",
        borderRadius: "10px",
        marginTop: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.11)",
    }),
   
    option: (base, state) => ({
        ...base,
        backgroundColor:state.isFocused? "var(--Grey_400)":state.isSelected
      ? "var(--mode-Element)" // opción seleccionada
      : "var(--mode-Element)", // opción no seleccionada
        
        color: "var(--White)",
        cursor: "pointer",
        padding: "10px 15px",
    }),
    };
    return(
        <div className={style.container}>
            <Select 
                options={options}
                placeholder="Filter by region"
                className={style.custom }
                styles={customStyles}
                onChange={(e)=>handleChangeRegion(e.value)}
            ></Select>
        </div>
    );

}
export default Filter