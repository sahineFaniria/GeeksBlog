import Login from "@/components/auth/Login";
import Signin from "@/components/auth/Signin";
import Deb from "@/components/deb";
import { Route, Routes } from "react-router";


export default function PrivateRoute() {
  return (
    <Routes>
        <Route path="" element={<Deb/>}/>
        <Route path="/connexion" element={<Login/>} />
        <Route path="/inscription" element={<Signin/>}  />
    </Routes>
  )
}
