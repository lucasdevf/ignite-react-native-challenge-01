import { useState } from 'react'

/* COMPONENTS */
import { Header } from "../../components/Header";
import { ListEmpty } from '../../components/ListEmpty';
import { NewTask } from '../../components/NewTask';
import { Task as TaskComponent } from '../../components/Task';
import { TasksAmounts } from '../../components/TasksAmounts';

/* STYLES */
import { HomeContainer, Tasks, List } from "./styles";

export interface Task {
  id: number
  name: string
  done: boolean
}

export function Home() {

  const [tasks, setTasks] = useState<Task[]>([])

  function handleDoneTask(task: Task) {

    setTasks(prevState => prevState.map(taskItem => {

      if(taskItem.id === task.id) taskItem.done = !taskItem.done

      return taskItem
    }))

  }

  function handleDeleteTask(task: Task) {
    setTasks(prevState => prevState.filter(taskItem => taskItem.id !== task.id))
  }

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

        <List>
          {tasks.map(task => (
            <TaskComponent 
              key={task.id} 
              data={task} 
              onDone={() => handleDoneTask(task)}
              onDelete={() => handleDeleteTask(task)}
            />
          ))}
        </List>
      </Tasks>
    </HomeContainer>
  )
}