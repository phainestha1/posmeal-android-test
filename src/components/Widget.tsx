import React from 'react';
import {
  BasicContainerFullWidth,
  HorizontalView,
  Text,
  VerticalSeparator10px,
} from '../styles/Default';
import {MenuContainer, WidgetContainer, WidgetTitle} from '../styles/Widget';
import {TypeToKorean, WorkingHours} from '../utils/Interpreters';
import {mockApi} from '../utils/MockApi';

const Widget = () => {
  return (
    <BasicContainerFullWidth>
      {mockApi.map(data => (
        <WidgetContainer>
          {/* Reveal Meal type and its working hour */}
          <HorizontalView>
            <WidgetTitle>{TypeToKorean(data.type)}</WidgetTitle>
            <Text>{WorkingHours(data.type)}</Text>
          </HorizontalView>

          <VerticalSeparator10px />

          {/* Menu info */}
          <MenuContainer>
            {data.foods.map(menu => (
              <Text>{menu.name_kor}</Text>
            ))}
          </MenuContainer>
        </WidgetContainer>
      ))}
    </BasicContainerFullWidth>
  );
};

export default Widget;
