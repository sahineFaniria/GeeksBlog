import { useEffect, useState } from "react";
import clsx from "clsx";
import {
  Sun, User, ThumbsUp, ThumbsDown,
  MessageCircle, Share, Star, Moon
} from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router";


export default function Accueil() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const categories = ["Frontend", "Backend", "Reseau", "Base de donnée", "Devops", "Cloud"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Synchronisation avec le thème Tailwind
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);


  return (
    <div className="w-full min-h-screen m-0">
      {/* HEADER */}
      <header
        className={clsx(
          "fixed top-0 w-full z-50 transition-all backdrop-blur-md",
          scrolled ? "bg-white/50 shadow shadow-blue-200" : "bg-white"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <p className="font-bold text-xl text-blue-600 dark:text-white">GeeksBlog</p>
          <div className="flex gap-2 items-center">
            {/* Toggle animé avec icône dedans */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300"
            >
              <div
                className={`w-4 h-4 flex items-center justify-center rounded-full shadow-md transform duration-300 ease-in-out
                  ${darkMode ? "translate-x-6 bg-blue-300" : "translate-x-0 bg-white"}`}
              >
                {darkMode ? (
                  <Moon className="w-3 h-3 text-gray-800" />
                ) : (
                  <Sun className="w-3 h-3 text-blue-400" />
                )}
              </div>
            </button>

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
          <div className="sticky top-[52px] z-10 py-2 pb-2  backdrop-blur-sm ">
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
          <div className="bg-blue-50 border border-blue-200 rounded p-4 text-sm space-y-3">
            <h3 className="font-bold text-blue-700">Vous n’êtes pas connecté ?</h3>
            <p>Pour profiter pleinement de GeeksBlog, créez un compte gratuitement !</p>
            <h4 className="font-semibold text-blue-600">En créant un compte, vous pourrez :</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Poster ou publier vos propres annonces et articles</li>
              <li>Réagir et commenter les publications des autres membres</li>
              <li>Postuler à des offres ou projets proposés</li>
              <li>Enregistrer vos publications préférées</li>
              <li>Construire votre profil tech personnel</li>
            </ul>
            <p className="font-semibold text-blue-800 mt-4">
              N’attendez plus, rejoignez la communauté dès maintenant !
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}





