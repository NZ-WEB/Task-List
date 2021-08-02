import { createRouter, createWebHistory } from "vue-router";
import NewTask from '../views/NewTask'
import Tasks from "../views/Tasks";
import Task from "../views/Task";
const routes = [
  {
    path: "/tasks",
    alias: '/',
    name: "Tasks",
    component: Tasks,
  },
  {
    path: "/new",
    name: "New",
    component: NewTask,
  },
  {
    path: "/task/:id",
    name: "Task",
    props: true,
    component: Task,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'active',
  linkActiveClass: 'active'
});

export default router;
