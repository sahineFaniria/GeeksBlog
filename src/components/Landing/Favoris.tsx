import { JSX } from "react";

type Favori = {
    id: number;
    titre: string;
    date: string;
  };
  
  export function Favoris(): JSX.Element {
    const favoris: Favori[] = [
      { id: 1, titre: "Guide React Hooks", date: "12/04/2025" },
      { id: 2, titre: "Architecture REST API", date: "05/04/2025" },
    ];
  
    return (
      <div className="p-4 space-y-4">
        <h2 className="text-xl font-bold text-blue-700">Vos favoris</h2>
        {favoris.map((item) => (
          <div key={item.id} className="p-3 border rounded shadow-sm">
            <h3 className="text-md font-semibold text-gray-800">{item.titre}</h3>
            <p className="text-sm text-gray-500">Ajouté le {item.date}</p>
          </div>
        ))}
      </div>
    );
  }
  