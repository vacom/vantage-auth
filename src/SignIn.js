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

export default class SignIn extends PureComponent {
  static defaultProps = {
    title: "Sign In",
    description: "Welcome back, come fast! Your forms are waiting.",
    submitText: "Sign in",
    boxText: "Do not have an account yet?",
    boxAction: "Sign Up",
    boxUrl: "/signup",
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
    customError: false,
    customErrorMsg: ""
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
    customError: PropTypes.bool,
    customErrorMsg: PropTypes.string
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
      customErrorMsg
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
                    <Input {...field} type="email" placeholder="Email" />
                  )}
                />
                {errors.email && touched.email ? (
                  <Error>{errors.email}</Error>
                ) : null}

                <Field
                  name="password"
                  render={({ field }) => (
                    <Input {...field} type="password" placeholder="password" />
                  )}
                />
                {errors.password && touched.password ? (
                  <Error>{errors.password}</Error>
                ) : null}

                {customError && <Error>{customErrorMsg}</Error>}

                <Button primaryColor={primaryColor} type="submit">
                  {submitText}
                </Button>
              </Form>
            )}
          </Formik>
        </Container>
        <Box {...box}>
          <Text>
            {boxText} <Link href={boxUrl}>{boxAction}</Link>
          </Text>
        </Box>
      </CardBody>
    );
  }
}
