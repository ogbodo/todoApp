import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import Input from "../../components/input";
import Button from "../../components/button";
import { Container, Title } from "./styles";
import showToast from "../../components/commons/toast";
import { TouchableWrapper } from "../list_todo/style";
import BackIcon from "../../../assets/icons/back";

const AddToDo = () => {
  const routeObject = useRoute();
  const [state, setState] = useState({
    //@ts-ignore
    todos: routeObject.params['todos'] ? routeObject.params['todos'] : [],
    title: "",
    description: "",
  });

  const navigation = useNavigation();

  navigation.setOptions({
    title: "Todo List",
    headerLeft: () => (
      <TouchableWrapper
        onPress={() => {
          navigation.navigate("LIST_TODO", { todos: state.todos });
        }}
      >
        <BackIcon />
      </TouchableWrapper>
    ),
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
              const todos = [
                ...state.todos,
                { title: state.title, description: state.description },
              ];
              setState({ ...state, todos });
              showToast();
            }
          }}
        />
      </Container>
    </SafeAreaView>
  );
};

export default AddToDo;
