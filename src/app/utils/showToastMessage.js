import {showMessage, hideMessage} from 'react-native-flash-message';

export const showToastMessage = (type, description) => {
  showMessage({
    message: 'App',
    description,
    onPress: () => {
      hideMessage();
    },
    type,
  });
};
