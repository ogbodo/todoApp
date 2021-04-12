import React from "react";
import { SafeAreaView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import AddItemIcon from "../../../assets/icons/add";

import {
  Container,
  ListItem,
  TouchableWrapper,
  TodoTitle,
  ListItemControls,
  RemoveItem,
  EditItem,
  EmptyList,
} from "./style";

const TodoList = () => {
  const routeObject = useRoute();
  const navigation = useNavigation();

  navigation.setOptions({
    title: "Add New Todo",
    headerRight: () => (
      <TouchableWrapper
        onPress={() => {
          navigation.navigate("ADD_TODO", { todos: routeObject.params?.todos });
        }}
      >
        <AddItemIcon />
      </TouchableWrapper>
    ),
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container
        contentContainerStyle={{ alignContent: "center", alignItems: "center" }}
        showsVerticalScrollIndicator={false}
      >
        {routeObject.params && routeObject.params.todos.length ? (
          routeObject.params.todos.map((item, index) => (
            <TouchableWrapper
              style={{ backgroundColor: "#fff" }}
              key={index}
              onPress={() => { }}
            >
              <ListItem>
                <TodoTitle>{item.title}</TodoTitle>
                <ListItemControls>
                  <TouchableWrapper style={{ flex: 1 }} onPress={() => { }}>
                    <RemoveItem>remove</RemoveItem>
                  </TouchableWrapper>
                  <TouchableWrapper onPress={() => { }}>
                    <EditItem>edit</EditItem>
                  </TouchableWrapper>
                </ListItemControls>
              </ListItem>
            </TouchableWrapper>
          ))
        ) : (
          <EmptyList>Todo list is empty</EmptyList>
        )}
      </Container>
    </SafeAreaView>
  );
};

export default TodoList;
