/* ICONS */
import { AntDesign } from '@expo/vector-icons'

/* STYLES */
import { Description, ListEmptyContainer, Title } from "./styles";
import { useTheme } from 'styled-components';

interface Props {
  title: string
  description: string
}

export function ListEmpty({ title, description }: Props) {

  const theme = useTheme()

  return (
    <ListEmptyContainer>

      <AntDesign 
        name="exception1"
        color={theme.COLORS.GRAY_300}
        size={48}
      />

      <Title>{title}</Title>
      <Description>{description}</Description>
    </ListEmptyContainer>
  )
}