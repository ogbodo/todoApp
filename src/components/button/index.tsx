import React from "react";

import { Container, ButtonText } from "./styles";

type ButtonProps = {
  title: string;
  onPress(): void;
  buttonStyle?: {};
  textStyle?: {};
};

export default function Button(props: ButtonProps) {
  const { title, buttonStyle, textStyle } = props;

  return (
    <Container style={{ ...buttonStyle }} {...props}>
      <ButtonText style={textStyle}>{title}</ButtonText>
    </Container>
  );
}
