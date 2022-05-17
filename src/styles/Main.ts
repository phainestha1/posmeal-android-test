import styled from 'styled-components/native';
import {scale} from './Default';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ScrollView = styled.ScrollView``;

export const Text = styled.Text``;

export const MainTitle = styled.Text`
  font-size: ${scale};
`;
