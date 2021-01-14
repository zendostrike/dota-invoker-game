import invokerImage from "../../assets/img/persiangaming.png";
import { SCFooter } from "./styles";

const Footer = () => {
  return (
    <SCFooter>
      <img src={invokerImage} alt="invoker"  height={100} />
      <p>
        <a
          href="https://www.linkedin.com/in/gian-ramirez/"
          target="_blank"
          rel="noreferrer"
        >
          @zendostrike
        </a>
      </p>
    </SCFooter>
  );
};

export default Footer;
