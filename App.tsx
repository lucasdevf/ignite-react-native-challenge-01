import { StatusBar, Text } from 'react-native'
 
/* SCREENS */
import { Home } from './src/screens/Home'

/* STYLES */
import { ThemeProvider } from 'styled-components'
import theme from './src/theme/default'

/* FONTS */
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold
} from '@expo-google-fonts/inter'

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {!fontsLoaded ? <Text>Carregando...</Text> : <Home />}
    </ThemeProvider>
  );
}