import PropTypes from "prop-types";

import { SCTargetSkill } from "./styles";

const TargetSkill = ({ skillName }) => {
  return (
    <SCTargetSkill>
      <h2>Cast {skillName}</h2>
    </SCTargetSkill>
  );
};

TargetSkill.propTypes = {
  skillName: PropTypes.string.isRequired
};

export default TargetSkill;
