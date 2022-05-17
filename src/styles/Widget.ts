import React from 'react';
import styled from 'styled-components/native';

interface widgetProps {}

// Default Styles
export const WidgetContainer = styled.SafeAreaView<widgetProps>`
  display: flex;
  flex-direction: column;
  background-color: #aaa;
  margin: 3% 10%;
  padding: 5%;
  border-radius: 5px;
`;
export const MenuContainer = styled.View``;

export const Text = styled.Text``;

export const WidgetTitle = styled.Text`
  font-weight: bold;
`;
