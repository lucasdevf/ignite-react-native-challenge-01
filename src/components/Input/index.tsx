import { TextInputProps } from "react-native";

/* STYLES */
import { useTheme } from "styled-components";
import { InputContainer } from "./styles";

export function Input(props: TextInputProps) {

  const { COLORS } = useTheme()

  return (
    <InputContainer 
      placeholderTextColor={COLORS.GRAY_300} 
      {...props} 
    />
  )
}