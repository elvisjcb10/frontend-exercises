import Pentagono from '../../../images/bg-pentagon.svg'
import Element from '../Element/Element';
import scissor from '../../../images/icon-scissors.svg'
import rock from '../../../images/icon-rock.svg'
import paper from '../../../images/icon-paper.svg'
import lizard from '../../../images/icon-lizard.svg'
import spock from '../../../images/icon-spock.svg'
import './Hero.css'
import { Link } from 'react-router-dom';
const Hero = ({ onChoose }) => {
  const elementData = [
    { img: scissor, tipo: 'scissor' },
    { img: rock, tipo: 'rock' },
    { img: paper, tipo: 'paper' },
    { img: lizard, tipo: 'lizard' },
    { img: spock, tipo: 'spock' },
  ];
  const handleChoose = (tipo, img) => {
    onChoose({ tipo, url: img });
  }
  return (
    <div  className="hero">
      <img className='bg-pentagon' src={Pentagono} alt="Fondo pentágono" />
        {elementData.map(({ img, tipo }) => (
          <Element key={tipo} onClick={() => handleChoose(tipo, img)} img={img} color={`element ${tipo}`} />
        ))}
    </div>
  );
};
export default Hero;