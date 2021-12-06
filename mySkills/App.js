import React from 'react';

import { StatusBar } from 'react-native'; 

// import Home from './src/pages/Home' -> Importação comum
import { Home } from './src/pages/Home'; // Importação sem o default no arquivo de origem
                                                // não usar o default vai funcionar o auto import
export default function App(){
    
    return (
    <>
    <StatusBar barStyle="default" />
    <Home />
    </>
    )
    
}