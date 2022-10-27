import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { Column } from "./Column";
import { useAppState } from "./contexts/AppStateContext";
import { AppContainer } from "./styles";

export const App = () => {
  const { state } = useAppState();

  return (
    <AppContainer>
      {state.lists.map((list, i) => {
        return <Column key={list.id} text={list.text} index={i} />;
      })}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};
