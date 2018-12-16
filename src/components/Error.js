import PropTypes from "prop-types";
//Styles
import styled from "styled-components";

const Error = styled.p`
  margin-bottom: 14px !important;
  margin-top: 0 !important;
  color: ${props => props.textColor || `#fa5252`};
`;

Error.defaultProps = {
  text: "Text error",
  textColor: "#fa5252"
};

Error.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string
};

export default Error;
