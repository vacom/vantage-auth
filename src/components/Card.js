import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${props => props.backgroundColor || `#fefefe`};
  border-radius: 4px;
  width: 850px;
  height: 550px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  @media (max-width: 767.98px) {
    height: 100%;
    width: 100%;
  }
`;

Card.defaultProps = {
  backgroundColor: "#fefefe"
};

Card.propTypes = {
  backgroundColor: PropTypes.string
};

export default Card;
