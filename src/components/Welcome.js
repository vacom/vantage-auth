import PropTypes from "prop-types";
import styled from "styled-components";

const Welcome = styled.div`
  background-image: ${props => props.gradient};
  width: 425px;
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  float: left;

  @media (max-width: 767.98px) {
    width: 100%;
    height: 264px;
    border-radius: 0;
  }
`;

Welcome.defaultProps = {
  gradient:
    "linear-gradient(to right top, #041636, #1c2850, #343a6b, #4d4e87,#6862a4)",
  textColor: "#fa5252"
};

Welcome.propTypes = {
  gradient: PropTypes.string
};

export default Welcome;
