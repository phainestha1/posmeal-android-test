import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

// width & height of the current view
export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

// based on iphone 5s's scale
export const scale = SCREEN_WIDTH / 10;

// Default Styles
export const BasicContainerFullWidth = styled.View`
  width: ${SCREEN_WIDTH};
`;
export const SafeContainer = styled.SafeAreaView``;

export const Text = styled.Text``;

export const HorizontalView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

// Separators
export const VerticalSeparator10px = styled.View`
  height: 10px;
`;
