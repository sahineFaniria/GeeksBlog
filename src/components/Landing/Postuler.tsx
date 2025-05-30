import { JSX } from "react";
import { ArrowRightSquareIcon, Sun } from "lucide-react";
import { Button } from "../ui/button";

export function Postuler(): JSX.Element {
    return (
        <div className="w-full flex flex-col">
      {/* HEADER FIXED */}
      <header className="fixed top-0 left-0 w-full bg-white/50 shadow z-50 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <p className="font-bold text-xl text-blue-600">GeeksBlog</p>
          <div className="flex gap-2 items-center">
            <Sun className="w-5 text-blue-400" />
            <Button className="h-7 bg-white hover:bg-blue-50 text-blue-600 border border-blue-200">
              Déconnexion
              <ArrowRightSquareIcon className="w-6 h-6 text-blue-500 ml-1" />
            </Button>
          </div>
        </div>
      </header>

      {/* CONTENU PRINCIPAL (avec padding-top pour compenser le header fixed) */}
      <main className="w-2/4 mx-auto pt-24 p-4 space-y-4">
      <h2 className="text-xl font-bold text-blue-700">Ajouter un guide</h2>
        <form className="space-y-3">
          <div>
            <label className="text-sm font-medium">Titre du guide</label>
            <input type="text" className="w-full mt-1 border rounded px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="text-sm font-medium">Contenu</label>
            <textarea className="w-full mt-1 border rounded px-3 py-2 text-sm h-32" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Publier
          </button>
        </form>
      </main>
    
   
      </div>
    );
  }
  

        