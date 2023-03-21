import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignUpView from "../views/SignUpView.vue";
import ProductsView from "../views/ProductsView.vue";
import NotFoundViewVue from "@/views/NotFoundView.vue";
import ProductViewVue from "@/components/ProductView.vue";

function guest(to, from, next) {
  if (localStorage.activeUser) {
    next({ name: "Products" });
  } else next();
}

function guard(to, from, next) {
  if (localStorage.activeUser) {
    next();
  } else {
    next({ name: "login" });
  }
}

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/login",
    name: "login",
    component: LoginView,
    beforeEnter: guest,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUpView,
    beforeEnter: guest,
  },
  {
    path: "/products",
    name: "Products",
    component: ProductsView,
    beforeEnter: guard,
  },
  {
    path: "/products/:id",
    name: "product",
    component: ProductViewVue,
    beforeEnter: guard,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    beforeEnter: guest,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundViewVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
