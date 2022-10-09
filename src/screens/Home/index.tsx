import { Text } from 'react-native'

/* COMPONENTS */
import { Header } from "../../components/Header";
import { Info } from '../../components/Info';
import { ListEmpty } from '../../components/ListEmpty';
import { NewTask } from '../../components/NewTask';
import { TasksAmounts } from '../../components/TasksAmounts';

/* STYLES */
import { HomeContainer, Tasks } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      
      <Tasks>
        <NewTask />

        <TasksAmounts />

        <ListEmpty 
          title="Você ainda não tem tarefas cadastradas"
          description="Crie tarefas e organize seus itens a fazer"
        />
      </Tasks>
    </HomeContainer>
  )
}