import style from './style.module.css'
import logo from '../../../images/logo.svg'
import locationIcon from "../../../images/icon-location.svg"
import iconPhone from "../../../images/icon-phone.svg"
import iconEmail from "../../../images/icon-email.svg"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {useForm} from 'react-hook-form'
const Footer =()=>{
    const {register,formState: { errors },handleSubmit}=useForm();
    const onSubmir=handleSubmit((data)=>{
        console.log(data);
    })
    return(
        <footer  className={style.footer}>
            <div className={style.getAccess}>
                <h2>Get early access today</h2>
                <p className={style.phrase}>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                <div className={style.killme}>
                    <form onSubmit={onSubmir} className={style.form} noValidate> 

                        <input className={style.inputAccess} type="email" placeholder='email@example.com' 
                            {...register("email",{
                                required:{
                                    value:true,
                                    message:"required",
                                },
                                pattern:{
                                    value:/^\S+@\S+$/i,
                                    message:"Please enter a valid email address"
                                }
                            })}
                        />
                        <button className={style.buttonAccess}>Get Started For Free</button>
                    </form>
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
            </div>
            <div className={style.footerinfo}>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className={style.textInfo}>
                    <div className={`${style.footerText} ${style.p}`} > 
                        <div>
                             <img src={locationIcon} alt="" />
                        </div>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className={style.footerText}>
                        <p className={style.media}> <img src={iconPhone} alt="" />+1-543-123-4567</p>
                        <p className={style.media}><img src={iconEmail} alt="" /> example@fylo.com</p>
                    </div>
                    <div className={style.footerText}>
                        <a href="">About Us</a>
                        <a href="">Jobs</a>
                        <a href="">Press</a>
                        <a href="">Blog</a>
                    </div>
                    <div className={style.footerText}>
                        <a href="">Contact Us</a>
                        <a href="">Terms</a>
                        <a href="">Privacy</a>
                    </div>
                    <div className={style.socialMedia}>
                        <FaFacebook/>
                        <FaTwitter/>
                        <FaInstagram/>

                    </div>
                </div>
            </div>
    
        </footer>
    );
}
export default Footer
/*

  About Us
  Jobs
  Press
  Blog

  Contact Us
  Terms
  Privacy */