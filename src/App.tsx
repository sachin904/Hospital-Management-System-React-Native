

import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,


} from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { colors } from './theme/colors';

function App() {
  
const isDarkMode = useColorScheme() ==="dark";
const theme =  isDarkMode ? colors.dark : colors.light;
  return (
    <SafeAreaProvider>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
         <SafeAreaView style={[styles.container,{backgroundColor: theme.background}]}>
          <NavigationContainer>
            <AppNavigator/>
            </NavigationContainer>
        </SafeAreaView>
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
