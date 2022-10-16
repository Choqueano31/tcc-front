/*!

=========================================================
* Material Dashboard PRO React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthLayout from "layouts/Auth.js";
import RtlLayout from "layouts/RTL.js";
import AdminLayout from "layouts/Admin.js";
import UserLayout from "layouts/User";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import "assets/scss/material-dashboard-pro-react.scss?v=1.8.0";
import Global from "styles/global";

const hist = createBrowserHistory();

ReactDOM.render(

  <Router history={hist}>
     <DndProvider backend={HTML5Backend}>
    <ToastContainer />
    <Switch>
    <Route path="/rtl" component={RtlLayout} />
      <Route path="/auth" component={AuthLayout} />
      <Route path="/admin" component={AdminLayout} />
      <Route path="/user" component={UserLayout} />
      <Redirect from="/admin" to="/admin/dashboard" />
      <Redirect from="/user" to="/user/listperiods" />
      <Redirect from="/" to="/auth/login-page" />
      {/* <Route path="/rtl" component={RtlLayout} />
      <Route path="/auth" component={AuthLayout} />
      <Route path="/admin" component={AdminLayout} />
      <Redirect from="/" to="/admin/dashboard" /> */}
    </Switch>
    <Global/>
    </DndProvider>
  </Router>,
  document.getElementById("root")
);
