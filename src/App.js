import React, {useState} from 'react';
import {SafeAreaView, Switch} from 'react-native';
import {ThemeProvider, createBox} from '@shopify/restyle';
import {darkTheme, theme} from './theme';
import MainComponent from './MainComponent';

const Box = createBox();
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <Box padding="m" backgroundColor="mainBackground" flex={1}>
          <Box marginTop="m" alignItems="flex-end">
            <Switch
              value={darkMode}
              onValueChange={value => setDarkMode(value)}
            />
          </Box>
          <MainComponent />
        </Box>
      </ThemeProvider>
    </SafeAreaView>
  );
};
export default App;
