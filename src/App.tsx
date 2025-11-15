

import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
 


} from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { colors } from './theme/colors';
import PatientProfile from './screens/patient/PatientProfile';

function App() {
  
const isDarkMode = useColorScheme() ==="dark";
const theme =  isDarkMode ? colors.dark : colors.light;
  return (
    <SafeAreaProvider>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
{       
          <NavigationContainer>
            <AppNavigator/>
            </NavigationContainer> }
       
    </SafeAreaProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  text:{
    color:'white'
  }
});

export default App;
