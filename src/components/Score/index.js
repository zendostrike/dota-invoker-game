import PropTypes from "prop-types";
import { SCScore } from "./styles";

const Score = ({ score, lastScore }) => {
  return (
    <SCScore>
      <h2>SCORE: {score}</h2>
      <span>LAST SCORE: {lastScore}</span>
    </SCScore>
  );
};

Score.propTypes = {
  score: PropTypes.number,
  lastScore: PropTypes.number
};

export default Score;