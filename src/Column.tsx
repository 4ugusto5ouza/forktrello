import React from "react";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { useAppState } from "./contexts/AppStateContext";
import { ColumnContainer, ColumnTitle } from "./styles";

interface ColumnProps {
  text: string;
  index: number;
}
export const Column = ({ text, index }: ColumnProps) => {
  const { state } = useAppState();

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task) => {
        return <Card key={task.id} text={task.text} />;
      })}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};
