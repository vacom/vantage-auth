import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";
//Components
import Card from "./components/Card";
//Containers
import Details from "./Details";
import { default as SignIn } from "./SignIn";
import { default as SignUp } from "./SignUp";
import { default as ForgotPassword } from "./ForgotPassword";
import { default as CodeVerification } from "./CodeVerification";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.backgroundColor || `#E7EBF0`} !important;
    width: 100%;
    height: 100vh;
   }
`;

export default class Auth extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    backgroundColor: PropTypes.string
  };
  render() {
    return (
      <Fragment>
        <Card>
          <Details {...this.props} />
          {this.props.children}
        </Card>
        <GlobalStyle backgroundColor={this.props.backgroundColor} />
      </Fragment>
    );
  }
}

export { SignIn, SignUp, ForgotPassword, CodeVerification };
