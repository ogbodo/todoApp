import style from "styled-components/native";

export const Container = style.ScrollView`
flex: 1;
padding: 40px 10px;
`;

export const TodoTitle = style.Text`
color: rgba(0,0,0,.5);
font-weight: bold;
margin-bottom: 5px;
`;

export const ListItem = style.View`
align-items:center;
width:100%;
`;

export const TouchableWrapper = style.TouchableOpacity`
margin-bottom: 15px;
padding: 10px;
`;

export const ListItemControls = style.View`
flex-direction: row;
align-items:center;
width:100%;
`;

export const RemoveItem = style.Text`
color: #B40808
font-weight: bold;
text-transform:uppercase;
margin: 0px 40px;
`;

export const EditItem = style.Text`
color: #BAB200
font-weight: bold;
text-transform:uppercase;
margin: 0px 40px;
`;

export const EmptyList = style.Text`
color: rgba(0,0,0,.5);
font-weight: bold;
text-transform:capitalize;
margin: 0px 40px;
`;
