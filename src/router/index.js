import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import StudentPage from '../views/StudentPage.vue'
import Teachers from '../views/Teachers.vue'
import Subjects from '../views/Subjects.vue'
import Enrollment from '../views/Enrollment.vue'
import Login from '../views/Auth/Login.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:  "/",
            name: "login",
            component: Login
        },
        {
            path:  "/dashboard",
            name: "home",
            component: Dashboard
        },
        {
            path:  "/student",
            name: "student",
            component: StudentPage
        },
        {
            path:  "/teachers",
            name: "teachers",
            component: Teachers
        },
        {
            path:  "/subjects",
            name: "subjects",
            component: Subjects
        },
        {
            path:  "/enroll",
            name: "enrollment",
            component: Enrollment
        },
    ],
});
export default router;