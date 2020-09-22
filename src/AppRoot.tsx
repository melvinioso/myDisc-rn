import React, { useContext } from 'react';
import { BaseNavigationContainer } from '@react-navigation/native';

import './theme';

import { AppProvider, AppContext } from './context/app';

import Loading from './screens/Loading';
import Main from './navigators/Main';
import Background from './components/Background';

function App() {
  const { booted } = useContext(AppContext);

  if (!booted) {
    return (
      <Background source={{}}>
        <Loading />
      </Background>
    );
  }

  return (
    <Background source={{}}>
      <Main />
    </Background>
  );
}

function AppContainer() {
  return (
    <AppProvider>
      <BaseNavigationContainer>
        <App />
      </BaseNavigationContainer>
    </AppProvider>
  );
}

export default AppContainer;
