import PropTypes from "prop-types";
import { SCMeter, SCProgressBar } from "./styles";

const ProgressBar = ({ width }) => {
    return (
        <SCProgressBar>
            {width > 0 && (
                <SCMeter>
                    <span style={{ width: `${width}%`}}></span>
                </SCMeter>
            )}
        </SCProgressBar>
    );
};

ProgressBar.propTypes = {
    width: PropTypes.number.isRequired
};

export default ProgressBar;