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

export default class SignUp extends PureComponent {
  static defaultProps = {
    title: "Sign Up",
    description: "New life for static forms, no need for code or servers.",
    submitText: "Sign up",
    boxText: "Already have an account?",
    boxAction: "Sign In",
    boxUrl: "/signup",
    privacyUrl: "http://www.privacy.com",
    privacyText: "Accept the Terms and Privacy Policy",
    validationMgs: {
      username: {
        lowercase: "username must be a lowercase string",
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
    placeholders: {
      username: "Username",
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
    privacyUrl: PropTypes.string.isRequired,
    privacyText: PropTypes.string,
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
    isSubmiting: PropTypes.bool
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
      privacyText,
      validationMgs,
      customError,
      customErrorMsg,
      placeholders,
      isSubmiting
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
                .trim()
                .lowercase(validationMgs.username.lowercase)
                .strict()
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
                    <Input
                      {...field}
                      type="text"
                      placeholder={placeholders.username}
                      disabled={isSubmiting}
                    />
                  )}
                />
                {errors.username && touched.username ? (
                  <Error>{errors.username}</Error>
                ) : null}

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
                        disabled={isSubmiting}
                      />{" "}
                      <Link href={privacyUrl} target="_blank">
                        {privacyText}
                      </Link>
                    </span>
                  )}
                />
                {errors.approvePrivacy && touched.approvePrivacy ? (
                  <Error>{errors.approvePrivacy}</Error>
                ) : null}

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
        <Box marginTop="60px" {...box}>
          <Text>
            {boxText} <Link href={boxUrl}>{boxAction}</Link>
          </Text>
        </Box>
      </CardBody>
    );
  }
}
