// assets
import { IconMessageCircle2, IconMap2, IconSearch } from '@tabler/icons';


//-----------------------|| UTILITIES MENU ITEMS ||-----------------------//

export const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'chat',
            title: 'Messenger',
            type: 'item',
            url: '/utils/chat',
            icon: IconMessageCircle2,
            breadcrumbs: false
        },
        {
            id: 'maps',
            title: 'Maps',
            type: 'item',
            url: '/utils/maps',
            icon: IconMap2,
            breadcrumbs: false
        },
        {
            id: 'search',
            title: 'Search',
            type: 'item',
            url: '/utils/search',
            icon: IconSearch,
            breadcrumbs: false
        }
    ]
};
