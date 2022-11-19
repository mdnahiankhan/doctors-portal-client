import { createBrowserRouter } from "react-router-dom";
import AllUsers from "../../DashBoard/AllUsers/AllUsers";
import AddDoctors from "../../DashBoard/DashBoard/AddDoctors/AddDoctors";
import DashBoard from "../../DashBoard/DashBoard/DashBoard";
import ManageDoctors from "../../DashBoard/DashBoard/ManageDoctors/ManageDoctors";
import MyAppointments from "../../DashBoard/MyAppointments/MyAppointments";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import Appoinment from "../../Pages/Appointment/Appoinment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivateRoutes from "./PrivateRoute/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appoinment></Appoinment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointments></MyAppointments>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoutes><AddDoctors></AddDoctors></AdminRoutes>
            },
            {
                path: '/dashboard/managedoctor',
                element: <AdminRoutes><ManageDoctors></ManageDoctors></AdminRoutes>
            }
        ]
    }
])
export default router;