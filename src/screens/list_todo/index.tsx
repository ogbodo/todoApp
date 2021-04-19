import React from "react";
import { useRecoilValue } from 'recoil'
import { todoState } from "../../global";

import {
  Container,
  ListItem,
  TouchableWrapper,
  TodoTitle,
  ListItemControls,
  RemoveItem,
  EditItem,
  EmptyList,
} from "./styles";

const TodoList = () => {
  const allTodos = useRecoilValue(todoState)

  return (
    <Container
      contentContainerStyle={{ alignContent: "center", alignItems: "center" }}
      showsVerticalScrollIndicator={false}
    >
      {allTodos.todos.length ? (
        allTodos.todos.map((item, index) => (
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
  );
};

export default TodoList;
