import React, { useState } from "react";
import { useRecoilState } from 'recoil'
import Input from "../../components/input";
import Button from "../../components/button";
import { Container, Title } from "./styles";
import showToast from "../../components/commons/toast";
import { todoState } from "../../global";
import { ITodo } from "../../global/interfaces";

const AddToDo = () => {
  const [allTodos, setTodo] = useRecoilState(todoState)
  const [state, setState] = useState<ITodo>({
    title: "",
    description: "",
  });

  return (
    <Container
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Title>Add New Todo Item</Title>
      <Input
        inputLabel="title"
        inputLabelStyle={{
          marginLeft: 10,
          textTransform: "capitalize",
          fontWeight: "600",
          color: "rgba(0,0,0,.5)",
        }}
        onChangeText={(title) => {
          setState({ ...state, title });
        }}
        placeholder="enter title"
        containerStyle={{ width: "100%" }}
      />
      <Input
        inputLabel="description"
        inputLabelStyle={{
          marginLeft: 10,
          textTransform: "capitalize",
          fontWeight: "600",
          color: "rgba(0,0,0,.5)",
        }}
        onChangeText={(description) => {
          setState({ ...state, description });
        }}
        placeholder="enter description"
        containerStyle={{ width: "100%" }}
      />
      <Button
        title="add todo"
        buttonStyle={{ marginTop: 50 }}
        onPress={() => {
          if (state.title && state.description) {
            const newTodos = [
              ...allTodos.todos,
              state
            ];
            setTodo({ todos: newTodos });

            showToast();
          }
        }}
      />
    </Container>
  );
};

export default AddToDo;
