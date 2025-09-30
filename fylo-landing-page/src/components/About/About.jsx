import img from "../../../images/illustration-stay-productive.png"
import arrow from "../../../images/icon-arrow.svg"
import quotes from "../../../images/bg-quotes.png"
import Coments from "./Coments/Coments"
import style from "./about.module.css"
const About=()=>{
    const listComent=[
        {
            name:"Satish Patel",
            status:"Founder & CEO, Huddle",
            imgPerfil:"../../images/profile-1.jpg",
            comment:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        },
        {
            name:"Bruce McKenzie",
            status:"Founder & CEO, Huddle",
            imgPerfil:"../../images/profile-2.jpg",
            comment:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        },
        {
            name:"Iva Boyd",
            status:"Founder & CEO, Huddle",
            imgPerfil:"../../images/profile-3.jpg",
            comment:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        },
    ]
    return(
        <section className={style.container}>
            <div className={style.main}>
                <img src={img} alt="" />
                <div className={style.text}>
                    <h2 className={style.title}>Stay productive, wherever you are</h2>
                    <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                    <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                    <a className={style.link} href="">See how Fylo works <img src={arrow} alt="" /></a>
                </div>
            </div>
            <div className={style.containerComentarios}>
                <div className={style.containerComents} >
                    {listComent.map((e)=>(
                        <Coments
                        name={e.name}
                        coment={e.comment}
                        imgPerfil={e.imgPerfil}
                        status={e.status}
                        />
                    ))}
                </div>
                <img src={quotes} alt=""  className={style.quotes}/>
            </div>
        </section>
    );
}
export default About
