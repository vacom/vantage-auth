import PropTypes from "prop-types";
import styled from "styled-components";

const CardBody = styled.div`
  background: ${props => props.backgroundColor || `#FEFEFE`};
  width: 425px;
  height: 100%;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  float: left;
  overflow: auto;
  &::after {
    clear: left;
  }

  @media (max-width: 767.98px) {
    width: 100%;
    height: auto;
    border-radius: 0;
  }
`;

CardBody.defaultProps = {
  backgroundColor: "#FEFEFE"
};

CardBody.propTypes = {
  backgroundColor: PropTypes.string
};

export default CardBody;
