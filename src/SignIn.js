import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
//Components
import CardBody from "./components/CardBody";
import Input from "./components/Input";
import Title from "./components/Title";
import Container from "./components/Container";
import Text from "./components/Text";
import Button from "./components/Button";
import Box from "./components/Box";
import Error from "./components/Error";
import Link from "./components/Link";
import Spinner from "./components/Spinner";

export default class SignIn extends PureComponent {
  static defaultProps = {
    title: "Sign In",
    description: "Welcome back, come fast! Your forms are waiting.",
    submitText: "Sign in",
    boxText: "Do not have an account yet?",
    boxAction: "Sign Up",
    boxUrl: "/signup",
    forgotPasswordText: "Forgot password?",
    forgotPasswordUrl: "#",
    enableForgotPassword: false,
    validationMgs: {
      email: {
        invalid: "Invalid email",
        required: "Required"
      },
      password: {
        min: "Too Short!",
        max: "Too Long!",
        required: "Required"
      }
    },
    placeholders: {
      email: "Email",
      password: "Password"
    },
    customError: false,
    customErrorMsg: "",
    isSubmiting: false
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    boxText: PropTypes.string,
    boxAction: PropTypes.string,
    boxUrl: PropTypes.string.isRequired,
    primaryColor: PropTypes.string,
    box: PropTypes.object,
    validationMgs: PropTypes.object.isRequired,
    placeholders: PropTypes.object.isRequired,
    customError: PropTypes.bool,
    customErrorMsg: PropTypes.string,
    isSubmiting: PropTypes.bool,
    forgotPasswordText: PropTypes.string,
    forgotPasswordUrl: PropTypes.string,
    enableForgotPassword: PropTypes.bool
  };
  render() {
    const {
      title,
      description,
      submitText,
      boxText,
      boxAction,
      boxUrl,
      primaryColor,
      box,
      validationMgs,
      customError,
      customErrorMsg,
      isSubmiting,
      enableForgotPassword,
      forgotPasswordText,
      forgotPasswordUrl,
      placeholders
    } = this.props;
    return (
      <CardBody>
        <Container>
          <Title>{title}</Title>
          <Text>{description}</Text>
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            validationSchema={Yup.object().shape({
              password: Yup.string()
                .min(8, validationMgs.password.min)
                .max(50, validationMgs.password.max)
                .required(validationMgs.password.required),
              email: Yup.string()
                .email(validationMgs.email.invalid)
                .required(validationMgs.email.required)
            })}
            onSubmit={values => {
              this.props.handleSubmit(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field
                  name="email"
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="email"
                      placeholder={placeholders.email}
                      disabled={isSubmiting}
                    />
                  )}
                />
                {errors.email && touched.email ? (
                  <Error>{errors.email}</Error>
                ) : null}

                <Field
                  name="password"
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="password"
                      placeholder={placeholders.password}
                      disabled={isSubmiting}
                    />
                  )}
                />
                {errors.password && touched.password ? (
                  <Error>{errors.password}</Error>
                ) : null}

                {enableForgotPassword && (
                  <Link href={forgotPasswordUrl}>{forgotPasswordText}</Link>
                )}

                {customError && <Error>{customErrorMsg}</Error>}

                <Button
                  primaryColor={primaryColor}
                  type="submit"
                  disabled={isSubmiting}
                >
                  {isSubmiting && <Spinner />}
                  {submitText}
                </Button>
              </Form>
            )}
          </Formik>
        </Container>
        <Box {...box} marginTop={enableForgotPassword && "120px"}>
          <Text>
            {boxText} <Link href={boxUrl}>{boxAction}</Link>
          </Text>
        </Box>
      </CardBody>
    );
  }
}
