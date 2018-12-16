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

const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  username: Yup.string()
    .min(4, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  approvePrivacy: Yup.bool().required("Required")
});

export default class SignUp extends PureComponent {
  static defaultProps = {
    title: "Sign Up",
    description: "New life for static forms, no need for code or servers.",
    submitText: "Sign up",
    boxText: "Already have an account?",
    boxAction: "Sign In",
    boxUrl: "/signup"
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    boxText: PropTypes.string,
    boxAction: PropTypes.string,
    boxUrl: PropTypes.string.isRequired
  };
  render() {
    const {
      title,
      description,
      submitText,
      boxText,
      boxAction,
      boxUrl
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
            validationSchema={SignUpSchema}
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
                      <Link
                        href="https://www.iubenda.com/privacy-policy/54274847/legal?ifr=true&height=690"
                        target="_blank"
                      >
                        Accept the Terms and Privacy Policy
                      </Link>
                    </span>
                  )}
                />
                {errors.approvePrivacy && touched.approvePrivacy ? (
                  <Error>{errors.approvePrivacy}</Error>
                ) : null}

                <Button type="submit">{submitText}</Button>
              </Form>
            )}
          </Formik>
        </Container>
        <Box marginTop="60px">
          <Text>
            {boxText} <a href={boxUrl}>{boxAction}</a>
          </Text>
        </Box>
      </CardBody>
    );
  }
}
