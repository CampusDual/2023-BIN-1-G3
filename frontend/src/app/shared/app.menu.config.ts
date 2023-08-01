import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'results', name: 'RESULTS', route: '/main/customers', icon: 'view_list' },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];
