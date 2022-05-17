// Date Calculator
export const Today = () => {
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  const date = currentDate.getDate();
  let day;

  if (currentDate.getDay() === 1) {
    day = '월';
  } else if (currentDate.getDay() === 2) {
    day = '화';
  } else if (currentDate.getDay() === 3) {
    day = '수';
  } else if (currentDate.getDay() === 4) {
    day = '목';
  } else if (currentDate.getDay() === 5) {
    day = '금';
  } else if (currentDate.getDay() === 6) {
    day = '토';
  } else {
    day = '일';
  }

  const today = `${month}월 ${date}일 (${day})`;

  return today;
};

// Meal Type from ENG to KOR
export const TypeToKorean = (type: string) => {
  switch (type) {
    case 'BREAKFAST_A':
      return '조식';
    case 'BREAKFAST_B':
      return '간단식';
    case 'LUNCH':
      return '중식';
    case 'DINNER':
      return '석식';
    case 'STAFF':
      return '위즈덤';
    case 'INTERNATIONAL':
      return '더 블루힐';
    default:
      return;
  }
};

// Return Working Hours
export const WorkingHours = (type: string) => {
  switch (type) {
    case 'BREAKFAST_A':
      return '07:30 ~ 09:00';
    case 'BREAKFAST_B':
      return '07:30 ~ 09:00';
    case 'LUNCH':
      return '11:30 ~ 13:30';
    case 'DINNER':
      return '17:30 ~ 19:00';
    case 'STAFF':
      return '11:50 ~ 13:00';
    case 'INTERNATIONAL':
      return '11:30 ~ 13:30';
    default:
      return;
  }
};
