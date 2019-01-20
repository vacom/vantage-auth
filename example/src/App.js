import React, { Component, Fragment } from "react";

import Auth, {
  SignIn,
  SignUp,
  ForgotPassword,
  CodeVerification
} from "vantage-auth";

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
  forgotPasswordText: "Forgot password?",
  forgotPasswordUrl: "#",
  enableForgotPassword: true,
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
  },
  placeholders: {
    email: "Email",
    password: "Password"
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
  privacyText: "Accept the Terms and Privacy Policy",
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
  },
  placeholders: {
    username: "Username",
    email: "Email",
    password: "Password"
  }
};

const forgotPassConfig = {
  title: "Did you forgot your password?",
  description:
    "Enter your email address you´re using for your account below and we will send you a password reset link",
  submitText: "Request reset link",
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
    }
  },
  placeholders: {
    email: "Email"
  },
  customError: false,
  customErrorMsg: "Error description"
};

const codeVerificationConfig = {
  title: "Please confirm your email",
  description:
    "We like real people, we need to know if it's not a ghost of the internet.",
  submitText: "Confirm Account",
  boxText: "Resend confirmation code?",
  boxAction: "submit",
  primaryColor: "#6862A4",
  box: {
    backgroundColor: "#f6f4fd",
    borderColor: "#e6e1f7",
    textColor: "#a189d6"
  },
  validationMgs: {
    code: {
      required: "The verification code required"
    }
  },
  placeholders: {
    code: "Confirmation Code"
  },
  customError: false,
  customErrorMsg: "Error description"
};

export default class App extends Component {
  state = {
    login: 1,
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
      <Fragment>
        <ul>
          <li>Demos:</li>
          <li>
            <a onClick={() => this.setState({ login: 1 })}>Sign In</a>
          </li>
          <li>
            <a onClick={() => this.setState({ login: 2 })}>Sign Up</a>
          </li>
          <li>
            <a onClick={() => this.setState({ login: 3 })}>Verification Code</a>
          </li>
          <li>
            <a onClick={() => this.setState({ login: 4 })}>Forgo Password</a>
          </li>
        </ul>
        <Auth {...config}>
          {this.state.login === 1 ? (
            <SignIn
              {...signInConfig}
              handleSubmit={this.signUser}
              customError={this.state.error}
              customErrorMsg="Erro new error"
              isSubmiting={this.state.isSubmiting}
            />
          ) : this.state.login === 2 ? (
            <SignUp
              {...signUpConfig}
              handleSubmit={this.signUser}
              isSubmiting={this.state.isSubmiting}
            />
          ) : this.state.login === 3 ? (
            <CodeVerification
              {...codeVerificationConfig}
              handleBoxAction={() => console.log("resend code.")}
              handleSubmit={this.signUser}
              isSubmiting={this.state.isSubmiting}
            />
          ) : (
            <ForgotPassword
              {...forgotPassConfig}
              handleSubmit={this.signUser}
              isSubmiting={this.state.isSubmiting}
            />
          )}
        </Auth>
      </Fragment>
    );
  }
}
