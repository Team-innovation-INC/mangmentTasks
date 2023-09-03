// assets
import { IconBrandChrome, IconCode } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconCode };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Sample Page',
      type: 'item',
      url: 'https://progress-e7yl.onrender.com/login',
      icon: icons.IconBrandChrome,
      caption: 'this is the main project extension idea',
      breadcrumbs: false,
      external: true
    },
    {
      id: 'documentation',
      title: 'source code',
      type: 'item',
      caption: 'this is the github source code link',
      url: 'https://github.com/Team-innovation-INC/mangmentTasks',
      icon: icons.IconCode,
      external: true,
      target: true
    }
  ]
};

export default other;
