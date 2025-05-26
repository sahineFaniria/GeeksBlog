import Acc2 from "@/components/Landing/Acc2";
import Accueil from "@/components/Landing/Accueil";
import { Enregistrement } from "@/components/Landing/Enregistrement";
import { Favoris } from "@/components/Landing/Favoris";
import Home from "@/components/Landing/Home";
import { Parametres } from "@/components/Landing/Parametres";
import { Postuler } from "@/components/Landing/Postuler";
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
        <Route path="/geeksblog.com" element={<Home/>} />
        <Route path="/geeksblog.com/accueil" element={<Accueil/>} />
        <Route path="/geeksblog.com/accueil2" element={<Acc2/>} />
        <Route path="/geeksblog.com/favoris" element={<Favoris/>} />
        <Route path="/geeksblog.com/enregistrement" element={<Enregistrement/>} />
        <Route path="/geeksblog.com/setting" element={<Parametres/>} />
        <Route path="/geeksblog.com/écrire"element={<Postuler/>} />

    </Routes>
  )
}


