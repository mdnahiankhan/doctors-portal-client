import { createBrowserRouter } from "react-router-dom";
import AllUsers from "../../DashBoard/AllUsers/AllUsers";
import AddDoctors from "../../DashBoard/DashBoard/AddDoctors/AddDoctors";
import DashBoard from "../../DashBoard/DashBoard/DashBoard";
import ManageDoctors from "../../DashBoard/DashBoard/ManageDoctors/ManageDoctors";
import Payment from "../../DashBoard/DashBoard/Payment/Payment";
import MyAppointments from "../../DashBoard/MyAppointments/MyAppointments";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import Appoinment from "../../Pages/Appointment/Appoinment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import DisplayError from "../../Shared/DisplayError/DisplayError";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivateRoutes from "./PrivateRoute/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
        errorElement: <DisplayError></DisplayError>,
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
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://doctors-portal-server-five-omega.vercel.app/bookings/${params.id}`)
            },
        ]
    }
])
export default router;