import React, { Component } from "react";

import Auth, { SignIn, SignUp } from "vantage-auth";

const config = {
  imgSrc: "http://i68.tinypic.com/2po1mcg.jpg",
  title: "Formette",
  titleColor: "#EFECF8",
  description: "Forms as a Service",
  descriptionColor: "#BBAAE1",
  backgroundColor: "#E7EBF0",
  gradient:
    "linear-gradient(to right top, #041636, #1c2850, #343a6b, #4d4e87,#6862a4)"
};

const signInConfig = {
  title: "Sign In",
  description: "Welcome back, come fast! Your forms are waiting.",
  submitText: "Sign in",
  boxText: "Do not have an account yet?",
  boxAction: "Sign Up",
  boxUrl: "/signup",
  primaryColor: "#6862A4",
  box: {
    backgroundColor: "#f6f4fd",
    borderColor: "#e6e1f7",
    textColor: "#a189d6"
  },
  validationMgs: {
    email: {
      invalid: "Invalid email!",
      required: "Email is Required"
    },
    password: {
      min: "Password is Too Short!",
      max: "Password is Too Long!",
      required: "Password is Required"
    }
  }
};

const signUpConfig = {
  title: "Sign Up",
  description: "New life for static forms, no need for code or servers.",
  submitText: "Sign up",
  boxText: "Already have an account?",
  boxAction: "Sign In",
  boxUrl: "/signup",
  primaryColor: "#6862A4",
  privacyUrl: "http://www.privacy.com",
  box: {
    backgroundColor: "#f6f4fd",
    borderColor: "#e6e1f7",
    textColor: "#a189d6"
  },
  validationMgs: {
    username: {
      lowercase: "username must be a lowercase string",
      min: "The username is too Short!",
      max: "The username is too Long!",
      required: "Please the username is Required"
    },
    email: {
      invalid: "Invalid email",
      required: "Please enter the Required"
    },
    password: {
      min: "Too Short! Password",
      max: "Too Long!",
      required: "Password Required"
    },
    approvePrivacy: {
      required: "approvePrivacy Required"
    }
  }
};

export default class App extends Component {
  state = {
    login: false,
    error: false,
    isSubmiting: false
  };
  _customError = () => {
    this.setState({ error: true });
    setTimeout(() => {
      this.setState({ error: false });
    }, 2000);
  };
  signUser = values => {
    console.log("signInUser = ", values);
    this.setState({ isSubmiting: true });
    setTimeout(() => {
      this.setState({ isSubmiting: false });
    }, 3000);
  };
  render() {
    return (
      <Auth {...config}>
        {this.state.login ? (
          <SignIn
            {...signInConfig}
            handleSubmit={this.signUser}
            customError={this.state.error}
            customErrorMsg="Erro new error"
            isSubmiting={this.state.isSubmiting}
          />
        ) : (
          <SignUp
            {...signUpConfig}
            handleSubmit={this.signUser}
            isSubmiting={this.state.isSubmiting}
          />
        )}
      </Auth>
    );
  }
}
