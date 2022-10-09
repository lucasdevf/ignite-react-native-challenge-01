import styled from 'styled-components/native'

export const ButtonAddContainer = styled.TouchableOpacity`
  border-radius: 6px;
  height: 54px;
  width: 54px;

  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.COLORS.BLUE_DARK};
`