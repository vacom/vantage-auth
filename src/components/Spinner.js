import PropTypes from "prop-types";
import styled from "styled-components";
import { lighten } from "polished";

const Spinner = styled.div`
  border: 2px solid ${props => lighten(0.1, props.primaryColor)};
  border-top: 2px solid #f3f3f3;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  display: inline-block;
  margin-right: 4px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

Spinner.defaultProps = {
  backgroundColor: "#fefefe",
  primaryColor: "#6862A4"
};

Spinner.propTypes = {
  backgroundColor: PropTypes.string,
  primaryColor: PropTypes.string
};

export default Spinner;
