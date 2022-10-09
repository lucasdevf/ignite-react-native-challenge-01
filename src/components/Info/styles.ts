import styled, { css } from 'styled-components/native'

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

interface LabelProps {
  variant: 'blue' | 'purple'
}

export const Label = styled.Text<LabelProps>`
  ${({ theme, variant }) => css`
    font-family: ${theme.FONTS_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${variant === 'blue' ? theme.COLORS.BLUE : theme.COLORS.PURPLE};
  `}

  margin-right: 8px;
`

export const Counter = styled.View`
  background: ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 999px;
  padding: 4px 12px;
`

export const Number = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`