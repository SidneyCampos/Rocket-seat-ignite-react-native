import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import {
  useFonts, // Função para carregar as fontes
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme'
import { Dashboard } from './src/screens/Dashboard'; // Pega index por padrão, sem precisar informar o nome dele

export default function App() {
  const [fontsLoaded] = useFonts({ // Usar para verificar se foi carregado, caso não, segurar a tela de splash
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded) { // enquanto as fontes ainda não tiverem sido carregadas
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  )
}
