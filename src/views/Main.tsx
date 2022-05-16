import React, {useEffect} from 'react';
import Widget from '../components/Widget';
import {Container, ScrollView, Title} from '../styles/Main';
import {Today} from '../utils/DateCalculator';
import {NativeModules} from 'react-native';

const Main = () => {
  const today = Today();
  const SharedStorage = NativeModules.SharedStorage;

  useEffect(() => {
    SharedStorage.set(JSON.stringify({text: '프론트에서 위젯 메세지 바꾸기'}));
  }, []);

  return (
    <Container>
      <Title>{today}</Title>
      <ScrollView>
        <Widget />
      </ScrollView>
    </Container>
  );
};

export default Main;
