import style from './style.module.css'
import Select from 'react-select'
const Filter=()=>{
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
        color: "#fff",
    }),
    singleValue: (base) => ({
        ...base,
        color: "#fff",
    }),
    placeholder: (base) => ({
        ...base,
        color: "#ccc",
    }),
    menu: (base) => ({
        ...base,
        backgroundColor: "var(--Blue_900)",
        borderRadius: "10px",
        marginTop: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.11)",
    }),
   
    option: (base, state) => ({
        ...base,
        backgroundColor:state.isFocused? "var(--Grey_400)":state.isSelected
      ? "var(--Blue_900)" // opción seleccionada
      : "var(--Blue_900)",
        
        color: "#fff",
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

            ></Select>
        </div>
    );

}
export default Filter