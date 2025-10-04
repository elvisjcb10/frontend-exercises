import "./Result.css";
const Result = ({ result, handlePlayAgain }) => {
    return (
        <>
            <h2 className="result">{result}</h2>
            <button className="play-again" onClick={handlePlayAgain}>PLAY AGAIN</button>
        </>
    );
}
export default Result;
