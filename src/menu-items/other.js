// assets
import { IconHelp } from '@tabler/icons';

//-----------------------|| DOCUMENTATION MENU ITEMS ||-----------------------//

export const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'docs',
            title: 'Documentation',
            type: 'item',
            url: '/docs',
            icon: IconHelp,
            breadcrumbs: false
        }
    ]
};
