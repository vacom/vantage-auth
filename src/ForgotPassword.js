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

export default class ForgotPassword extends PureComponent {
  static defaultProps = {
    title: "Did you forgot your password?",
    description:
      "Enter your email address you´re using for your account below and we will send you a password reset link",
    submitText: "Request reset link",
    boxText: "Do not have an account yet?",
    boxAction: "Sign Up",
    boxUrl: "/signup",
    validationMgs: {
      email: {
        invalid: "Invalid email",
        required: "Required"
      }
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
      validationMgs,
      customError,
      customErrorMsg,
      isSubmiting
    } = this.props;
    return (
      <CardBody>
        <Container>
          <Title>{title}</Title>
          <Text>{description}</Text>
          <Formik
            initialValues={{
              email: ""
            }}
            validationSchema={Yup.object().shape({
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
                      placeholder="Email"
                      disabled={isSubmiting}
                    />
                  )}
                />
                {errors.email && touched.email ? (
                  <Error>{errors.email}</Error>
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
        <Box {...box} marginTop={"200px"}>
          <Text>
            {boxText} <Link href={boxUrl}>{boxAction}</Link>
          </Text>
        </Box>
      </CardBody>
    );
  }
}
