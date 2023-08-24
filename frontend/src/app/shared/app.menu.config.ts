import { MenuRootItem } from "ontimize-web-ngx";

export const MENU_CONFIG: MenuRootItem[] = [
  // { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  {
    id: "Datos",
    name: "DATOS",
    icon: "description",
    opened: true,
    items: [
      {
        id: "results",
        name: "RESULTS",
        route: "/main/results",
        icon: "view_list",
      },
      {
        id: "trucks",
        name: "TRUCKS",
        route: "/main/trucks",
        icon: "local_shipping",
      },
      {
        id: "trailers",
        name: "TRAILERS",
        route: "/main/trailers",
        icon: "rv_hookup",
      },
    ],
  },

  {
    id: "GRAFICAS",
    name: "GRAFICAS",
    icon: "area_chart",
    opened: false,
    items: [
      {
        id: "graficas",
        name: "Trucks",
        route: "/main/graphs",
        icon: "stacked_line_chart",
      },
    ],
  },

  {
    id: "logout",
    name: "LOGOUT",
    route: "/login",
    icon: "power_settings_new",
    confirm: "yes",
  },
];
