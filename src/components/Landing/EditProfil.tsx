import { JSX, useEffect, useState } from "react";
import { ArrowRightSquareIcon, Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

export function EditProfil(): JSX.Element {

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
        <div className="w-full flex flex-col">
      {/* HEADER FIXED */}
      <header className="fixed top-0 left-0 w-full bg-white/50 shadow shadow-blue-200 z-50 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <p className="font-bold text-xl text-blue-600">GeeksBlog</p>
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
            <Button className="h-7 bg-white hover:bg-blue-50 text-blue-600 border border-blue-200">
              Déconnexion
              <ArrowRightSquareIcon className="w-6 h-6 text-blue-500 ml-1" />
            </Button>
          </div>
        </div>
      </header>

      {/* CONTENU PRINCIPAL (avec padding-top pour compenser le header fixed) */}
      <main className="w-2/4 mx-auto pt-24 p-4 space-y-4">
      <h2 className="text-xl font-bold text-blue-700">Modifier le profil</h2>
        <form className="space-y-3">
          <div>
            <label className="text-sm font-medium">Nom</label>
            <input type="text" className="w-full mt-1 border rounded px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input type="email" className="w-full mt-1 border rounded px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="text-sm font-medium">Mot de passe</label>
            <input type="password" className="w-full mt-1 border rounded px-3 py-2 text-sm" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Enregistrer
          </button>
        </form>
      </main>
    
      
      </div>
    );
  }
  