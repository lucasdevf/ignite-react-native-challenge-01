import { useState } from 'react'

/* COMPONENTS */
import { Header } from "../../components/Header";
import { ListEmpty } from '../../components/ListEmpty';
import { NewTask } from '../../components/NewTask';
import { TasksAmounts } from '../../components/TasksAmounts';

/* STYLES */
import { HomeContainer, Tasks } from "./styles";

export interface Task {
  id: number
  name: string
  done: boolean
}

export function Home() {

  const [tasks, setTasks] = useState<Task[]>([])

  return (
    <HomeContainer>
      <Header />
      
      <Tasks>
        <NewTask 
          onAddTask={(task: Task) => setTasks(prevState => [...prevState, task])}
        />

        <TasksAmounts 
          createdAmount={tasks.length} 
          doneAmount={tasks.filter(task => task.done).length} 
        />

        {
          tasks.length === 0 &&
          <ListEmpty 
            title="Você ainda não tem tarefas cadastradas"
            description="Crie tarefas e organize seus itens a fazer"
          />
        }
      </Tasks>
    </HomeContainer>
  )
}