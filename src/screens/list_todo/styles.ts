import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  padding: 40px 10px;
`;

export const TodoTitle = styled.Text`
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ListItem = styled.View`
  align-items: center;
  width: 100%;
`;
export const EditItem = styled.Text``;

export const InputLabel = styled.Text`
  font-size: 20px;
  align-self: flex-start;
  padding: 10px 0px;
`;

export const TouchableWrapper = styled.TouchableOpacity`
  margin-bottom: 15px;
  padding: 10px;
`;

export const ListItemControls = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const RemoveItem = styled.Text`
  color: #b40808;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0px 40px;
`;

export const EmptyList = styled.Text`
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  text-transform: capitalize;
  margin: 0px 40px;
`;
