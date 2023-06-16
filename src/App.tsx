import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LanguageSelectionScreen from './screens/LanguageSelectionScreen';
import FileSelectionScreen from './screens/FileSelectionScreen';
import TranslationScreen from './screens/TranslationScreen';
// import DownloadScreen from './screens/DownloadScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LanguageSelection">
        <Stack.Screen
          name="LanguageSelection"
          component={LanguageSelectionScreen}
        />
        <Stack.Screen name="FileSelection" component={FileSelectionScreen} />
        <Stack.Screen name="Translation" component={TranslationScreen} />
        {/* <Stack.Screen name="Download" component={DownloadScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
