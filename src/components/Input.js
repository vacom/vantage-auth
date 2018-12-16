import PropTypes from "prop-types";
//Styles
import styled from "styled-components";

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid ${props => props.borderColor || `#e6ebf1`};
  box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.2);
  margin: 10px 0 10px 0;
  width: 100%;
  box-sizing: border-box;
  display: block;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  color: ${props => props.textColor || `#495057`};
  background-color: ${props => props.backgroundColor || `#fff`};
  background-clip: padding-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

Input.defaultProps = {
  type: "text",
  placeholder: "Some text",
  borderColor: "#e6ebf1",
  textColor: "#495057",
  backgroundColor: "#fff"
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string
};

export default Input;
