import styled, { css } from 'styled-components/native'

export const ListEmptyContainer = styled.View`
  align-items: center;
  justify-content: center;

  flex: 1;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_300};
    font-family: ${theme.FONTS_FAMILY.BOLD};  
  `}

  margin-bottom: 8px;
  margin-top: 20px;
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_300};
  `}
`