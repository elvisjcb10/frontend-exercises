import Score from "../../components/Score/Score";
import './Home.css'
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Game from "../Game/Game";
import Hero from "../../components/Hero/Hero";
import rules from "../../../images/image-rules-bonus.svg"
import close from "../../../images/icon-close.svg"
import { useRef } from "react";
import { IoClose } from "react-icons/io5";

const Home = () => {
  const [score, setScore] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  
  const dialogRef = useRef(null);

  const handleShowDialog = () => {
    dialogRef.current?.showModal(); // abre el diálogo
  };
  const handleCloseDialog = () => {
    dialogRef.current?.close(); // abre el diálogo
  };
  return (
    <div className="score-wrapper">
      <div className="score-header">
        <Score score={score} />

      </div>
      <div className="home">
        {userChoice === null ? <Hero onChoose={setUserChoice}></Hero> : <Game userChoice={userChoice} setScore={setScore} setUserChoice={setUserChoice}></Game>}
      </div>
      <dialog  ref={dialogRef}  className="modal">
         <div className="modal-container">
            <h2 className="modal-rule-text">RULES</h2>
            <IoClose className="modal-close" onClick={handleCloseDialog}></IoClose>
            <img className="modal-img" src={rules} alt="" />
         </div>
      </dialog>
      <button onClick={handleShowDialog} className="rules-button">RULES </button>
    </div>
  );
};
export default Home;