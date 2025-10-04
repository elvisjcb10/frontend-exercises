import Score from "../../components/Score/Score";
import './Home.css'
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Game from "../Game/Game";
import Hero from "../../components/Hero/Hero";
const Home = () => {
  const [score, setScore] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  return (
    <div className="score-wrapper">
      <Score />
      {userChoice === null ? <Hero onChoose={setUserChoice}></Hero> : <Game userChoice={userChoice} setUserChoice={setUserChoice}></Game>}
    </div>
  );
};
export default Home;