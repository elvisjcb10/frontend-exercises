import './Element.css'

const Element=({img,color,onClick})=>{
    return(
        <div className={`${color}`} onClick={()=>onClick(color,img)}>
                {img && <img src={img} className="img" alt="" />}
        </div>
    );
};
export default Element;