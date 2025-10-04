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
    { img: scissor, color: 'scissor' },
    { img: rock, color: 'rock' },
    { img: paper, color: 'paper' },
    { img: lizard, color: 'lizard' },
    { img: spock, color: 'spock' },
  ];
  const handleChoose = (color, img) => {
    onChoose({ color, url: img });
  }
  return (
    <div  className="hero">
      <img className='bg-pentagon' src={Pentagono} alt="Fondo pentágono" />
        {elementData.map(({ img, color }) => (
          <Element key={color} onClick={handleChoose} img={img} color={`element ${color}`} />
        ))}
    </div>
  );
};
export default Hero;