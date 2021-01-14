import PropTypes from "prop-types";

import EnergySlot from "../EnergySlot";
import { SCSkills } from "./styles";

const Skills = ({ quasBg, wexBg, exportBg }) => {
  return (
    <SCSkills>
      <EnergySlot backgroundImage={quasBg} />
      <EnergySlot backgroundImage={wexBg} />
      <EnergySlot backgroundImage={exportBg} />
    </SCSkills>
  );
};

Skills.propTypes = {
  quasBg: PropTypes.string,
  wexBg: PropTypes.string,
  exportBg: PropTypes.string,
};

export default Skills;