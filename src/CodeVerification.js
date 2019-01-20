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

export default class CodeVerification extends PureComponent {
  static defaultProps = {
    title: "Please confirm your email",
    description:
      "We like real people, we need to know if it's not a ghost of the internet.",
    submitText: "Confirm Account",
    boxText: "Resend confirmation code?",
    boxAction: "submit",
    validationMgs: {
      code: {
        required: "The verification code required"
      }
    },
    placeholders: {
      code: "Confirmation Code"
    },
    customError: false,
    customErrorMsg: "",
    isSubmiting: false
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleBoxAction: PropTypes.func.isRequired,
    boxText: PropTypes.string,
    boxAction: PropTypes.string,
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
      handleBoxAction,
      primaryColor,
      box,
      validationMgs,
      customError,
      customErrorMsg,
      isSubmiting,
      placeholders
    } = this.props;
    return (
      <CardBody>
        <Container>
          <Title>{title}</Title>
          <Text>{description}</Text>
          <Formik
            initialValues={{
              code: ""
            }}
            validationSchema={Yup.object().shape({
              code: Yup.string().required(validationMgs.code.required)
            })}
            onSubmit={values => {
              this.props.handleSubmit(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field
                  name="code"
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      placeholder={placeholders.code}
                      disabled={isSubmiting}
                    />
                  )}
                />
                {errors.code && touched.code ? (
                  <Error>{errors.code}</Error>
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
            {boxText} <Link onClick={handleBoxAction}>{boxAction}</Link>
          </Text>
        </Box>
      </CardBody>
    );
  }
}
