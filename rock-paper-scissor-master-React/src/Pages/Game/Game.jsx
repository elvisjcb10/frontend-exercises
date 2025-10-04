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
const Game = ({ userChoice,setUserChoice }) => {
  const [computerElement,setComputerElement] = useState(null);
  const [winner,setWinner] = useState(null);
  const elementData = [
      { img: scissor, color: 'scissor' },
      { img: rock, color: 'rock' },
      { img: paper, color: 'paper' },
      { img: lizard, color: 'lizard' },
      { img: spock, color: 'spock' },
    ];
  const determineWinner = (user, computer) => {
    if (user.color === computer.color) {
      return "tie"; // It's a tie
    }
    const winningCombinations = {
      rock: ['scissor', 'lizard'],
      paper: ['rock', 'spock'],
      scissor: ['paper', 'lizard'],
      lizard: ['spock', 'paper'],
      spock: ['scissor', 'rock'],
    };
    return winningCombinations[user.color].includes(computer.color)?"user":"computer";
  };
  const random=elementData[Math.floor(Math.random() * elementData.length)]
  useEffect(() => {
    setTimeout(() => {
      setComputerElement(random);
      setWinner(determineWinner(userChoice, random));
    }, 2000);
    console.log(random);
    
  }, []);
  
  const handlePlayAgain = () => {
    setUserChoice(null);
  }
  return (
    <div className="game">
        <div className="game-user">
            <Element img={userChoice.url} color={`choose choose-${userChoice.color} ${winner==="user" ? "winner" : ""}`} />
            <p>YOU PICKED</p>
        </div>
        <div className="game-computer">
            {computerElement?<Element img={computerElement.img} color={`choose choose-${computerElement.color}  ${winner==="computer" ? "winner" : ""}`} />:<Element img={""} color={"empty"} />}
            <p>THE HOUSE PICKED</p>
        </div>
        <div className="game-result">
            {computerElement && (
              <Result 
                  result={winner === "tie" ? "IT'S A TIE" : winner === "user" ? "YOU WIN" : "YOU LOSE"} 
                  handlePlayAgain={handlePlayAgain} 
                />            
            )}
        </div>
    </div>
  );
}
export default Game;