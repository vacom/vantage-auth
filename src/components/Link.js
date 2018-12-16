import PropTypes from "prop-types";
import styled from "styled-components";

const Link = styled.a`
  color: ${props => props.textColor};
  text-decoration: none;
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
