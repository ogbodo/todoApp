import React from "react";

import { Container, TextInput, InputLabel } from "./styles";

type InputProps = {
  textInputStyle?: {};
  containerStyle?: {};
  inputLabel?: string;
  placeholder: string;
  inputLabelStyle?: {};
  onChangeText(T: any): void;
};

export default function Input(props: InputProps) {
  return (
    <Container style={props.containerStyle}>
      {props.inputLabel && (
        <InputLabel style={props.inputLabelStyle}>
          {props.inputLabel}
        </InputLabel>
      )}
      <TextInput {...props} style={props.textInputStyle} />
    </Container>
  );
}
