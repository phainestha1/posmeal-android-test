import React, {useEffect} from 'react';
import Widget from '../components/Widget';
import {Container, MainTitle, ScrollView} from '../styles/Main';
import {NativeModules} from 'react-native';
import {Today} from '../utils/Interpreters';

// TODO: Need to change messages on the widget without visiting in app page
const Main = () => {
  const today = Today();
  const SharedStorage = NativeModules.SharedStorage;
  const message = Date.now();

  useEffect(() => {
    SharedStorage.set(JSON.stringify({text: message}));
  }, [message]);

  return (
    <Container>
      <MainTitle>{today}</MainTitle>
      <MainTitle>{message}</MainTitle>
      <ScrollView>
        <Widget />
      </ScrollView>
    </Container>
  );
};

export default Main;
