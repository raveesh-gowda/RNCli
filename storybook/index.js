import {getStorybookUI, configure} from '@storybook/react-native';
import '@react-native-community/async-storage';

import './rn-addons';

// import stories
configure(() => {
  require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: require('@react-native-community/async-storage').default,
});

export default StorybookUIRoot;
