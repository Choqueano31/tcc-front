import Buttons from "views/Components/Buttons.js";
// import Calendar from "views/Calendar/Calendar.js";
// import Charts from "views/Charts/Charts.js";
import Dashboard from "views/Dashboard/Dashboard.js";
import ErrorPage from "views/Pages/ErrorPage.js";
// import ExtendedForms from "views/Forms/ExtendedForms.js";
import ExtendedTables from "views/Tables/ExtendedTables.js";
import FullScreenMap from "views/Maps/FullScreenMap.js";
import GoogleMaps from "views/Maps/GoogleMaps.js";
import GridSystem from "views/Components/GridSystem.js";
import Icons from "views/Components/Icons.js";
import LockScreenPage from "views/Pages/LockScreenPage.js";
import LoginPage from "views/Pages/LoginPage.js";
import Notifications from "views/Components/Notifications.js";
import Panels from "views/Components/Panels.js";
import PricingPage from "views/Pages/PricingPage.js";
import RTLSupport from "views/Pages/RTLSupport.js";
import ReactTables from "views/Tables/ReactTables.js";
import RegisterPage from "views/Pages/RegisterPage.js";
// import RegularForms from "views/Forms/RegularForms.js";
import RegularTables from "views/Tables/RegularTables.js";
import SweetAlert from "views/Components/SweetAlert.js";
import TimelinePage from "views/Pages/Timeline.js";
import Typography from "views/Components/Typography.js";
import UserProfile from "views/Pages/UserProfile.js";
// import ValidationForms from "views/Forms/ValidationForms.js";
import VectorMap from "views/Maps/VectorMap.js";
// import Widgets from "views/Widgets/Widgets.js";
// import Wizard from "views/Forms/Wizard.js";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { FaIdBadge } from "react-icons/fa";
// import DateRange from "@material-ui/icons/DateRange";
import GridOn from "@material-ui/icons/GridOn";
import Image from "@material-ui/icons/Image";
import {DateRange, ExitToApp, FolderShared, PictureAsPdf, Settings} from "@material-ui/icons";
import HotelRegister from "Pages/Register/Hotel/Index";
import BedroomRegister from "Pages/Register/Bedroom";
import AssociatesSearch from "Pages/Search/Associates/Index";
import ValidationForms from "views/Forms/ValidationForms";
import ExtendedForms from "views/Forms/ExtendedForms";
import RegularForms from "views/Forms/RegularForms";
import ClassRegister from "Pages/Classe/Register";

import Associado from "Pages/Search/Associado/Index";
import BlocoManagment from "Pages/Blocos/Management";
import BlocoRegister from "Pages/Blocos/Register";
import ClassManagment from "Pages/Classe/Management";
//import TimeTable from "Pages/TimeTable";
import Board from "Pages/TimeTable/Board";
import DisciplinasRegister from "Pages/Disciplinas/Register";
import DisciplinaManagment from "Pages/Disciplinas/Management";
import ProfessoresRegister from "Pages/Professores/Register";
import TeachersManagment from "Pages/Professores/Management";
import Calendar from "views/Calendar/Calendar";
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

  // {
  //   collapse: true,
  //   name: "FINANCEIRO",
  //   rtlName: "صفحات",
  //   icon: Image,
  //   state: "pageCollapse",
  //   views: [
  //     {
  //       path: "/pricing-page",
  //       name: "Pricing Page",
  //       rtlName: "عالتسعير",
  //       mini: "PP",
  //       rtlMini: "ع",
  //       component: PricingPage,
  //       layout: "/auth",
  //     },
  //     {
  //       path: "/rtl-support-page",
  //       name: "RTL Support",
  //       rtlName: "صودعم رتل",
  //       mini: "RS",
  //       rtlMini: "صو",
  //       component: RTLSupport,
  //       layout: "/rtl",
  //     },
  //     {
  //       path: "/timeline-page",
  //       name: "Timeline Page",
  //       rtlName: "تيالجدول الزمني",
  //       mini: "T",
  //       rtlMini: "تي",
  //       component: TimelinePage,
  //       layout: "/admin",
  //     },

  //     {
  //       path: "/register-page",
  //       name: "Register Page",
  //       rtlName: "تسجيل",
  //       mini: "R",
  //       rtlMini: "صع",
  //       component: RegisterPage,
  //       layout: "/auth",
  //     },
  //     {
  //       path: "/lock-screen-page",
  //       name: "Lock Screen Page",
  //       rtlName: "اقفل الشاشة",
  //       mini: "LS",
  //       rtlMini: "هذاع",
  //       component: LockScreenPage,
  //       layout: "/auth",
  //     },
  //     {
  //       path: "/user-page",
  //       name: "User Profile",
  //       rtlName: "ملف تعريفي للمستخدم",
  //       mini: "UP",
  //       rtlMini: "شع",
  //       component: UserProfile,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/error-page",
  //       name: "Error Page",
  //       rtlName: "صفحة الخطأ",
  //       mini: "E",
  //       rtlMini: "البريد",
  //       component: ErrorPage,
  //       layout: "/auth",
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   name: "PATRIMÔNIO",
  //   rtlName: "المكونات",
  //   icon: Apps,
  //   state: "componentsCollapse",
  //   views: [
  //     {
  //       collapse: true,
  //       name: "Multi Level Collapse",
  //       rtlName: "انهيار متعدد المستويات",
  //       mini: "MC",
  //       rtlMini: "ر",
  //       state: "multiCollapse",
  //       views: [
  //         {
  //           path: "/buttons",
  //           name: "Buttons",
  //           rtlName: "وصفت",
  //           mini: "B",
  //           rtlMini: "ب",
  //           component: Buttons,
  //           layout: "/admin",
  //         },
  //       ],
  //     },
  //     {
  //       path: "/buttons",
  //       name: "Buttons",
  //       rtlName: "وصفت",
  //       mini: "B",
  //       rtlMini: "ب",
  //       component: Buttons,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/grid-system",
  //       name: "Grid System",
  //       rtlName: "نظام الشبكة",
  //       mini: "GS",
  //       rtlMini: "زو",
  //       component: GridSystem,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/panels",
  //       name: "Panels",
  //       rtlName: "لوحات",
  //       mini: "P",
  //       rtlMini: "ع",
  //       component: Panels,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/sweet-alert",
  //       name: "Sweet Alert",
  //       rtlName: "الحلو تنبيه",
  //       mini: "SA",
  //       rtlMini: "ومن",
  //       component: SweetAlert,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/notifications",
  //       name: "Notifications",
  //       rtlName: "إخطارات",
  //       mini: "N",
  //       rtlMini: "ن",
  //       component: Notifications,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/icons",
  //       name: "Icons",
  //       rtlName: "الرموز",
  //       mini: "I",
  //       rtlMini: "و",
  //       component: Icons,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/typography",
  //       name: "Typography",
  //       rtlName: "طباعة",
  //       mini: "T",
  //       rtlMini: "ر",
  //       component: Typography,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   name: "HOTEL DE TRANSITO",
  //   rtlName: "إستمارات",
  //   icon: "content_paste",
  //   state: "formsCollapse",
  //   views: [
  //     {
  //       path: "/regular-forms",
  //       name: "Regular Forms",
  //       rtlName: "أشكال عادية",
  //       mini: "RF",
  //       rtlMini: "صو",
  //       component: RegularForms,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/extended-forms",
  //       name: "Extended Forms",
  //       rtlName: "نماذج موسعة",
  //       mini: "EF",
  //       rtlMini: "هوو",
  //       component: ExtendedForms,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/validation-forms",
  //       name: "Validation Forms",
  //       rtlName: "نماذج التحقق من الصحة",
  //       mini: "VF",
  //       rtlMini: "تو",
  //       component: ValidationForms,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/hotelregister",
  //       name: "REGISTRO NO HOTEL",
  //       rtlName: "ساحر",
  //       mini: "RH",
  //       rtlMini: "ث",
  //       component: HotelRegister,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/bedroomregister",
  //       name: "REGISTRO DE QUARTO",
  //       rtlName: "ساحر",
  //       mini: "RQ",
  //       rtlMini: "ث",
  //       component: BedroomRegister,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   name: "ACESSORIA JURÍDICA",
  //   rtlName: "الجداول",
  //   icon: GridOn,
  //   state: "tablesCollapse",
  //   views: [
  //     {
  //       path: "/regular-tables",
  //       name: "Regular Tables",
  //       rtlName: "طاولات عادية",
  //       mini: "RT",
  //       rtlMini: "صر",
  //       component: RegularTables,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/extended-tables",
  //       name: "Extended Tables",
  //       rtlName: "جداول ممتدة",
  //       mini: "ET",
  //       rtlMini: "هور",
  //       component: ExtendedTables,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/react-tables",
  //       name: "React Tables",
  //       rtlName: "رد فعل الطاولة",
  //       mini: "RT",
  //       rtlMini: "در",
  //       component: ReactTables,
  //       layout: "/admin",
  //     },
  //   ],
  // },


  // {
  //   path: "/login-page",
  //   name: "SAIR",
  //   rtlName: "هعذاتسجيل الدخول",
  //   mini: "X",
  //   icon:ExitToApp,
  //   rtlMini: "هعذا",
  //   component: LoginPage,
  //   layout: "/admin",
  // },



  // {
  //   path: "/login-page",
  //   name: "SAIR",
  //   rtlName: "هعذاتسجيل الدخول",
  //   mini: "X",
  //   icon:ExitToApp,
  //   rtlMini: "هعذا",
  //   component: LoginPage,
  //   layout: "/user",
  // },
  // {
  //   path: "/widgets",
  //   name: "Widgets",
  //   rtlName: "الحاجيات",
  //   icon: WidgetsIcon,
  //   component: Widgets,
  //   layout: "/admin"
  // },
  // {
  //   path: "/charts",
  //   name: "Charts",
  //   rtlName: "الرسوم البيانية",
  //   icon: Timeline,
  //   component: Charts,
  //   layout: "/admin"
  // },
  // {
  //   path: "/calendar",
  //   name: "Calendar",
  //   rtlName: "التقويم",
  //   icon: DateRange,
  //   component: Calendar,
  //   layout: "/user"
  // },
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

