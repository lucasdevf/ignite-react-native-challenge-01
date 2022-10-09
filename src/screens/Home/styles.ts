import styled from 'styled-components/native'

import { SafeAreaView } from 'react-native-safe-area-context'

export const HomeContainer = styled(SafeAreaView)`
  flex: 1;
`

export const Tasks = styled.View`
  background:${({ theme }) => theme.COLORS.GRAY_600};
  flex: 1;

  padding: 0 24px;
`

export const List = styled.View`
  margin-top: 20px;
`