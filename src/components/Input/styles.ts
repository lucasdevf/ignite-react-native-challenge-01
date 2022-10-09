import styled, { css } from 'styled-components/native'

export const InputContainer = styled.TextInput`
  border-radius: 6px;
  height: 54px;
  padding: 16px;

  flex: 1;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    background: ${theme.COLORS.GRAY_500};
    color: ${theme.COLORS.GRAY_100};
  `}
`