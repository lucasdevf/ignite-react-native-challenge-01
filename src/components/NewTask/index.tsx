/* COMPONENTS */
import { Input } from "../Input";

/* STYLES */
import { NewTaskContainer, ButtonAddNewTask } from "./styles";

export function NewTask() {
  return (
    <NewTaskContainer>
      <Input placeholder="Adicione uma nova tarefa" />
      <ButtonAddNewTask />
    </NewTaskContainer>
  )
}