import logobonus from '../../../images/logo-bonus.svg'
import './Score.css'
const Score=({score})=>{
    return(
        <main className="score-container">
            <div>
                <img className='score-logo' src={logobonus} alt="" />
            </div>
            <div className="score-box">
                <h2 className="score-title">SCORE</h2>
                <span className="score-value">{score}</span>
            </div>
        </main>
    );
}
export default Score;