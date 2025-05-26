import { JSX } from "react";

type EnregistrementItem = {
    id: number;
    titre: string;
    type: string;
  };
  
  export function Enregistrement(): JSX.Element {
    const enregistrements: EnregistrementItem[] = [
      { id: 1, titre: "Créer un blog avec Next.js", type: "Article" },
      { id: 2, titre: "Découverte Docker", type: "Vidéo" },
    ];
  
    return (
      <div className="p-4 space-y-4">
        <h2 className="text-xl font-bold text-blue-700">Enregistrements</h2>
        {enregistrements.map((item) => (
          <div key={item.id} className="p-3 border rounded shadow-sm">
            <h3 className="text-md font-semibold text-gray-800">{item.titre}</h3>
            <p className="text-sm text-gray-500">Type : {item.type}</p>
          </div>
        ))}
      </div>
    );
  }
  