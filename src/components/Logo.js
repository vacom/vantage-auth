import PropTypes from "prop-types";
import styled from "styled-components";

const Logo = styled.img`
  width: ${props => props.size || `100px`};
`;

Logo.defaultProps = {
  size: "100px"
};

Logo.propTypes = {
  size: PropTypes.string
};

export default Logo;
