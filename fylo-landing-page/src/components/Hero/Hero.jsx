import style from './hero.module.css'
import imgIntro from '../../../images/illustration-intro.png'
const Hero=()=>{
    return(
        <main className={style.main} >
            <img src={imgIntro} alt="" />
            <div className={style.text}>
                <h2>All your files in one secure location accessible anywhere.</h2>
                <div>
                    <p>Fylo stores all your most importan files in one secure location. </p>
                    <p>Acces them wherever you nedd, share and collaborate with friends family, and co-works</p>
                </div>
            </div>
            <button >Get Started</button>

        </main>
    );
}
export default Hero;