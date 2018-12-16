import PropTypes from "prop-types";
//Styles
import styled from "styled-components";

const Box = styled.div`
  background-color: ${props => props.backgroundColor || `#f6f4fd`};
  border: 1px solid ${props => props.borderColor || `#e6e1f7`};
  border-radius: 4px;
  padding: 14px 24px;
  margin-top: ${props => props.marginTop || `160px`};
  margin-left: 40px;
  margin-right: 40px;
  a {
    font-weight: bold;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  p {
    margin: 0;
  }
  p,
  a {
    color: #a189d6;
  }

  @media (max-width: 767.98px) {
    margin-bottom: 60px;
  }
`;

Box.defaultProps = {
  backgroundColor: "#f6f4fd",
  borderColor: "#e6e1f7",
  marginTop: "160px"
};

Box.propTypes = {
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  marginTop: PropTypes.string
};

export default Box;
