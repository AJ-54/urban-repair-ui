// assets
import { IconDashboard, IconDeviceAnalytics, IconHome2 } from '@tabler/icons';

// constant
const icons = {
    IconDashboard: IconDashboard,
    IconDeviceAnalytics,
    IconHome: IconHome2
};

//-----------------------|| DASHBOARD MENU ITEMS ||-----------------------//

export const dashboard = {
    id: 'home',
    title: 'Home',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Home',
            type: 'item',
            url: '/',
            icon: icons['IconHome'],
            breadcrumbs: false
        }
    ]
};
