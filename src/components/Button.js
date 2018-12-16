import PropTypes from "prop-types";
//Styles
import styled from "styled-components";
import { lighten, darken } from "polished";

const Button = styled.button`
  background: ${props => props.primaryColor || `#6862A4`};
  color: ${props => props.textColor || `white`};
  box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.2);
  border: 0;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  line-height: 1.5;

  cursor: pointer;
  &:hover {
    background: ${props => lighten(0.1, props.primaryColor)} !important;
  }
  &:active,
  &:visited {
    background: ${props => darken(0.1, props.primaryColor)} !important;
  }
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px ${props => darken(0.1, props.primaryColor)};
  }
  float: right;
  &::after {
    clear: right;
  }
`;

Button.defaultProps = {
  type: "button",
  children: "text",
  primaryColor: "#6862A4",
  textColor: "white"
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  textColor: PropTypes.string,
  primaryColor: PropTypes.string
};

export default Button;
