import Feature from "./Feature/Feature";
import style from "./features.module.css"
const Features=()=>{
    const listFeatures=[
        {
            title:"Acces your file, anywhere",
            phrase:"the ability to use a smarphone, tablet or computer to acces your account means your files follow you everywhere",
            img:"../../../images/icon-access-anywhere.svg"
        },
        {
            title:"Segurity you can trust",
            phrase:"2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
            img:"../../../images/icon-security.svg"
        },
        {
            title:"Real-time collaboration",
            phrase:"Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
            img:"../../../images/icon-collaboration.svg"
        },
        {
            title:"Store any type  of file",
            phrase:"  Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
            img:"../../../images/icon-any-file.svg"
        }
    ]

    return(
        <section className={style.container}>
            <div className={style.containerFeatures}>
                {
                    listFeatures.map((e)=>(
                        
                        <Feature
                            img={e.img}
                            title={e.title}
                            phrase={e.phrase}
                        />
                    ))
                }
            </div>
        </section>
    );
}
export default Features