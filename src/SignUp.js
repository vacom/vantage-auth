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

export default class SignUp extends PureComponent {
  static defaultProps = {
    title: "Sign Up",
    description: "New life for static forms, no need for code or servers.",
    submitText: "Sign up",
    boxText: "Already have an account?",
    boxAction: "Sign In",
    boxUrl: "/signup",
    validationMgs: {
      username: {
        min: "Too Short!",
        max: "Too Long!",
        required: "Required"
      },
      email: {
        invalid: "Invalid email",
        required: "Required"
      },
      password: {
        min: "Too Short!",
        max: "Too Long!",
        required: "Required"
      },
      approvePrivacy: {
        required: "Required"
      }
    },
    customError: false,
    customErrorMsg: ""
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    privacyUrl: PropTypes.string.isRequired,
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
      privacyUrl,
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
              password: "",
              username: "",
              approvePrivacy: false
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string()
                .min(4, validationMgs.username.min)
                .max(50, validationMgs.username.max)
                .required(validationMgs.username.required),
              email: Yup.string()
                .email(validationMgs.email.invalid)
                .required(validationMgs.email.required),
              password: Yup.string()
                .min(8, validationMgs.password.min)
                .max(50, validationMgs.password.max)
                .required(validationMgs.password.required),
              approvePrivacy: Yup.bool().required(
                validationMgs.approvePrivacy.required
              )
            })}
            onSubmit={values => {
              this.props.handleSubmit(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field
                  name="username"
                  render={({ field }) => (
                    <Input {...field} type="text" placeholder="Username" />
                  )}
                />
                {errors.username && touched.username ? (
                  <Error>{errors.username}</Error>
                ) : null}

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

                <Field
                  name="approvePrivacy"
                  render={({ field }) => (
                    <span>
                      <input
                        {...field}
                        id="signupApprovedPrivacy"
                        type="checkbox"
                        required
                        autoFocus
                      />{" "}
                      <Link href={privacyUrl} target="_blank">
                        Accept the Terms and Privacy Policy
                      </Link>
                    </span>
                  )}
                />
                {errors.approvePrivacy && touched.approvePrivacy ? (
                  <Error>{errors.approvePrivacy}</Error>
                ) : null}

                {customError && <Error>{customErrorMsg}</Error>}

                <Button primaryColor={primaryColor} type="submit">
                  {submitText}
                </Button>
              </Form>
            )}
          </Formik>
        </Container>
        <Box marginTop="60px" {...box}>
          <Text>
            {boxText} <Link href={boxUrl}>{boxAction}</Link>
          </Text>
        </Box>
      </CardBody>
    );
  }
}
