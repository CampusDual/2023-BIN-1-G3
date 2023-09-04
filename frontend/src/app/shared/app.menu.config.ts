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
      {
        id: "areas",
        name: "AREAS",
        route: "/main/areas",
        icon: "storage",
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
        id: "graficacamion",
        name: "graficacamion",
        route: "/main/graphs",
        icon: "stacked_line_chart",
      },
      {
        id: "graficacarga",
        name: "graficacarga",
        route: "/main/graph_volumes",
        icon: "multiline_chart",
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
