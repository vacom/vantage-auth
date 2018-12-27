import PropTypes from "prop-types";
import styled from "styled-components";
import { darken } from "polished";

const Link = styled.a`
  color: ${props => props.textColor};
  text-decoration: none;
  &:hover {
    color: ${props => darken(0.4, props.textColor)};
    cursor: pointer;
  }
`;

Link.defaultProps = {
  text: "Text Link",
  textColor: "#868e96"
};

Link.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string
};

export default Link;
