import PropTypes from "prop-types";

import { SCEnergySlot } from "./styles";

const EnergySlot = ({ backgroundImage }) => {
  return (
      <SCEnergySlot backgroundImage={backgroundImage} />
  );
};

EnergySlot.propTypes = {
  backgroundImage: PropTypes.string
};

export default EnergySlot;
