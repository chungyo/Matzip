import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./src/navigation/AuthStackNavigator";



function App(): JSX.Element {

  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
}


export default App;
