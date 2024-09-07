import { Route, Router, Routes, useNavigate } from "react-router-dom";

import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";
import AddCategory from "../Pages/AddCategory";
import AddExpense from "../Pages/AddExpense";
import AddIncome from "../Pages/AddIncome";


const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoutes route="/login" />}>
                <Route path="/" element={<Home />} />
                <Route path="/add-category" element={<AddCategory />} />
                <Route path="/add-expense" element={<AddExpense/>}/>
                <Route path="/add-income" element={<AddIncome/>}/>
            </Route>
        </Routes>
    )
}



export default UserRoutes;