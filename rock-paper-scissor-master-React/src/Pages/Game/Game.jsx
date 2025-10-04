import Element from "../../components/Element/Element";
import scissor from '../../../images/icon-scissors.svg'
import rock from '../../../images/icon-rock.svg'
import paper from '../../../images/icon-paper.svg'
import lizard from '../../../images/icon-lizard.svg'
import spock from '../../../images/icon-spock.svg'
import { useParams } from "react-router-dom";
import './Game.css'
import { useEffect,useState } from "react";
import Result from "../../components/Result/Result";
const Game = ({ userChoice,setUserChoice,setScore }) => {
  const [computerElement,setComputerElement] = useState(null);
  const [winner,setWinner] = useState(null);
  const elementData = [
      { img: scissor, tipo: 'scissor' },
      { img: rock, tipo: 'rock' },
      { img: paper, tipo: 'paper' },
      { img: lizard, tipo: 'lizard' },
      { img: spock, tipo: 'spock' },
    ];
  const determineWinner = (user, computer) => {
    console.log("user",user);
    console.log("computer",computer);
    if (user.tipo === computer.tipo) {
      return "tie"; 
    }
    const winningCombinations = {
      rock: ['scissor', 'lizard'],
      paper: ['rock', 'spock'],
      scissor: ['paper', 'lizard'],
      lizard: ['spock', 'paper'],
      spock: ['scissor', 'rock'],
    };
    return winningCombinations[user.tipo].includes(computer.tipo)?"user":"computer";
  };
  const random=elementData[Math.floor(Math.random() * elementData.length)]
  useEffect(() => {
    setTimeout(() => {
      const result=determineWinner(userChoice, random);
      setComputerElement(random);
      setWinner(result);
      if(result==="user"){
        console.log("gano el usuario");
        setScore(prevScore => prevScore + 1);
      }
    }, 2000);
    
  }, []);
  
  const handlePlayAgain = () => {
    setUserChoice(null);
  }
  return (
    <div className="game">
        <div className={`game-user`}>
            <Element img={userChoice.url} color={`choose choose-${userChoice.tipo} ${winner==="user" ? "winner" : ""}`} />
            <p className="game-use-text">YOU PICKED</p>
        </div>
        <div className={`game-computer`}>
            {computerElement?<Element img={computerElement.img} color={`choose reveal choose-${computerElement.tipo} ${winner==="computer" ? "winner" : ""}`} />:<Element img={""} color={"empty"} />}
            <p className="game-computer-text">THE HOUSE PICKED</p>
        </div>
        {computerElement && (
            <div className="game-result">
                <Result 
                    result={winner === "tie" ? "IT'S A TIE" : winner === "user" ? "YOU WIN" : "YOU LOSE"} 
                    handlePlayAgain={handlePlayAgain} 
                />            
            </div>
        )}
    </div>
  );
}
export default Game;