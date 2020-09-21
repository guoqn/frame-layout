import {addParameters, configure,addDecorator} from '@storybook/react';

import {withKnobs} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import {jsxDecorator} from 'storybook-addon-jsx';
// import {withInfo} from '@storybook/addon-info';

// addDecorator(withInfo)
addDecorator(centered)
addDecorator(withKnobs)
addDecorator(jsxDecorator)

// Option defaults:
addParameters({
  options: {
    name: '业务组件调试平台',
    url: '#',
    // goFullScreen: false,
    // showStoriesPanel: false,
    // showAddonPanel: true,
    // showSearchBox: false,
    // addonPanelInRight: false,
    // sortStoriesByKind: false,
    // hierarchySeparator: null,
    // hierarchyRootSeparator: null,
    // sidebarAnimations: true,
    // selectedPanel: undefined,
    // enableShortcuts: false, // true by default
    // isToolshown: true, // true by default
  }
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req
    .keys()
    .forEach(filename => req(filename));
}

configure(loadStories, module);
