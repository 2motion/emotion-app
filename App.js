/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { WebView } from 'react-native-webview';

const App: () => React$Node = () => {
  return (
    <>
      <WebView
          source={{ uri: 'https://www.gamstagram.com' }}
          style={{ marginTop: 20 }}
      />
    </>
  );
};

export default App;
