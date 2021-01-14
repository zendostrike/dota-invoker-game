import PropTypes from "prop-types";

import { SCButton } from "./styles";

const Button = ({ text, onClick }) => {
  return <SCButton onClick={onClick}>{text}</SCButton>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
