import styled from 'styled-components/native'

export const TasksAmountsContainer = styled.View`
  margin-top: 32px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-bottom-width: 1px;
  padding-bottom: 20px;
`