import { ArrowRightSquareIcon, Sun } from "lucide-react";
import { JSX } from "react";
import { Button } from "../ui/button";

type Favori = {
  id: number;
  titre: string;
  date: string;
};

export function Favoris(): JSX.Element {
  const favoris: Favori[] = [
    { id: 1, titre: "Guide React Hooks", date: "12/04/2025" },
    { id: 2, titre: "Architecture REST API", date: "05/04/2025" },
    { id: 3, titre: "Architecture REST API", date: "05/04/2025" },
    { id: 4, titre: "Architecture REST API", date: "05/04/2025" },
    { id: 5, titre: "Architecture REST API", date: "05/04/2025" },
    { id: 6, titre: "Architecture REST API", date: "05/04/2025" },
    { id: 7, titre: "Architecture REST API", date: "05/04/2025" },
    { id: 8, titre: "Architecture REST API", date: "05/04/2025" },
    { id: 9, titre: "Architecture REST API", date: "05/04/2025" },
  ];

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
        <h2 className="text-xl font-bold text-blue-700">Vos favoris</h2>
        {favoris.map((item) => (
          <div key={item.id} className="p-3 border rounded shadow-sm">
            <h3 className="text-md font-semibold text-gray-800">{item.titre}</h3>
            <p className="text-sm text-gray-500">Ajouté le {item.date}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
