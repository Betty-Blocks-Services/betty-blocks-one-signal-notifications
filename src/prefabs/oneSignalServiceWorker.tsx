import { prefab, Icon } from '@betty-blocks/component-sdk';

import { OneSignalServiceWorker } from './structures/OneSignalServiceWorker';

const attributes = {
  category: 'CONTENT',
  icon: Icon.TitleIcon,
  keywords: [''],
};

export default prefab('OneSignalServiceWorker', attributes, undefined, [OneSignalServiceWorker({})]);
