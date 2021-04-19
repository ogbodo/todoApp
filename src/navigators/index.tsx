import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddItemIcon from "../../assets/icons/add";

import TodoList from "../screens/list_todo";
import AddToDo from "../screens/create_todo";
import { TouchableWrapper } from "./styles";
import BackIcon from "../../assets/icons/back";

const HomeStack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName="LIST_TODO"
        screenOptions={({ navigation }) =>
        ({
          headerRight: () => (
            <TouchableWrapper
              onPress={() => { navigation.navigate("ADD_TODO") }}
            >
              <AddItemIcon />
            </TouchableWrapper>
          ),
        })
        }
      >
        <HomeStack.Screen options={{ title: "Todo List" }}
          name="LIST_TODO"
          component={TodoList}
        />

        <HomeStack.Screen options={(screenOptions) => ({
          title: 'Add Todo',
          headerLeft: () => (
            <TouchableWrapper onPress={() => {
              screenOptions.navigation.navigate("LIST_TODO");
            }}>
              <BackIcon />
            </TouchableWrapper>
          )
        })}
          name="ADD_TODO" component={AddToDo}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
