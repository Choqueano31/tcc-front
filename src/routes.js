// import Calendar from "views/Calendar/Calendar.js";
// import Charts from "views/Charts/Charts.js";
import Dashboard from "views/Dashboard/Dashboard.js";
// import ExtendedForms from "views/Forms/ExtendedForms.js";
import LoginPage from "views/Pages/LoginPage.js";
// import RegularForms from "views/Forms/RegularForms.js";
// import ValidationForms from "views/Forms/ValidationForms.js";
// import Widgets from "views/Widgets/Widgets.js";
// import Wizard from "views/Forms/Wizard.js";

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import { FaIdBadge } from "react-icons/fa";
// import DateRange from "@material-ui/icons/DateRange";
import { ExitToApp, FolderShared, PictureAsPdf, Settings } from "@material-ui/icons";
import ClassRegister from "Pages/Classe/Register";

import BlocoManagment from "Pages/Blocos/Management";
import BlocoRegister from "Pages/Blocos/Register";
import ClassManagment from "Pages/Classe/Management";
import Associado from "Pages/Search/Associado/Index";
//import TimeTable from "Pages/TimeTable";
import DisciplinaManagment from "Pages/Disciplinas/Management";
import DisciplinasRegister from "Pages/Disciplinas/Register";
import TeachersManagment from "Pages/Professores/Management";
import ProfessoresRegister from "Pages/Professores/Register";
import Board from "Pages/TimeTable/Board";
import UserReport from "Pages/UserReport";
// import Timeline from "@material-ui/icons/Timeline";
// import WidgetsIcon from "@material-ui/icons/Widgets";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "HOME",
    rtlName: "لوحة القيادة",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin",
  },
  {
    // path: "/professor",
    name: "PERÍODOS",
    rtlName: "لوحة القيادة",
    icon: FaIdBadge,
    collapse:true,
    state: "periodos",
    // component: Dashboard,
     layout: "/admin",
    views: [
      {
        path: "/blococreate",
        name: "Inserir",
        rtlName: "ساحر",
        mini: "I",
        rtlMini: "ث",
        component: BlocoRegister,
        layout: "/admin",
      },
      {
        path: "/blocomanagement",
        name: "Gerenciar",
        rtlName: "ساحر",
        mini: "G",
        rtlMini: "ث",
        component: BlocoManagment,
         layout: "/admin",
      },
    ]},
    {
      // path: "/professor",
      name: "SALAS",
      rtlName: "لوحة القيادة",
      icon: FaIdBadge,
      collapse:true,
      state: "salas",
      // component: Dashboard,
       layout: "/admin",
      views: [
        {
          path: "/classregister",
          name: "Inserir",
          rtlName: "ساحر",
          mini: "I",
          rtlMini: "ث",
          component: ClassRegister,
          layout: "/admin",
        },
        {
          path: "/classmanagment",
          name: "Gerenciar",
          rtlName: "ساحر",
          mini: "G",
          rtlMini: "ث",
          component: ClassManagment,
          layout: "/admin",
        },
      ]},

  {
    // path: "/professor",
    name: "PROFESSOR",
    rtlName: "لوحة القيادة",
    icon: FaIdBadge,
    collapse:true,
    state: "pageCollapse",
    // component: Dashboard,
     layout: "/admin",
    views: [
      // {
      //   path: "/regular-forms",
      //   name: "Regular Forms",
      //   rtlName: "أشكال عادية",
      //   mini: "RF",
      //   rtlMini: "صو",
      //   component: RegularForms,
      //   layout: "/admin",
      // },
      // {
      //   path: "/extended-forms",
      //   name: "Extended Forms",
      //   rtlName: "نماذج موسعة",
      //   mini: "EF",
      //   rtlMini: "هوو",
      //   component: ExtendedForms,
      //   layout: "/admin",
      // },
      // {
      //   path: "/validation-forms",
      //   name: "Validation Forms",
      //   rtlName: "نماذج التحقق من الصحة",
      //   mini: "VF",
      //   rtlMini: "تو",
      //   component: ValidationForms,
      //   layout: "/admin",
      // },
      // {
      //   path: "/hotelregister",
      //   name: "REGISTRO NO HOTEL",
      //   rtlName: "ساحر",
      //   mini: "RH",
      //   rtlMini: "ث",
      //   component: HotelRegister,
      //   layout: "/admin",
      // },
      // {
      //   path: "/bedroomregister",
      //   name: "REGISTRO DE QUARTO",
      //   rtlName: "ساحر",
      //   mini: "RQ",
      //   rtlMini: "ث",
      //   component: BedroomRegister,
      //   layout: "/admin",
      // },
      {
        path: "/createProf",
        name: "Inserir",
        rtlName: "ساحر",
        mini: "I",
        rtlMini: "ث",
        component: ProfessoresRegister,
        layout: "/admin",
      },
      {
        path: "/ProfessorManagement",
        name: "Gerenciar",
        rtlName: "ساحر",
        mini: "G",
        rtlMini: "ث",
        component: TeachersManagment,
         layout: "/admin",
      },
    ],
  },
{
        // path: "/professor",
        name: "DISCIPLINAS",
        rtlName: "لوحة القيادة",
        icon: FaIdBadge,
        collapse:true,
        state: "disciplinas",
        // component: Dashboard,
         layout: "/admin",
        views: [
          {
            path: "/disciplinaregister",
            name: "Inserir",
            rtlName: "ساحر",
            mini: "I",
            rtlMini: "ث",
            component: DisciplinasRegister,
            layout: "/admin",
          },
          {
            path: "/readdisciplinas",
            name: "Gerenciar",
            rtlName: "ساحر",
            mini: "G",
            rtlMini: "ث",
            component: DisciplinaManagment,
            layout: "/admin",
          },
        ]},
        {
          collapse: true,
          name: "GERENCIAMENTO",
          rtlName: "خرائط",
          icon: Settings,
          state: "mapsCollapse",
          layout:'/admin',
          views: [
            // {
            //   path: "/associates",
            //   name: "GERENCIAMENTO DE BLOCOS",
            //   rtlName: "خرائط جوجل",
            //   mini: "G",
            //   rtlMini: "زم",
            //   component: AssociatesSearch,
            //   layout: "/admin",
            // },
            {
              path: "/timetable",
              name: "Horários",
              rtlName: "خرائط جوجل",
              mini: "G",
              rtlMini: "زم",
              component: Board,
              layout: "/admin",
            },
                  {
              path: "/listassociates",
              name: "BLOCOS",
              rtlName: "خرائط جوجل",
              mini: "B",
              rtlMini: "زم",
              // component: AssociatesSearch, // estava comentado
              component: Associado,

              layout: "/admin",
            },
            // {
            //   path: "/full-screen-maps",
            //   name: "Full Screen Map",
            //   rtlName: "خريطة كاملة الشاشة",
            //   mini: "FSM",
            //   rtlMini: "ووم",
            //   component: FullScreenMap,
            //   layout: "/admin",
            // },
            // {
            //   path: "/vector-maps",
            //   name: "Vector Map",
            //   rtlName: "خريطة المتجه",
            //   mini: "VM",
            //   rtlMini: "تم",
            //   component: VectorMap,
            //   layout: "/admin",
            // },
          ],
        },
{
   path: "/listperiods",
   name: "BLOCOS",
   rtlName: "خرائط جوجل",
   mini: "B",
   rtlMini: "زم",
   icon:FolderShared,
   component: Associado,
   layout: "/user",
        },
        {
          path: "/listtimetable",
          name: "HORÁRIOS",
          rtlName: "خرائط جوجل",
          mini: "B",
          rtlMini: "زم",
          icon:PictureAsPdf,
          component: UserReport,
          layout: "/user",
               },

  {
    path: "/login-page",
    name: "SAIR",
    rtlName: "هعذاتسجيل الدخول",
    mini: "X",
    icon:ExitToApp,
    rtlMini: "هعذا",
    component: LoginPage,
    layout: "/auth",
  },
];

export default dashRoutes;

