import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoginAdmin from "../views/LoginAdmin.vue";
import LoginDonator from "../views/LoginDonator.vue";
import SignUp from "../views/SignUp.vue";

// Donator views
import Dashboard_don from "../views/donator/Dashboard.vue";
import doDonation_don from "../views/donator/doDonation.vue";
import History_don from "../views/donator/History.vue"; 
import Profile_don from "../views/donator/Profile.vue";


// Adm views
import ADMDashboard from "../views/adm/Dashboard.vue";
import HistoryDonations from "../views/adm/History.vue";
import BeneficiariosList from "../views/adm/BeneficiariosList.vue";
import CadastroAdmin from "../views/adm/CadastroAdmin.vue"
import Donators from "../views/adm/Donator.vue";
import Payments from "../views/adm/Payments.vue";


import AboutProject from "../views/AboutProject.vue";
import layoutDefault from "../views/layoutDefault.vue";
import { Util } from "../functions/util.js"

Vue.use(VueRouter);

let util = new Util()


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: AboutProject
  },
  {
    path: "/loginadm",
    name: "Loginadm",
    component: LoginAdmin
  },
  {
    path: "/logindonator",
    name: "Logindon",
    component: LoginDonator
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/adm",
    component: layoutDefault,
    beforeEnter: (to, from, next) => {
      if(util.checkToken()){
        next()
      }else{
        next('/');
      }
    },
    children: [
      {
        path: "/",
        name: "default",
        redirect: to => {
          return "/dashboard"
        }
      },
      {
        path: "/dashboard",
        name: "ADMDashboard",
        component: ADMDashboard
      },
      {
        path: "/admin/payment",
        name: "Payments",
        component: Payments
      },
      {
        path: "/admin/doadores",
        name: "Donators",
        component: Donators
      },
      {
        path: "/admin/history",
        name: "HistoryDonations",
        component: HistoryDonations
      },
      {
        path: "/admin/listabeneficiarios",
        name: "BeneficiariosList",
        component: BeneficiariosList
      },
      {
        path: "/admin/admin",
        name: "CadastroAdmin",
        component: CadastroAdmin
      }]
  },
  {
    path: "/donator",
    component: layoutDefault,
    beforeEnter: (to, from, next) => {
      if(util.checkToken()){
        next()
      }else{
        next('/');
      }
    },
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: Dashboard_don
      },
      {
        path: "/donation",
        name: "Donation",
        component: doDonation_don
      },
      {
        path: "/history",
        name: "History",
        component: History_don
      },
      {
        path: "/profile",
        name: "Profile",
        component: Profile_don
      }
    ]
  }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;