import { SCHeader, SCTitleWrapper, SCInstructionsWrapper, SCVersion } from "./styles";
import dota2Icon from "../../assets/img/dota2.svg";

const Header = () => {
  return (
    <SCHeader>
      <SCTitleWrapper>
        <img src={dota2Icon} alt="Invoker" />
        <h1>Invoker Challenge <SCVersion>v{process.env.REACT_APP_VERSION}</SCVersion></h1>
      </SCTitleWrapper>
      <SCInstructionsWrapper>
        <p><strong>Instructions</strong></p>
        <p>
          Clic on <i>[Start Game]</i> button.
          <br/> 
          Use <strong>Q, W, E</strong> to add an energy bolt and R to cast a Skill.
        </p>
      </SCInstructionsWrapper>
    </SCHeader>
  );
};

export default Header;
