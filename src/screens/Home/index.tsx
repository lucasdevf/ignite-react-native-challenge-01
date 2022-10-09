import { Text } from 'react-native'

/* COMPONENTS */
import { Header } from "../../components/Header";
import { Info } from '../../components/Info';
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
      </Tasks>
    </HomeContainer>
  )
}