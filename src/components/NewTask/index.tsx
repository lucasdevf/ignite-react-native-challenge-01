import { useState } from 'react'

/* COMPONENTS */
import { Task } from "../../screens/Home";
import { Input } from "../Input";

/* STYLES */
import { NewTaskContainer, ButtonAddNewTask } from "./styles";

interface Props {
  onAddTask: (task: Task) => void
}

export function NewTask({ onAddTask }: Props) {

  const [name, setName] = useState('')

  function handleAddTask() {
    onAddTask({
      id: Date.now(),
      name,
      done: false,
    })

    setName('')
  }

  return (
    <NewTaskContainer>
      <Input 
        placeholder="Adicione uma nova tarefa"
        onChangeText={setName}
        value={name} 
      />
      <ButtonAddNewTask 
        onPress={handleAddTask}
      />
    </NewTaskContainer>
  )
}