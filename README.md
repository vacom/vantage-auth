# Vantage-auth

A reusable auth interface component for any React Application. Use this component to give your users a simple and dynamic experience when they sign in. Interface pre-made with validation, you only have to worry about sending the values to your server.

### Features

- Responsive
- Easy to use
- Plug-and-Use
- Form validation
- Customizable

![Vantage-auth](http://i67.tinypic.com/2627ivn.jpg)

## installation

Just install the dependency and start using

```javascript
npm i vantage-auth or yarn add vantage-auth
```

### How to import

After installing the dependency, just import the components you need

```javascript
import Auth, { SignIn, SignUp } from "vantage-auth";
```

### Usage

This example shows how to import Sign In

```javascript
import Auth, { SignIn } from "vantage-auth";

<Auth>
  <SignIn />
</Auth>;
```

### Handle Submit

The whole part of the form is validated for you only have to receive the values submitted through the handleSubmit, after this you only have to send to your server through an API etc.

```javascript
import Auth, { SignIn } from "vantage-auth";

class App extends Component {
  signInUser = values => {
    console.log("signInUser = ", values);
  };
  render() {
    return (
      <Auth>
        <SignIn handleSubmit={this.signInUser} />
      </Auth>
    );
  }
}
```

### Customize Auth

Here you will find all possible properties for the Auth component. They are not require, in case of not seeing a certain properties the default is presented

```javascript
import Auth, { SignIn } from "vantage-auth";

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

<Auth {...config}>
  <SignIn />
</Auth>;
```

### Customize SignIn

Here you will find all possible properties for the SignIn component. They are not require, in case of not seeing a certain properties the default is presented

```javascript
import Auth, { SignIn } from "vantage-auth";

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

<Auth>
  <SignIn {...signInConfig} />
</Auth>;
```

### Customize SignUp

Here you will find all possible properties for the SignUp component. They are not require, in case of not seeing a certain properties the default is presented

```javascript
import Auth, { SignUp } from "vantage-auth";

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

<Auth>
  <SignUp {...signUpConfig} />
</Auth>;
```

### A Complete Example

An example of how to quickly and universally mount a dynamic login page for your applications

```javascript
import Auth, { SignIn } from "vantage-auth";

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

class App extends Component {
  signInUser = values => {
    console.log("signInUser = ", values);
  };
  render() {
    return (
      <Auth {...config}>
        <SignIn {...signInConfig} handleSubmit={this.signInUser} />
      </Auth>
    );
  }
}
```

#### Result

![Vantage-auth](http://i67.tinypic.com/amwj.png)
