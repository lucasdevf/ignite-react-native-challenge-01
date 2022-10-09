import { InfoContainer, Label, Counter, Number } from "./styles";

interface Props {
  label: string
  number: number
  variant: 'blue' | 'purple'
}

export function Info({ label, number, variant }: Props) {
  return (
    <InfoContainer>
      <Label variant={variant}>{label}</Label>
      
      <Counter>
        <Number>{number}</Number>
      </Counter>
    </InfoContainer>
  )
}