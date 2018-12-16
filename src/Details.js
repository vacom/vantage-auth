import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//Components
import Logo from "./components/Logo";
import Title from "./components/Title";
import Container from "./components/Container";
import Text from "./components/Text";
import Welcome from "./components/Welcome";

export default class Details extends PureComponent {
  static defaultProps = {
    imgSrc: "http://i68.tinypic.com/2po1mcg.jpg",
    title: "Formette",
    titleColor: "#EFECF8",
    description: "Forms as a Service",
    descriptionColor: "#BBAAE1"
  };
  static propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    titleColor: PropTypes.string,
    description: PropTypes.string,
    descriptionColor: PropTypes.string,
    gradient: PropTypes.string
  };
  render() {
    const {
      imgSrc,
      titleColor,
      title,
      descriptionColor,
      description,
      gradient
    } = this.props;
    return (
      <Welcome gradient={gradient}>
        <Container center>
          <Logo src={imgSrc} />
          <Title color={titleColor} highlight isLogo>
            {title}
          </Title>
          <Text color={descriptionColor} isLogo>
            {description}
          </Text>
        </Container>
      </Welcome>
    );
  }
}
