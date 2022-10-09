/* COMPONENTS */
import { Info } from '../Info'

/* STYLES */
import { TasksAmountsContainer } from "./styles";

export function TasksAmounts() {
  return (
    <TasksAmountsContainer>
      <Info  
        label="Criadas"
        number={5}
        variant="blue"
      />

      <Info  
        label="Concluídas"
        number={2}
        variant="purple"
      />
    </TasksAmountsContainer>
  )
}