import PropTypes from "prop-types";
//Styles
import styled from "styled-components";

const Text = styled.p`
  color: ${props => (props.color ? props.color : "#636c72")};
  font-weight: ${props => props.highlight && "bold"};
  ${props =>
    props.isLogo &&
    `margin-top: 4px;
    font-size: 18px;`}
`;

Text.defaultProps = {
  text: "Text",
  color: "#636c72",
  highlight: false,
  isLogo: false
};

Text.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  highlight: PropTypes.bool,
  isLogo: PropTypes.bool
};

export default Text;
