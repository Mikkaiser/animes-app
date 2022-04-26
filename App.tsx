import * as React from 'react';
import { StatusBar } from 'react-native';
import Navigation from './src/navigation';

export default function App() {
  return (
    <>
      <StatusBar 
        backgroundColor='#000' 
        animated={true}
       />
      <Navigation />
    </>
  );
}

