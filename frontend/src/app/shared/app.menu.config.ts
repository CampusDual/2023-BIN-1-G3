import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  // { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'results', name: 'RESULTS', route: '/main/results', icon: 'view_list' },
  { id: 'graficas', name: 'GRAPHS', route: '/main/graphs', icon: 'stacked_line_chart' },
  { id: 'trucks', name: 'TRUCKS', route: '/main/trucks', icon: 'local_shipping' },
  { id: 'trailers', name: 'TRAILERS', route: '/main/trailers', icon: 'rv_hookup' },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];
