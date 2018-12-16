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

const SignInSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

export default class SignIn extends PureComponent {
  static defaultProps = {
    title: "Sign In",
    description: "Welcome back, come fast! Your forms are waiting.",
    submitText: "Sign in",
    boxText: "Do not have an account yet?",
    boxAction: "Sign Up",
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
              password: ""
            }}
            validationSchema={SignInSchema}
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

                <Button type="submit">{submitText}</Button>
              </Form>
            )}
          </Formik>
        </Container>
        <Box>
          <Text>
            {boxText} <a href={boxUrl}>{boxAction}</a>
          </Text>
        </Box>
      </CardBody>
    );
  }
}
