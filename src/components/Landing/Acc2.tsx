import { useEffect, useState } from "react";
import clsx from "clsx";
import {
  Sun, User, ThumbsUp, ThumbsDown,
  MessageCircle, Share, Star, User2, Settings, ArrowRightCircleIcon
} from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router";

export default function Acc2() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const categories = ["Frontend", "Backend", "Reseau", "Base de donnée", "Devops", "Cloud"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen m-0">
      {/* HEADER */}
      <header
        className={clsx(
          "fixed top-0 w-full z-50 transition-all backdrop-blur-lg",
          scrolled ? "bg-white/80 shadow" : "bg-white"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <p className="font-bold text-xl text-blue-600">GeeksBlog</p>
          <div className="flex gap-2 items-center">
            <Sun className="w-5 text-blue-400" />
            <Link to="/connexion">
              <Button className="h-7">Login</Button>
            </Link>
            <Link to="/inscription">
            <Button className="h-7 bg-white hover:bg-blue-50 text-blue-600 border border-blue-200">
              Sign in
            </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="pt-16 flex w-full min-h-screen">
        {/* LEFT SIDEBAR */}
        <aside className="w-1/4 p-4 fixed left-0 top-16 bottom-0 border-r overflow-y-auto">
          <div className="mb-6">
            <h2 className="font-semibold text-sm text-gray-700">Une techno en tête ?</h2>
            <p className="text-sm text-gray-600 mt-1">
              Utilisez la barre de recherche pour trouver rapidement des sujets liés à vos centres d’intérêt.
            </p>
          </div>
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full mb-4 px-3 py-2 border rounded text-sm"
          />
          <div className="space-y-3">
            {[1, 2, 3].map((res) => (
              <div key={res} className="border p-3 rounded text-sm">
                <p className="font-semibold text-blue-600">@utilisateur{res}</p>
                <p className="mt-1 text-gray-700">
                  Un extrait du résultat recherché très pertinent...
                </p>
                <p className="text-xs text-gray-500 mt-1">Il y a {res}j</p>
              </div>
            ))}
          </div>
        </aside>

        {/* CENTER CONTENT */}
        <section className="w-2/4 p-4 ml-[25%] mr-[25%] min-h-screen">
          {/* Sticky Category Header */}
          <div className="sticky top-[52px] z-10 py-2 pb-2  backdrop-blur-md ">
            <div className="flex flex-wrap gap-2 pb-2">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat)}
                  className={clsx(
                    "whitespace-nowrap px-4 py-1 text-sm border rounded-full transition",
                    activeCategory === cat
                      ? "bg-blue-100 text-blue-600 border-blue-300"
                      : "text-gray-600 hover:text-gray-800 border-gray-300 hover:bg-blue-50"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Posts List */}
          <div className="space-y-4 mt-4">
            {[1, 2, 3, 4, 5, 6, 7].map((post) => (
              <div key={post} className="border rounded p-4 bg-white shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-800">
                    <User className="w-4 h-4" />
                  </div>
                  <p className="font-semibold text-sm">@geek{post}</p>
                </div>
                <p className="text-gray-700 text-sm">
                  Voici un extrait d’un super guide ou d’une solution bien expliquée avec du code pertinent...
                </p>
                <div className="flex gap-4 text-xs text-gray-500 mt-3">
                  <span className="flex items-center gap-1"><ThumbsUp size={14} />12</span>
                  <span className="flex items-center gap-1"><ThumbsDown size={14} />2</span>
                  <span className="flex items-center gap-1"><MessageCircle size={14} />5</span>
                  <span className="flex items-center gap-1"><Star size={14} />35</span>
                  <span className="flex items-center gap-1"><Share size={14} /></span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RIGHT SIDEBAR */}
        <aside className="w-1/4 p-4 fixed right-0 top-16 bottom-0 border-l overflow-y-auto">
        <div className="bg-white border border-gray-200 rounded p-4 text-sm space-y-3 shadow-sm">
            <div className="flex flex-col items-center space-y-2">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                <User2 className="w-7 h-7 text-blue-700" />
            </div>
            <p className="text-lg font-semibold text-gray-800">Profil</p>
            </div>

            <hr className="border-t border-gray-200" />

            <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                <Star className="w-4 h-4" />
                <span>Favoris</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                <MessageCircle className="w-4 h-4" />
                <span>Enregistrement</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                <Settings className="w-4 h-4" />
                <span>Paramètres</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                <ArrowRightCircleIcon  className="w-4 h-4" />
                <span>Gérer votre compte</span>
            </div>
            </div>

            <hr className="border-t border-gray-200" />

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-4 text-center">
              <p className="text-sm font-medium">
                N'attendez plus, Ajoutez votre guide à la communauté dès maintenant !
              </p>
              <Button className="mt-3 bg-white text-blue-600 hover:bg-gray-100 w-full">
                Postuler
              </Button>
            </div>
        </div>
        </aside>
      </main>
    </div>
  );
}
