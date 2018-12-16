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
  box: {
    backgroundColor: "#f6f4fd",
    borderColor: "#e6e1f7",
    textColor: "#a189d6"
  }
};

export default class App extends Component {
  state = {
    login: true
  };
  signInUser = values => {
    console.log("signInUser = ", values);
  };
  signUpUser = values => {
    console.log("signUpUser = ", values);
  };
  render() {
    return (
      <Auth {...config}>
        {this.state.login ? (
          <SignIn {...signInConfig} handleSubmit={this.signInUser} />
        ) : (
          <SignUp {...signUpConfig} handleSubmit={this.signUpUser} />
        )}
      </Auth>
    );
  }
}
