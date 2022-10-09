import type { Task as TaskProps } from "../../screens/Home";

/* ICONS */
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'

/* STYLES */
import { CheckButton, DeleteButton, Name, TaskContainer } from "./styles";
import { useTheme } from "styled-components";

interface Props {
  data: TaskProps
  onDone: () => void
  onDelete: () => void
}

export function Task({ data, onDone, onDelete }: Props) {
  
  const theme = useTheme()

  return (
    <TaskContainer>
      <CheckButton onPress={onDone}>
        {
          data.done ?
          <FontAwesome name="check-circle" size={24} color={theme.COLORS.PURPLE} /> :
          <FontAwesome name="circle-thin" size={24} color={theme.COLORS.BLUE} />
        }
      </CheckButton>

      <Name done={data.done}>{data.name}</Name>

      <DeleteButton onPress={onDelete}>
        <FontAwesome5 name="trash" size={16} color={theme.COLORS.GRAY_300} />
      </DeleteButton>
    </TaskContainer>
  )
}