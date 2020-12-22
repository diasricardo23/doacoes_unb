import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import Dashboard from "../views/Dashboard.vue";
import ADMDashboard from "../views/adm/Dashboard.vue";
import AboutProject from "../views/AboutProject.vue";
import Profile from "../views/Profile.vue";
import Donation from "../views/Donation.vue";
import History from "../views/History.vue"; 

Vue.use(VueRouter);

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
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/donation",
    name: "Donation",
    component: Donation
  },
  {
    path: "/history",
    name: "History",
    component: History
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/admin/dashboard",
    name: "ADMDashboard",
    component: ADMDashboard
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
