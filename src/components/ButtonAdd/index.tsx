import type { TouchableOpacityProps } from "react-native";

/* ICONS */
import { FontAwesome } from '@expo/vector-icons'

/* STYLES */
import { ButtonAddContainer } from "./styles";

export function ButtonAdd(props: TouchableOpacityProps) {
  return (
    <ButtonAddContainer {...props}>
      <FontAwesome name="plus-circle" color="white" size={20} />
    </ButtonAddContainer>
  )
}