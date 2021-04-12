import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddItemIcon from "../../assets/icons/add";

import TodoList from "../screens/list_todo";
import AddToDo from "../screens/create_todo";
import { TouchableWrapper } from "./styles";

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
        <HomeStack.Screen name="LIST_TODO" component={TodoList} />
        <HomeStack.Screen name="ADD_TODO" component={AddToDo} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
