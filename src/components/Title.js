import PropTypes from "prop-types";
//Styles
import styled from "styled-components";

const Title = styled.h2`
  color: ${props => (props.color ? props.color : "#212529")};
  font-weight: ${props => props.highlight && "bold"};
  ${props =>
    props.isLogo &&
    `
    margin-top: 23px;
    font-size: 28px;
    margin-bottom: 0px;`}
`;

Title.defaultProps = {
  text: "Text",
  color: "#212529",
  highlight: false,
  isLogo: false
};

Title.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  highlight: PropTypes.bool,
  isLogo: PropTypes.bool
};

export default Title;
