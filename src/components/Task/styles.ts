import styled, { css } from 'styled-components/native'

export const TaskContainer = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  
  margin-bottom: 8px;
`

export const CheckButton = styled.TouchableOpacity``

interface NameProps {
  done: boolean
}

export const Name = styled.Text<NameProps>`
  margin-left: 12px;
  flex: 1;

  ${({ theme, done }) => css`
    color: ${done ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  ${({ theme, done }) => done && css`
    text-decoration: line-through;
    text-decoration-color: ${theme.COLORS.GRAY_300};
  `}
`

export const DeleteButton = styled.TouchableOpacity``