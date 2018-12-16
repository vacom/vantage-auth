import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  margin: 80px 40px 0px 40px;
  input {
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 35px;
  }
  ${props => props.center && `text-align: center;`}

  @media (max-width: 768px) {
    margin: 38px 40px 0px 40px;
  }
`;

Container.defaultProps = {
  center: false
};

Container.propTypes = {
  center: PropTypes.bool
};

export default Container;
