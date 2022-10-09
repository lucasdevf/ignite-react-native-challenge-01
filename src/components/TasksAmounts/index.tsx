/* COMPONENTS */
import { Info } from '../Info'

/* STYLES */
import { TasksAmountsContainer } from "./styles";

interface Props {
  createdAmount: number
  doneAmount: number
}

export function TasksAmounts({ createdAmount, doneAmount }: Props) {
  return (
    <TasksAmountsContainer>
      <Info  
        label="Criadas"
        number={createdAmount}
        variant="blue"
      />

      <Info  
        label="Concluídas"
        number={doneAmount}
        variant="purple"
      />
    </TasksAmountsContainer>
  )
}