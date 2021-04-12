import React from "react";
import {
  ModalContent,
  ModalTitle,
  ModalFooter,
  ModalButton,
  BottomModal,
  //@ts-ignore
} from "react-native-modals";

import { Container, TodoTitle, TitleContainer } from "./style";

const TodoDetails = () => {
  return (
    <BottomModal
      visible={true}
      modalTitle={<ModalTitle title="Todo # 1" />}
      footer={
        <ModalFooter>
          <ModalButton text="REMOVE" onPress={() => {}} />
          <ModalButton text="DISMISS" onPress={() => {}} />
        </ModalFooter>
      }
    >
      <ModalContent>
        <TodoTitle style={{ paddingTop: 40, fontWeight: "normal" }}>
          I want to buy the following food items: 1. Tomatoes $34 2. Groundnut
          oil $50 I want to buy the following food items: 1. Tomatoes $34 2.
          Groundnut oil $50 I want to buy the following food items: 1. Tomatoes
          $34 2. Groundnut oil $50 I want to buy the following food items: 1.
          Tomatoes $34 2. Groundnut oil $50 I want to buy the following food
          items: 1. Tomatoes $34 2. Groundnut oil $50
        </TodoTitle>
      </ModalContent>
    </BottomModal>
  );
};

export default TodoDetails;
